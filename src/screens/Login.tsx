import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation<any>();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <Icon name="arrow-left-top" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.form}>
                <View style={styles.switchButton}>
                    <Text>MOTORISTA</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text>PASSAGEIRO</Text>
                </View>
                <TextInput placeholder="E-mail" style={styles.input} />
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}