import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export function Home({ route }: { route: any}, navigation: any) {

    const userType = route.params.userType;
    
    return (
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <Icon name="user" size={24} color="#000" />
                <Icon name="setting" size={24} color="#000" />
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