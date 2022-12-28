import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';

export function EditProfile({ route }: { route: any }) {
    const navigation = useNavigation<any>();
    const userType = route.params.userType;
    const user = route.params.user;

    const [state, setState] = React.useState(false);

    const [nameValue, setNameValue] = React.useState(user.name);
    const [emailValue, setEmailValue] = React.useState(user.email);
    const [passwordValue, setPasswordValue] = React.useState(user.password);
    const [phoneValue, setPhoneValue] = React.useState(user.phone);
    const [birthDateValue, setBirthDateValue] = React.useState(user.birthDate);
    const [renavamValue, setRenavamValue] = React.useState(user.car.renavam);
    const [modelValue, setModelValue] = React.useState(user.car.model);
    const [brandValue, setBrandValue] = React.useState(user.car.brand);

    const showAlert = () => {
        setState(true);
    };

    const hideAlertAndClosePage = () => {
        setState(false);
        navigation.navigate('Home', { userType: userType, user: user });
    };

    function saveProfile() {
        user.name = nameValue;
        user.email = emailValue;
        user.password = passwordValue;
        user.phone = phoneValue;
        user.birthDate = birthDateValue;
        if (userType === "driver") {
            user.car.renavam = renavamValue;
            user.car.model = modelValue;
            user.car.brand = brandValue;
        }
        showAlert();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Icon name="arrow-left-top" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerProfile}>
                <Image source={user.profile_picture} style={styles.image} />
                <TextInput placeholder="Nome Completo" style={styles.input} value={nameValue} onChangeText={(value) => setNameValue(value)} />
                <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" value={emailValue} onChangeText={(value) => setEmailValue(value)} />
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} value={passwordValue} onChangeText={(value) => setPasswordValue(value)}/>
                <TextInput placeholder="Número de telefone" style={styles.input} keyboardType="phone-pad" maxLength={15} value={phoneValue} onChangeText={(value) => setPhoneValue(value)}/>
                <TextInput placeholder="Data de nascimento" style={styles.input} keyboardType="numeric" maxLength={10} value={birthDateValue} onChangeText={(value) => setBirthDateValue(value)}/>
                {userType === "driver" && (
                    <View style={{ width: '100%' }}>
                        <Text style={styles.subTitle}>Dados do Veículo:</Text>
                        <TextInput placeholder="RENAVAM" style={styles.input} keyboardType="numeric" maxLength={11} value={renavamValue} onChangeText={(value) => setRenavamValue(value)}/>
                        <TextInput placeholder="Modelo" style={styles.input} value={modelValue} onChangeText={(value) => setModelValue(value)}/>
                        <TextInput placeholder="Marca" style={styles.input} defaultValue={brandValue} onChangeText={(value) => setBrandValue(value)}/>
                    </View>
                )}
                <TouchableOpacity onPress={() => { saveProfile() }} style={styles.button}>
                    <Text style={styles.buttonText}>SALVAR</Text>
                </TouchableOpacity>
            </View>

            <AwesomeAlert
                show={state}
                showProgress={false}
                contentContainerStyle={{ borderRadius: 25 }}
                title="Dados alterados com sucesso!"
                titleStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}
                // message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                // cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor="#fff"
                confirmButtonTextStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}
                // onCancelPressed={() => {
                //     hideAlert();
                // }}
                onConfirmPressed={() => {
                    hideAlertAndClosePage();
                }}
            />
        </View>
    )
}