import {ScrollView, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackPramList} from "../../../App";

type HomeProps = NativeStackScreenProps<RootStackPramList, "ScreenHome">


export default function ScreenHome({navigation}: HomeProps): JSX.Element {

    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
