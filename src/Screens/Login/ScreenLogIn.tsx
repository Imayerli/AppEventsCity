import React, { useState,useEffect } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity, Image, StatusBar, StatusBarStyle, Alert,
} from "react-native";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RootStackPramList} from "../../../App";
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

type LoginProps = NativeStackScreenProps<RootStackPramList, "LogIn">

export default function ScreenLogIn({navigation}: LoginProps): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[0],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
        'fade' | 'slide' | 'none'
        >(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };
    const setStringValue = async (value: string) => {
        try {

            await AsyncStorage.setItem('@userauthkey', value)
        } catch (e) {
            console.log(e)
        }
    }

    const login = async () => {
        fetch(`http://poetic-starlight-7b9552.netlify.app/.netlify/functions/login`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({user: email, password: password}),
        })
            .then(res => res.json())
            .then(async (res) => {
                console.log(res)

                if (res.msg === "Bienvenido") {

                    await setStringValue(email)
                    // Perform navigation if the react navigation is ready to handle actions
                    //navigationRef.navigate(name, params);
                    navigation.navigate('ScreenHome')
                } else {
                    Alert.alert('Error de Inicio de sesion ', 'Parametros ingresados incorrectos', [
                        {text: 'Cerrar', onPress: () =>  console.log("Parametros incorrectos")},
                    ]);

                }

            })
            .catch(error => console.log(error))


    }


   const sign = () => {
        navigation.navigate("Signup")

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require("../../img/logo.png")} />
            </View>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />
            <View style={styles.inputView}>
                <Text style={{fontSize: 20}}>Inicio de Sesion</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    editable
                    multiline
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.inputViewBtn}>
                <TouchableOpacity style={[styles.loginBtn]} onPress={() => login()}>
                    <Text style={styles.loginText}>INICIAR SESION</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
    loginBtn: {
        width: "50%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#ff5714",
    },
    loginText:{
        fontSize: 15,
    },
    inputViewBtn:{
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    containerImage:{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: 500,
        marginBottom: 10,
    }
});


