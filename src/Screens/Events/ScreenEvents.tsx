import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Alert,
    Modal,
    Pressable,
    FlatList,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Card,Icon } from '@rneui/themed';
import {RootStackPramList} from "../../../App";

type EventsProps = NativeStackScreenProps<RootStackPramList, "ScreenEvents">
type ItemData = {
    _id: string;
    title: string;
    description: string;
    time: string;
    city: string;
    img: string;
};

type ItemProps = {
    item: ItemData;
};

const Item = ({item}: ItemProps) =>  (
    <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image
            style={{ padding: 0 }}
            source={{ uri: item.img ,}}
        />
        <Text style={{ marginBottom: 10 }}>
            Descripcion: {item.description}
        </Text>
        <Text style={{ marginBottom: 10 }}>
            Fechas: {item.time}
        </Text>
        <Text style={{ marginBottom: 10 }}>
            Ciudad: {item.city}
        </Text>

    </Card>
);



export default function ScreenEvents({navigation,route }: EventsProps): JSX.Element {
    const { selectedCity } = route.params;
    const [eventsListGenerated, setEventsListGenerated] = useState<ItemData[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");
    useEffect(() => {
        searchEvent();
        console.log("renderizado");
    }, []);
    const crearEvento = async () => {
        fetch(`https://poetic-starlight-7b9552.netlify.app/.netlify/functions/events`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({title: title, description: description,time: time,city: city,img: img}),
        })
            .then(res => res.json())
            .then(async (res) => {
                console.log(res)
                if (res.acknowledged === true) {
                    Alert.alert('Evento Creado! ', 'El Evento fue creado Correcatamente', [
                        {text: 'OK', onPress: () => handleCityPress(selectedCity)},
                    ]);

                } else {
                    Alert.alert('Evento No Creado! ', 'El Evento no fue creado Correcatamente', [
                        {text: 'OK', onPress: () => handleCityPress(selectedCity)},
                    ]);
                }

            })
            .catch(error => console.log(error))
    }

    const handleCityPress = (item) => {
        navigation.navigate('ScreenEvents', { selectedCity: item });
    };

    const searchEvent = async () => {
        const baseURL = 'https://poetic-starlight-7b9552.netlify.app/.netlify/functions/getEvents';

        // Combina la URL base con el dato de la ciudad
        const url = `${baseURL}?city=${selectedCity}`;
        fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        }
    })
            .then(res => res.json())
            .then(async (res) => {
                console.log(res)
                setEventsListGenerated(res);
            })
            .catch((error) => {
                Alert.alert(JSON.stringify(error));
                console.error(error);
            });

    }

    const renderItem = ({item}: {item: ItemData}) => {
        return (
            <Item
                item={item}
            />
        );
    };
    const cityData = [
        { id: '1', city: 'Bogota' },
        { id: '2', city: 'Medellin' },
        { id: '3', city: 'Barranquilla' },
        { id: '4', city: 'Cucuta' },
        { id: '5', city: 'Cali' },
    ];

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Crear Evento</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Titulo."
                                placeholderTextColor="#003f5c"
                                onChangeText={(title) => setTitle(title)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Descripcion."
                                placeholderTextColor="#003f5c"
                                onChangeText={(description) => setDescription(description)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Horario."
                                placeholderTextColor="#003f5c"
                                onChangeText={(time) => setTime(time)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <Picker
                                style={{ height: 50, width: 320 }}
                                selectedValue={city}
                                onValueChange={(itemValue) => setCity(itemValue)}
                            >
                                <Picker.Item label="Selecciona una ciudad" value="" />
                                {cityData.map((cityItem) => (
                                    <Picker.Item key={cityItem.id} label={cityItem.city} value={cityItem.city} />
                                ))}
                            </Picker>

                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="URL Imagen. "
                                placeholderTextColor="#003f5c"
                                onChangeText={(img) => setImg(img)}
                            />
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonCrear]}
                            onPress={() => crearEvento()}>
                            <Text style={styles.textStyle}>Crear</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.tituloTexto}>Eventos</Text>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Crear Evento</Text>
            </Pressable>

            <FlatList
                data={eventsListGenerated}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 0,
        elevation: 2,
        height: 40,
        width: 100,
        textAlign: "center",
        justifyContent: "center",

    },
    buttonOpen: {
        backgroundColor: '#ff5714',
    },
    buttonCrear: {
        backgroundColor: '#ff5714',
    },
    buttonClose: {
        backgroundColor: '#2786d2',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputView: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    TextInput: {
    borderBottomColor: '#000000',
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        padding: 10,
    },
    btnStyle: {
        width: "50%",
            borderRadius: 5,
            height: 50,
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#ff5714",
    },
    textStyle:{
        fontSize: 15,
    },
    inputViewBtn:{
        marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
    },centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    })

export default ScreenEvents;

