import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Background } from "../components/Background";

import { useFonts, ConcertOne_400Regular } from "@expo-google-fonts/concert-one";
import { useNavigation } from "@react-navigation/native";


export function LoggedOut() {
    let [fontsLoaded] = useFonts({
        ConcertOne_400Regular,
    });
    const navigation = useNavigation<any>();

    function navigateToLogin() {
        navigation.navigate('Login');
    }
    function navigateToRegister() {
        navigation.navigate('Register');
    }

    if (!fontsLoaded) return (<View></View>)
    else {
        return (
            <View style={{ flex: 1 }}>
                <Background>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Carona
                        </Text>
                        <Text style={styles.title}>
                            PJF
                        </Text>
                    </View>
                </Background>
                <View style={styles.footer} >
                    <TouchableOpacity onPress={() => navigateToLogin()} style={styles.button}>
                        <Text>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToRegister()} style={styles.button2}>
                        <Text style={{ color: '#fff' }}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 55,
        color: '#000',
        fontFamily: 'ConcertOne_400Regular',
        margin: -5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 100,
        padding: 20,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderWidth: 2,
        width: '47%',
        height: 60,
    },
    button2: {
        backgroundColor: '#000',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderWidth: 2,
        width: '47%',
        height: 60,
    },
})