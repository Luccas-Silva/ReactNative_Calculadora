import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  
  const [value, setValue] = useState('');

  const handlePress = (input) => {
    if (input === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Erro');
      }
    } else if (input === 'C') {
      setValue('');
    } else if (input === '⌫') {
      setValue(value.slice(0, -1));
    } else if (input !== ' ') {
      setValue(value + input);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput 
        style={styles.display}
        value={value}
        editable={false}
        placeholder="0"
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        {[
          ' ', ' ', 'C', '⌫',
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          ' ', '0', '.', '+',
          ' ', ' ', ' ', '='
        ].map((btn, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.btn, btn === ' ' ? styles.emptyBtn : null]} 
            onPress={() => handlePress(btn)}
            disabled={btn === ' '}
          >
            <Text style={[styles.btnText, btn === ' ' ? styles.emptyText : null]}>
              {btn}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
  display: {
    width: '90%',
    borderWidth: 2,
    borderRadius: 7,
    padding: 15,
    borderColor: '#e3e3e3',
    color: '#e3e3e3',
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 20,
    backgroundColor: '#333',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    width: '22%',
    height: 60,
    margin: 5,
    borderRadius: 7,
    backgroundColor: '#29292c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 24,
    color: '#e3e3e3',
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#e3e3e3',
  },
});

