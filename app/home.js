import { View, Text, Pressable } from "react-native";
import estilo from '../estilo';
import {Link} from 'expo-router';

export default function Home() {
  return (
    <View style={estilo.container}>
        <Text style={estilo.title}>Home page</Text>
        <Link href="/poesia" asChild >
            <Pressable>
                {({ hovered, pressed }) => (
                <Text>CLIQUE AQUI PARA LER UMA POESIA</Text>
                )}
            </Pressable>
        </Link>
    </View>
  )
}