import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    pickerContainer: {
        backgroundColor: COLORS.white,
        widht: "100%"
    },
    pickerLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },
    picker: {
        backgroundColor: COLORS.white_placeholder,
        color: COLORS.dark_gray,
    },
    pickerBox: {
        borderWidth: 1,
        borderColor: COLORS.light_blue,
        borderRadius: 6,
    }
};