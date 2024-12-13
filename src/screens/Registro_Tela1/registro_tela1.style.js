import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    formGroup:{
        width: "100%",
        marginTop: 30,
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    btn:{
        width: "100%",
        marginTop: 40,
    },
    footer:{
        width: "100%",
        marginTop: 65,
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
    },
    doubleInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "48.5%",
        gap: 10,
        marginBottom: 20
    }
}