import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import InputBox from "../../components/inputBox/inputBox";
import { useState } from "react";
import Botao from "../../components/Botao/botao";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services/api";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation();

    function ProcessarLogin() {
        
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.lof("Usuário Logado", user.email);
            navigation.navigate("carteirinha");
        })
        .catch((error) => {
            console.error("Erro ai logar", error.message);
        });
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Acesse sua conta."/>
                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <InputBox title="E-mail" onChangeText={(text) => setEmail(text)} value={email}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Senha" isPassword onChangeText={(text) => setSenha(text)} value={senha}/>
                        </View>
                        <View style={styles.btn}>
                            <Botao style={styles.btnBox} texto="Acessar" onPress={ProcessarLogin}/>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity onPress={() => navigation.navigate("registro_tela1")}>
                                <Text style={styles.footerText}>
                                    Criar minha conta
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;