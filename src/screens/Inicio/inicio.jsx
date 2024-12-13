import { Image, Text, View } from "react-native";
import { styles } from "./inicio.style";
import icons from "../../constants/icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useUser } from "../../services/UserContext";


function Inicio(){

    const { userData, setUserData } = useUser();

    useEffect(() => {
        async function loadUserData() {
            const data = await AsyncStorage.getItem("userData");
            if (data) {
                setUserData(JSON.parse(data));
            }
        }
        loadUserData();
    }, []);

    if (!userData) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.text_box}>
                    <Text style={styles.bold_text}>Olá, {userData.nome.toUpperCase() || "Usuário"}</Text>
                    <Text style={styles.text}>Acesse sua carteira digital abaixo</Text>
                </View>
            </View>
            <View style={styles.box_carteirinha}>
                <Image style={styles.carteirinha} source={icons.Carteirinha}/>
                <View style={styles.content}>
                    <Image style={styles.fotoValidacao} source={icons.fotoValidacao}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.texto_nome}>{userData.nome.toUpperCase() || "NOME DO USUÁRIO"}</Text>
                        <View style={styles.linhaHorizontal}>
                            <Text style={styles.ra}>{userData.matricula}</Text>
                            <Text style={styles.data}>{userData.nascimento}</Text>
                            <Text style={styles.cpf}>{userData.cpf}</Text>
                        </View>
                        <Text style={styles.curso}>{userData.curso.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Inicio;