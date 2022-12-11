import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const [step, setStep] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<any>();
  
  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        if (step === 0) {
          navigation.goBack();
        } else {
          setStep(0);
        }
       }}>
        <Icon name="arrow-left-top" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Registrar</Text>
      {step === 0 ?
        <View style={styles.form}>
          <View style={styles.switchButton}>
            <Text>MOTORISTA</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text>PASSAGEIRO</Text>
          </View>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
          <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry={true}/>
          <TouchableOpacity onPress={() => setStep(1)} style={styles.button}>
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.form}>
          <TextInput placeholder="Nome" style={styles.input} />
          <TextInput placeholder="Número de telefone" style={styles.input} />
          <TouchableOpacity onPress={() => setStep(0)} style={styles.button}>
            <Text style={styles.buttonText}>REGISTRAR</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}