import React from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackPramList} from "../../../App";
import {View, ScrollView, StyleSheet } from 'react-native';
import {Text, Card, Button, Icon } from '@rneui/themed';

type HomeProps = NativeStackScreenProps<RootStackPramList, "ScreenHome">


export default function ScreenHome({navigation}: HomeProps): JSX.Element {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title>Eventos </Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        Aqui encontraras todos los Eventos disponibles !!!
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="code"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                        }}
                        title="IR A EVENTOS"

                        onPress={() => {
                            navigation.navigate('ScreenEvents')
                        }}
                    />
                </Card>
            </View>
        </ScrollView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default ScreenHome;
