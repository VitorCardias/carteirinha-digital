import icons from "../../constants/icons";
import { styles } from "./perfil.style";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { auth } from "../../services/api";
import { signOut } from "firebase/auth";

function Perfil(){

    function LogOut() {
        signOut(auth);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.Location} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Endereço</Text>
                    <Text style={styles.subTitle}>Meu endereço</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.Arrow} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.Books} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Meus Dados</Text>
                    <Text style={styles.subTitle}>Informações da minha conta</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.Arrow} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item} onPress={LogOut}>
                <View style={styles.containerIcone}>
                    <Image source={icons.LogOut} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Desconectar</Text>
                    <Text style={styles.subTitle}>Desconectar seu usuário deste aparelho</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.Arrow} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default Perfil;