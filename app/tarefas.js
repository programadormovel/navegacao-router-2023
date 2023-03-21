import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import estilo from '../estilo';
import { useRouter } from 'expo-router';

const Tarefas = () => {
  const roteador = useRouter();

  const lista = [
    {id: 1, tarefa: 'Tomar Café'},
    {id: 2, tarefa: 'Fazer Exercícios'},
    {id: 3, tarefa: 'Almoçar'},
    {id: 4, tarefa: 'Lavar Louça'},
    {id: 5, tarefa: 'Dormir'},
  ];

  function itemSelecionado({item}){
    roteador.push({pathname:'escolhida', params: item});
  }

  return (
    <View style={estilo.container}>
        <Text style={estilo.title}>Tarefas</Text>
        <FlatList
            data={lista}
            renderItem={({item})=>
                <TouchableOpacity onPress={()=>itemSelecionado({item})}>
                    <Text>{item.tarefa}</Text>
                </TouchableOpacity>
            }
            keyExtractor={(item)=>item.id}
        />
        <Text onPress={()=>roteador.push('/')}>
            IR PARA A PÁGINA PAGE
        </Text>
        <Text onPress={()=>roteador.replace('/home')}>
            IR PARA A PÁGINA HOME
        </Text>
        <Text onPress={()=>roteador.back()}>
            VOLTAR
        </Text>
    </View>
  )
}

export default Tarefas;