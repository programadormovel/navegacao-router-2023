import { View, Text } from 'react-native';
import estilo from '../estilo';
import {useRouter, useSearchParams} from 'expo-router';

const TarefaEscolhida = ({params}) => {
    const { id, tarefa } = useSearchParams();
    const roteador = useRouter();

    return (
        <View style={estilo.container}>
            <Text style={estilo.subtitle}>
                {tarefa}
            </Text>
            <View>
                <Text
                    onPress={()=>roteador.back()}
                >VOLTAR</Text>
            </View> 
        </View>
    )
}

export default TarefaEscolhida;