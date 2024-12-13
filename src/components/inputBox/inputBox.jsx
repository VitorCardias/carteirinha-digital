import { Text, TextInput, View } from "react-native";
import { styles } from "./inputBox.style";

function InputBox(props){
    return(
        <View style={styles.container}>
            {
                // Senão passar a propriedade TITLE ele não renderiza o TEXT
                props.title && <Text style={styles.text}>{props.title}</Text>
            }
            <TextInput
                style={styles.box}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
                onChangeText={(text) => props.onChangeText(text)}
                keyboardType={props.keyboardType}
                value={props.value}
            />
        </View>
    )
}

export default InputBox;