import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ShadowStyleIOS } from 'react-native';

export default function Prato() {
    return (
        <KeyboardAvoidingView style={styles.background} Behavior={'padding'}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/icon_cardapio.png')} style={styles.logo} />
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.container2}>
                        <Text style={styles.txt}>Arroz parboilizado</Text>
                    </View>

                    <View style={styles.container3}>
                        <Image source={require('../../assets/cardapio.png')} style={styles.logo2} />
                        <Image source={require('../../assets/tabela.png')} style={styles.logo3} />
                    </View>

                    <View style={styles.container4}>
                        <TouchableOpacity style={styles.touchableOpacity2} >
                            <Text style={styles.txt2}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
        justifyContent: 'center',
        padding: 10,
    },
    touchableOpacity: {
        backgroundColor: '#89CFF0',
        width: '110%',

        height: 250,
        shadowColor: "#89CFF0",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    logo2: {
        width: 100,
        height: 100,
        marginBottom: 15,

        padding: 10,
    },
    container: {
        flex: 1,
        width: '90%',
    },
    txt: {
        width: '60%',
        marginBottom: 15,
        color: '#333333',
        fontSize: 17,
        borderRadius: 7,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '150%',
    },

    logo3: {
        width: 230,
        height: '65%',

        padding: 10,
    },
    container3: {
        flex: 1,
        flexDirection: 'row',

    },
    touchableOpacity2: {
        backgroundColor: '#d3d3d3',
        width: '20%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        marginBottom: 15,
        elevation: 8,
    },
    container4: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt2: {
        backgroundColor: "#d3d3d3",
        fontSize: 12,
    },
});
