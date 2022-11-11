import { StyleSheet, 
         TextInput,
         View 
} from 'react-native';
import { Button } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const [lembrete,setLembrete] = useState('')
  const[lembretes, setLembretes] = useState([])
  const capturarTexto = (lembreteDigitado) => {
    lembreteDigitado = lembreteDigitado.toUpperCase()
    // não faça isso!
    // lembrete = lembreteDigitado
    // faça isso:
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes([lembrete, ...lembretes])
    console.log(lembretes)
    setLembrete('')
  }

  return (
    <View style={{padding: 40}}>
       <View>
        <TextInput style={{borderBottomColor: '#888', borderBottomWidth: 1, padding: 12, marginBottom: 4}}
        placeholder="Lembrar..." onChangeText={capturarTexto} value={lembrete} />

        <Button title="OK" onPress={adicionarLembrete}/>
      </View>

      <View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({

});