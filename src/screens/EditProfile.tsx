import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function EditProfile() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Icon name="arrow-left-top" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Editar Perfil</Text>
        </View>
    )
}