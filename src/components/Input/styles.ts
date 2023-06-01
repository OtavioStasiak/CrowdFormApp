import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";
import { RFPercentage } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
    container: {
        width: "90%",
    },
    title: {
        marginBottom: 5,
        fontFamily: theme.fonts.medium,
        fontSize: RFPercentage(1.6),
        color: theme.colors.gray_300
    },
    input: {
        width: "100%",
        backgroundColor: theme.colors.gray_100,
        padding: 15,
        borderRadius: 4,
        fontSize: RFPercentage(2),
        fontFamily: theme.fonts.medium,
        color: theme.colors.black_100
    }
})