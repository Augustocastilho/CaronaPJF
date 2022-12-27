import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFreather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export function Profile() {
    const navigation = useNavigation<any>();

    function navigateToEditProfile() {
        navigation.navigate('EditProfile');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Icon name="arrow-left-top" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigateToEditProfile() }}>
                    <IconFreather name="edit" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.containerProfile}>
                <Image source={require('../../assets/cristina-pinheiro-2001.png')} style={styles.image} />
                <Text style={styles.name}>Cristina Pinheiro</Text>
                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Telefone:</Text>
                        <Text style={styles.fieldsText}>+55 11 99999-9999</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>E-mail:</Text>
                        <Text style={styles.fieldsText}>cristina2009@hotmail.com</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Senha:</Text>
                        <Text style={styles.fieldsText}>••••••••••••</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Data de Nascimento:</Text>
                        <Text style={styles.fieldsText}>10/05/1999</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}