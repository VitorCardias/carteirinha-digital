import { transform } from "@babel/core";
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {
    container: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: COLORS.light_blue,
        height: "25%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems : "center"
    },
    text_box: {
        margin: "auto",
        paddingTop: 30,
        marginLeft: 30,
    },
    bold_text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.lg,
        fontWeight: 800
    },
    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
    },
    box_carteirinha:{
        margin: "auto",
        marginBottom: 220,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "-90deg" }],
    },
    carteirinha: {
        width: 400,
        height: 250,
        margin: 0,
        padding: 0,
        borderRadius: 10,
    },
    content: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    fotoValidacao: {
        width: 91,
        height: 115,
        marginTop: 70,
        marginRight: 10,
        marginLeft: 8
    },
    textContainer: {
        marginTop: 70,
        marginLeft: 0,
    },
    linhaHorizontal: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 0,
        gap: 12,
    },
    texto_nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: 600,
        color: COLORS.white,
        marginRight: 70,
        marginBottom: 0
    },
    ra: {
        color: COLORS.white,
        fontWeight: 600,
    },
    data: {
        color: COLORS.white,
        fontWeight: 600,
    },
    cpf: {
        color: COLORS.white,
        fontWeight: 600,
    },
    curso: {
        color: COLORS.white,
        fontWeight: 600,
    },
}