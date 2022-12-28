import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFreather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export function Profile({ route }: { route: any }) {
    const navigation = useNavigation<any>();
    const userType = route.params.userType;
    const user = route.params.user;

    function navigateToEditProfile() {
        navigation.navigate('EditProfile', { userType: userType, user: user });
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
                <Image source={user.profile_picture} style={styles.image} />
                <Text style={styles.name}>{user.name}</Text>
                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Telefone:</Text>
                        <Text style={styles.fieldsText}>{user.phone}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>E-mail:</Text>
                        <Text style={styles.fieldsText}>{user.email}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Senha:</Text>
                        <Text style={styles.fieldsText}>••••••••••••</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Data de Nascimento:</Text>
                        <Text style={styles.fieldsText}>{user.birthDate}</Text>
                    </View>
                    {userType === "driver" && (
                        <View>
                            <Text style={styles.subTitle}>Dados do Veículo:</Text>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>RENAVAM:</Text>
                                <Text style={styles.fieldsText}>{user.car.renavam}</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>Modelo:</Text>
                                <Text style={styles.fieldsText}>{user.car.model}</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>Marca:</Text>
                                <Text style={styles.fieldsText}>{user.car.brand}</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>Ano:</Text>
                                <Text style={styles.fieldsText}>{user.car.year}</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>Cor:</Text>
                                <Text style={styles.fieldsText}>{user.car.color}</Text>
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.fieldsText}>Placa:</Text>
                                <Text style={styles.fieldsText}>{user.car.plate}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}