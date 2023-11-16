import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from 'react';

export default function ScreenEvents(): JSX.Element {
    return (
        <View>
            <Text style={styles.tituloTexto}>Eventos</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}>Event 1</View>
                <View style={[styles.card,styles.cardTwo]}>Event 2</View>
                <View style={[styles.card,styles.cardThree]}>Event 3</View>
            </View>
        </View>
    <View>
        <Text style={styles.tituloTexto}>Eventos 1</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <Text style={styles.tituloTexto}>Eventos</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}>Event 1</View>
                <View style={[styles.card,styles.cardTwo]}>Event 2</View>
                <View style={[styles.card,styles.cardThree]}>Event 3</View>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    tituloTexto: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex:1
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin:8
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#EF5354'
    },
    cardThree:{
        backgroundColor: '#EF5354'
    }
})


