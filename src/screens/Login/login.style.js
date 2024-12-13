import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.white,
        padding: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        width: "100%",
        marginBottom: 25
    },
    formGroup:{
        width: "100%",
        marginTop: 70,
    },
    btn:{
        width: "100%",
        marginTop: 40,
    },
    footer:{
        width: "100%",
        marginTop: 115,
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
    },
}