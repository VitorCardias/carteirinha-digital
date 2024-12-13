import { Text, TouchableOpacity } from "react-native";
import { styles } from "./botao.style";

function Botao(props){
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.texto}>
                {props.texto}
            </Text>
        </TouchableOpacity>
    )
}
export default Botao;