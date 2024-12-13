import icons from "../../constants/icons";
import { styles } from "./validacao.style";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useUser } from "../../services/UserContext";

function Validacao(){

    const { userData } = useUser();

    if (!userData) return <Text>Carregando...</Text>;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Carteirinha AMF</Text>
                <Image source={icons.logo_amf} style={styles.image}/>
            </View>
            <View style={styles.containerFoto}>
                <View style={styles.foto}>
                    <Image style={styles.image_perfil} source={icons.fotoValidacao}/>
                </View>
                <View style={styles.QRcode}>
                    <Image style={styles.qrcode} source={icons.QRcode}/>
                    <Text style={styles.code}>Q768JGE</Text>
                </View>
            </View>
            <View style={styles.infoCard}>
                <View style={styles.container_info}>
                    <Text style={styles.name}>{userData.nome}</Text>
                    <View style={styles.info_box}>
                        <Text style={styles.info}>Inst. Ensino: ANTONIO MENEGHETTI FACULDADE</Text>
                        <Text style={styles.info}>Curso: {userData.curso.toUpperCase()}</Text>
                        <Text style={styles.info}>Nivel de Ensino: ENSINO SUPERIOR</Text>
                        <Text style={styles.info}>CPF: {userData.cpf}</Text>
                        <Text style={styles.info}>Data de Nascimento: {userData.nascimento}</Text>
                        <Text style={styles.info}>RA: {userData.matricula}</Text>
                        <Text style={styles.info}>Vencimento: 2024</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.botao}>
                <Image source={icons.Certificado}/>
                <Text style={styles.btn_text}>Certificado</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Validacao;