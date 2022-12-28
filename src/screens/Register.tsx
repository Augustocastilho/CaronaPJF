import React from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AwesomeAlert from 'react-native-awesome-alerts';
import { DRIVER_USERS } from '../utils/driverUsers';
import { PASSENGER_USERS } from '../utils/passengerUsers';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormData1 {
  name: string;
  phone: string;
  birthDate: string;
}

const schema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(5, 'Mínimo de 5 caracteres'),
  confirmPassword: yup.string().required('Confirmação de senha obrigatória').min(5, 'Mínimo de 5 caracteres').equals([yup.ref('password')], 'Senhas não conferem'),
});

export function Register() {
  const [step, setStep] = useState(0);
  const [isDriver, setIsDriver] = useState(true);
  const toggleSwitch = () => setIsDriver(previousState => !previousState);
  const [checked, setChecked] = useState('male');
  const navigation = useNavigation<any>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => validateUser(data);

  const [state, setState] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const showAlert = () => {
    setState(true);
  };

  const hideAlert = () => {
    setState(false);
  };

  function validateUser(data: FormData) {
    const user = DRIVER_USERS.find(user => user.email === data.email) || PASSENGER_USERS.find(user => user.email === data.email);
    if (!user) {
      setStep(step + 1);
    } else {
      setMsg('Usuário já cadastrado!');
      showAlert();
    }
  }

  const alert = () => {
    return (
      <AwesomeAlert
        show={state}
        showProgress={false}
        contentContainerStyle={{ borderRadius: 25 }}
        title="Erro"
        titleStyle={{ color: '#000', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}
        message={msg}
        messageStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#fff"
        confirmButtonTextStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    );
  }

  function page0() {
    return (
      <View style={styles.form}>
        <View style={styles.switchButton}>
          <Text>MOTORISTA</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#767577" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={!isDriver}
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
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

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
        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Confirmar senha"
              style={[styles.input, errors.confirmPassword && { borderColor: 'red' }]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}

        <TouchableOpacity onPress={ handleSubmit(onSubmit) } style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
        {alert()}
      </View>
    );
  }

  function page1() {
    return isDriver ?
      <View style={styles.form}>
        <TextInput placeholder="Nome Completo" style={styles.input} />
        <TextInput placeholder="Número de telefone" style={styles.input} keyboardType="phone-pad" maxLength={11} />
        <TextInput placeholder="Data de nascimento" style={styles.input} keyboardType="numeric" maxLength={8} />
        <View style={styles.radioGroup}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Sexo: </Text>
          <View style={styles.radioButton}>
            <RadioButton
              value="male"
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Masculino</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              value="female"
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>Feminino</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setStep(2)} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR (3/5)</Text>
        </TouchableOpacity>
      </View>
      :
      <View style={styles.form}>
        <TextInput placeholder="Nome Completo" style={styles.input} />
        <TextInput placeholder="Número de telefone" style={styles.input} keyboardType="phone-pad" maxLength={11} />
        <TextInput placeholder="Data de nascimento" style={styles.input} keyboardType="numeric" maxLength={8} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
  }

  function page2() {
    return (
      <View style={styles.form}>
        <TextInput placeholder="Número de identidade" style={styles.input} maxLength={8} />
        <TextInput placeholder="CPF" style={styles.input} maxLength={11} />
        <TextInput placeholder="CNH" style={styles.input} maxLength={9} />
        <TouchableOpacity onPress={() => setStep(3)} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR (4/5)</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function page3() {
    return (
      <View style={styles.form}>
        <TextInput placeholder="RENAVAN" style={styles.input} maxLength={11} />
        <TextInput placeholder="Marca" style={styles.input} />
        <TextInput placeholder="Ano" style={styles.input} keyboardType="numeric" maxLength={4} />
        <TextInput placeholder="Modelo" style={styles.input} />
        <TextInput placeholder="Cor" style={styles.input} />
        <TextInput placeholder="Placa" style={styles.input} maxLength={7} />
        <TextInput placeholder="Cidade" style={styles.input} maxLength={7} />
        <TextInput placeholder="Estado" style={styles.input} maxLength={7} />
        <TouchableOpacity onPress={() => setStep(4)} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR (5/5)</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function page4() {
    return (
      <View style={styles.form}>
        <TouchableOpacity onPress={() => { }} style={styles.buttonUpload}>
          <Text style={styles.buttonText}>FOTO CNH</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.buttonUpload}>
          <Text style={styles.buttonText}>FOTO CRLV</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function pages() {
    switch (step) {
      case 0:
        return page0();
      case 1:
        return page1();
      case 2:
        return page2();
      case 3:
        return page3();
      case 4:
        return page4();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        if (step === 0) {
          navigation.goBack();
        } else {
          setStep(step - 1);
        }
      }}>
        <Icon name="arrow-left-top" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Registrar</Text>
      {pages()}
    </View>
  )
}