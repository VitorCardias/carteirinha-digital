import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro_tela2.style";
import InputBox from "../../components/inputBox/inputBox";
import { useState } from "react";
import Botao from "../../components/Botao/botao";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services/api";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registro_Tela2(){

    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    const navigation = useNavigation();

    function criarConta() {
        if (senha1 !== senha2) {
            alert("As senhas não coincidem!");
            return;
        }
        createUserWithEmailAndPassword(auth, email, senha1)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Conta criada com sucesso para:", user.email);
            navigation.navigate("login");
        })
        .catch((error) => {
            console.error("Erro ai criar conta", error.message);
        });
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Criar uma conta"/>
                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <InputBox title="E-mail" onChangeText={(text) => setEmail(text)} value={email}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Escolha uma senha" isPassword onChangeText={(text) => setSenha1(text)} value={senha1}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Confirme a senha" isPassword onChangeText={(text) => setSenha2(text)} value={senha2}/>
                        </View>
                        <View style={styles.btn}>
                            <Botao style={styles.btnBox} texto="Criar minha conta" onPress={criarConta}/>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity onPress={() => navigation.navigate("login")}>
                                <Text style={styles.footerText}>
                                    Acessar minha conta
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Registro_Tela2;