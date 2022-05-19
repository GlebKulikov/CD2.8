import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Image, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image source={require('../images/1.png')} style={{width: 100, height: 100, alignSelf: 'center', marginBottom: '5%'}}/>
        <Text style={styles.title}>Авторизация</Text>
        <Text style={styles.info}>Введите ваш логин и пароль для входа</Text>
        <View style={styles.field}>
        <Feather name="mail" size={24} color="black"/>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Email"
          returnKeyType="done"
        />
        </View>
        <View style={styles.field}>
        <Feather name="lock" size={24} color="black"/>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={onChangePass}
          returnKeyType="done"
        />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Сообщение', {password: password, email: email, type: 1})}>
            <View style={styles.button}>
              <Text style={{ color: 'white', padding:10, fontSize: 20 }}>Войти</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.quest}>Еще нет аккаунта?</Text>
        <Button title='Зарегистрироваться' onPress={() => navigation.navigate("Регистрация")}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#556B2F',
    padding: 8,
  },
  form: {
    alignContent: 'center',
    borderRadius: '30px',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign:'center',
    marginBottom: '4%',
    fontWeight: 'bold',
    color: '#3b4247',
    fontSize: 25,
    fontFamily: 'Verdana'
  },
  info: {
    textAlign:'center',
    marginHorizontal: '15%',
    marginBottom: '4%',
    color: 'gray',
    fontSize: 14.5,
    fontFamily: 'Verdana'
  },
  quest: {
    marginTop:'15%',
    textAlign:'center',
    marginHorizontal: '15%',
    color: '#3b4247',
    fontSize: 14.5,
    fontFamily: 'Verdana'
  },
  input: {
    flex:1,
    fontSize: 15,
    height: 40,
    marginTop: '3%',
    padding: '3%',
  },
  button: {
    paddingHorizontal: '3%',
    marginHorizontal: '15%',
    marginTop: '7%',
    backgroundColor: '#3b4247',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 30
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    marginHorizontal: '15%',
    marginBottom: 10,
    paddingHorizontal: '3%',
    borderColor: 'black',
    borderRadius: '30px',
  },
});

export default Login;