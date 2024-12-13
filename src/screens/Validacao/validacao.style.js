import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.light_blue,
    },
    header: {
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title:{
        color: COLORS.white,
        fontSize: FONT_SIZE.lg,
        fontWeight: 800,
        alignItems: "center",
        margin: "auto",
    },
    image: {
        width: 100, 
        height: 80,
        marginRight: 30
    },
    containerFoto: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
        gap: 20,
        marginTop: 20,
    },
    foto: {
        backgroundColor: COLORS.white,
        width: 150,
        height: 200,
        borderRadius: 10
    },
    image_perfil: {
        width: 130,
        height: 180,
        margin: "auto"
    },
    QRcode: {
        backgroundColor: COLORS.white,
        width: 150,
        height: 200,
        borderRadius: 10
    },
    qrcode: {
        width: 120,
        height: 120,
        margin: "auto",
        marginTop: 20
    },
    code:{
        fontSize: FONT_SIZE.lg,
        textAlign: "center",
        margin: "auto",
        marginBottom: 18,
        fontWeight: 800
    },
    infoCard:{
        backgroundColor: COLORS.white,
        margin: "auto",
        marginTop: 30,
        marginBottom: 0,
        borderRadius: 10,
        width: 350,
        height: 240,
    },
    botao: {
        backgroundColor: COLORS.blue,
        flexDirection: "row",
        margin: "auto",
        marginTop: 40,
        width: "50%",
        height: "5%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        gap: 4
    },
    btn_text: {
        color: COLORS.white,
        fontWeight: 600,
    },
    container_info: {
        margin:"auto",
        marginTop: 20,
        marginLeft: 15
    },
    name: {
        backgroundColor: COLORS.white_placeholder,
        fontSize: FONT_SIZE.md,
        fontWeight: 700,
        marginBottom: 10
    },
    info_box: {
        color: COLORS.white,
        gap: 4
    },
    info: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
    },
}