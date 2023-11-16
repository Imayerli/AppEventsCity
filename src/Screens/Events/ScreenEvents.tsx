import {StyleSheet, Text, View,SafeAreaView,ScrollView} from "react-native";
import React from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackPramList} from "../../../App";
import ScreenHome from "../Home/ScreenHome";

type EventsProps = NativeStackScreenProps<RootStackPramList, "ScreenEvents">

export default function ScreenEvents({navigation}: EventsProps): JSX.Element {
    return (
        <ScrollView>
        <View>
            <Text style={styles.tituloTexto}>Eventos</Text>
            {/* CONTENEDOR DE TARJETAS */}
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}><Text>1</Text></View>
                <View style={[styles.card,styles.cardTwo]}><Text>2</Text></View>
                <View style={[styles.card,styles.cardThree]}><Text>3</Text></View>
            </View>
        </View>
        </ScrollView>
        /**/
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
    }

})

export default ScreenEvents;

