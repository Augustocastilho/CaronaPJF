import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DRIVER_USERS } from '../utils/driverUsers';
import { PASSENGER_USERS } from '../utils/passengerUsers';

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(5, 'Mínimo de 5 caracteres')
});

export function Login() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation<any>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => validateUser(data);

    function validateUser(data: FormData) {
        const userType = isEnabled ? "passenger" : "driver";
        const user = userType === "driver" ? DRIVER_USERS.find(user => user.email === data.email) : PASSENGER_USERS.find(user => user.email === data.email);
        if (user) {
            if (user.password === data.password) {
                navigateToHome(user.id);
            } else {
                alert("Senha incorreta");
            }
        } else {
            alert("Usuário não encontrado");
        }
    }

    function navigateToHome(userId: number) {
        const userType = isEnabled ? "passenger" : "driver";
        console.log(userId);
        navigation.navigate('Home', { userType: userType, user: userId });
    }

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

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="E-mail"
                            style={[styles.input, errors.email && { borderColor: 'red' }]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text style={{color: 'red'}}>{errors.email.message}</Text>}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Senha"
                            style={[styles.input, errors.password && { borderColor: 'red' }]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={true}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text style={{color: 'red'}}>{errors.password.message}</Text>}

                <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

