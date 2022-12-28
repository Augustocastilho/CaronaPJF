import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export function Home({ route }: { route: any}) {
    const navigation = useNavigation<any>();
    const userType = route.params.userType;
    const userId = route.params.user;
    
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigateToProfile()}>
                    <Icon name="user" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="setting" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerHome}>
                <TouchableOpacity onPress={() => { }} style={styles.buttonRounded}>
                    <Text style={styles.buttonText}>{userType === "driver" ? "VER SOLICITAÇÕES" : "NOVA CORRIDA"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.history}>
                    <Text style={styles.historyText}>Histórico de corridas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}