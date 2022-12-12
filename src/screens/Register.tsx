import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export function Register() {
  const [step, setStep] = useState(0);
  const [isDriver, setIsDriver] = useState(true);
  const toggleSwitch = () => setIsDriver(previousState => !previousState);
  const [checked, setChecked] = useState('male');
  // const [email, setEmail] = useState('email');
  // const [invalid, setInvalid] = useState(true);
  const navigation = useNavigation<any>();

  // function validateEmail() {
  //   var re = /\S+@\S+\.\S+/;
  //   if (email === '' || email === undefined || email === null)
  //     return false;
  //   if (email.includes('@') === false || email.includes('.') === false)
  //     return false;
  //   return re.test(email);
  // }

  // function nextPage() {
  //   validateEmail() ? setInvalid(false) : setInvalid(true);
  //   if (invalid) {
  //     console.log('invalid');
  //     return;
  //   }
  //   setStep(1);
  // }

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
        <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
        <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry={true} />
        <TouchableOpacity onPress={() => setStep(1)} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
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
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Sexo: </Text>
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