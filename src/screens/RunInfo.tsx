import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';

export function RunInfo() {
    const navigation = useNavigation<any>();

    const [state, setState] = React.useState(false);

    const showAlert = () => {
        setState(true);
    };

    const hideAlert = () => {
        setState(false);
    };

    const hideAlertAndClosePage = () => {
        setState(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Icon name="arrow-left-top" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Dados da corrida</Text>
            <View style={styles.containerProfile}>
                <View style={{ marginTop: -35, alignItems: 'center', marginBottom: -20 }}>
                    <Image source={require('../../assets/antonio-souza-1001.png')} style={styles.image} />
                    <Text style={styles.name}>Antonio Souza</Text>
                    <View style={styles.stars}>
                        <Icon name='star' size={20} color='#FFD700' />
                        <Icon name='star' size={20} color='#FFD700' />
                        <Icon name='star' size={20} color='#FFD700' />
                        <Icon name='star' size={20} color='#FFD700' />
                        <Icon name='star' size={20} color='#FFD700' />
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Carro:</Text>
                        <Text style={styles.fieldsText}>Gol</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Cor:</Text>
                        <Text style={styles.fieldsText}>Vermelho</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Placa:</Text>
                        <Text style={styles.fieldsText}>ABC0000</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Valor:</Text>
                        <Text style={styles.fieldsText}>R$ 21,50</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Método de pagamento:</Text>
                        <Text style={styles.fieldsText}>Cartão de Crédito</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Saída:</Text>
                        <Text style={styles.fieldsText}>UFJF</Text>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldsText}>Destino:</Text>
                        <Text style={styles.fieldsText}>Parque Hafeld</Text>
                    </View>
                </View>
                {/* <View style={styles.messageContainer}>
                        <TextInput style={styles.messageInput} placeholder='Enviar uma mensagem' />
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name='send-circle-outline' size={45} color='#C4C4C4' />
                        </TouchableOpacity>
                    </View> */}

                <TouchableOpacity style={styles.button} onPress={() => showAlert()}>
                    <Text style={styles.buttonText}>Cancelar a corrida</Text>
                </TouchableOpacity>
            </View>
            <AwesomeAlert
                show={state}
                showProgress={false}
                contentContainerStyle={{ borderRadius: 25 }}
                title="Tem certeza que deseja cancelar a corrida?"
                titleStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Não"
                cancelButtonColor='#fff'
                cancelButtonTextStyle={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold', fontSize: 16 }}
                confirmText="Sim, cancelar a corrida"
                confirmButtonColor="#fff"
                confirmButtonTextStyle={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold', fontSize: 16 }}
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    hideAlertAndClosePage();
                }}
            />
        </View>
    )
}