import { Text, View } from 'react-native';
import estilo from '../estilo';
import { useRouter } from 'expo-router';

const Poesia = () => {
  const roteador = useRouter();

  return (
    <View style={estilo.container}>
        <Text style={estilo.title}>Poesia</Text>
        <Text style={estilo.subtitle}>Ser ou não ser programadora!</Text>
        <Text onPress={()=>roteador.push('/tarefas')}>
            LISTA DE TAREFAS
        </Text>
    </View>
  )
}

export default Poesia;