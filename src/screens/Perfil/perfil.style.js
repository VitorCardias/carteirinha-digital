import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
        marginTop: 20,
    },
    containerIcone:{
        justifyContent: "center",
    },
    item:{
        flexDirection: "row",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light_blue
    },
    icone: {
        width: 30,
        height: 30,
    },
    textos: {
        flex: 1,
        marginLeft: 10,
    },
    title:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
    },
    subTitle:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
    },
    iconeExpandir:{
        width: 20,
        height: 20,
    },
}