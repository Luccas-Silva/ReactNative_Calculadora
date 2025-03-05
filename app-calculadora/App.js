import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';

export default function App() {
  
  const [value,setValue] = useState('');
  const [result,setResult] = useState(0);

  const operation = () => {
    try {
      setResult(eval(value));
    } catch {
      setResult('Erro');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <View style={styles.displayContainer}>
        <TextInput 
          style={styles.display}
          value={String(value)}
          onChangeText={(text)=>{setValue(text)}}
          placeholder="Digite a operação"
          placeholderTextColor="#888"
          keyboardType="numeric"
        ></TextInput>

        <TextInput 
          style={[styles.display, styles.result]}
          value={String(result)}
          editable={false}
        ></TextInput>
      </View>

      <TouchableHighlight 
        style={styles.btn}
        onPress={() => operation()}
        underlayColor="#444"
      >
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e3e3e3',
    marginBottom: 20,
  },
  displayContainer: {
    width: '80%',
  },
  display: {
    borderWidth: 2,
    borderRadius: 7,
    padding: 10,
    borderColor: '#e3e3e3',
    color: '#e3e3e3',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  result: {
    backgroundColor: '#333',
  },
  btn: {
    marginTop: 20,
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#e3e3e3',
    backgroundColor: '#29292c',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#e3e3e3',
    fontWeight: 'bold',
  },
});
