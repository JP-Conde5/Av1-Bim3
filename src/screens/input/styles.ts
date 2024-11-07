import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'space-around',
    },
    title:{
        fontSize: 24,
        fontWeight: '600'
    },
    write:{
        fontSize: 20,
        borderColor: colors.secondary
    }

})