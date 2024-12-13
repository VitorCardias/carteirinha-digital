import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";
import { styles } from "./selectInput.style";

function SelectInput({ title, value, setValue, valores, label }){

    return (
        <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>{title}</Text>
            <View style={styles.pickerBox}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) => setValue(itemValue)}
                    style={styles.picker}
                >
                <Picker.Item style={styles.pickerBox} label={label} value="" />
                {valores.map((valor, index) => (
                    <Picker.Item key={index} label={valor} value={valor} />
                ))}
                </Picker>
            </View>
        </View>
    );
}

export default SelectInput;