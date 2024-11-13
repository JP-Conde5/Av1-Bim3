import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section:{
        width: 300,
        justifyContent: 'center',
        margin: 50
    },    
    title:{
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15
    },
    write:{
        fontSize: 15,
        width: 250,
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 8,
        margin: 5,
    },
    button:{
        backgroundColor: colors.secondary,
        width: 200,
        borderWidth: 10,
        borderColor: colors.secondary,
        borderRadius: 8
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
    }

})