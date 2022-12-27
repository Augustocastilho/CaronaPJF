import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 40,
        color: '#000',
        marginTop: 30,
        marginBottom: 20,
    },
    form: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    switchButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        margin: 4,
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        width: '100%',
    },
    inputError: {
        margin: 4,
        borderWidth: 2,
        borderColor: 'red',
        padding: 15,
        borderRadius: 5,
        width: '100%',
    },
    button: {
        backgroundColor: '#000',
        marginTop: 15,
        padding: 17,
        borderRadius: 5,
        width: '100%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonUpload: {
        backgroundColor: '#C6C4C4',
        marginTop: 15,
        padding: 17,
        borderRadius: 5,
        width: '100%',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5,
        marginTop: 10,
        padding: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPassword: {
        width: '100%',
        padding: 20,
        alignItems:'flex-start',
    },
    forgotPasswordText: {
        color: '#C6C4C4',
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    headerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    history: {
        width: '100%',
        padding: 10,
        alignItems:'center',
    },
    historyText: {
        color: '#C6C4C4',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    containerHome: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonRounded: {
        backgroundColor: '#000',
        padding: 17,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
    },
})