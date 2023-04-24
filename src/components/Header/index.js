import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 23;

export default function Header({ name }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}
                /*from={{translateY: -150, opacity: 0}}
                animate={{translateY: 0, opacity: 1}}
                transition={{type: "timing", duration: 800, delay: 300}}*/>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    }
})