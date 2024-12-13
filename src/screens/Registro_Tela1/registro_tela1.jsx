import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro_tela1.style";
import Header from "../../components/Header/header";
import InputBox from "../../components/inputBox/inputBox";
import Botao from "../../components/Botao/botao";
import { useState } from "react";
import SelectInput from "../../components/SelectInput/selectInput";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

function Registro_Tela1(){

    const [curso, setCurso] = useState("");
    const cursos = ["Sistemas de Informação", "Direito", "Administração", "Ciências Contabeis", "Pedagogia", "Ontopsicologia", "Hotelaria", "Gastronomia"]

    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cpf, setCPF] = useState("");

    const [invalidFields, setInvalidFields] = useState({ matricula: false, cpf: false, nascimento: false });

    const navigation = useNavigation();

    async function salvarDadosUsuario() {

        if (!nome || !curso || matricula.length !== 6 || cpf.length !== 14 || nascimento.length !== 10) {
            setInvalidFields({
                matricula: matricula.length !== 6,
                cpf: cpf.length !== 14,
                nascimento: nascimento.length !== 10,
            });
            console.error("Todos os campos devem ser preenchidos corretamente antes de salvar.");
            return;
        }
        const usuario = {
            nome,
            curso,
            matricula,
            cpf,
            nascimento,
        };
        await AsyncStorage.setItem("userData", JSON.stringify(usuario));
        navigation.navigate("registro_tela2")
    }

    const formatCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2") 
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2") 
            .slice(0, 14);
    };

    const formatDate = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .slice(0, 10);
    };

    const formatMatricula = (value) => {
        return value
            .replace(/\D/g, "")
            .slice(0, 6);
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Acesse sua conta."/>
                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <InputBox
                                title="Nome Completo"
                                onChangeText={(text) => setNome(text)}
                                value={nome}
                            />
                        </View>
                        <View style={styles.form}>
                            <SelectInput 
                                title="Curso" 
                                value={curso} 
                                setValue={setCurso} 
                                valores={cursos} 
                                label="Selecione um curso"
                            />
                        </View>
                        <View style={styles.doubleInput}>
                            <InputBox 
                                title="Data de Nascimento"
                                placeholder="dd/MM/yyyy"
                                onChangeText={(text) => setNascimento(formatDate(text))}
                                value={nascimento}
                                keyboardType="numeric"
                                style={invalidFields.nascimento ? { borderColor: 'red' } : null}
                            />
                            <InputBox 
                                title="Matricula"
                                onChangeText={(text) => setMatricula(formatMatricula(text))}
                                value={matricula}
                                keyboardType="numeric"
                                style={invalidFields.matricula ? { borderColor: 'red' } : null}
                            />
                        </View>
                        <View style={styles.form}>
                            <InputBox 
                                title="CPF" 
                                onChangeText={(text) => setCPF(formatCPF(text))} 
                                value={cpf} 
                                keyboardType="numeric"
                                style={invalidFields.matricula ? { borderColor: 'red' } : null}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Botao texto="Próximo" onPress={salvarDadosUsuario}/>
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

export default Registro_Tela1;