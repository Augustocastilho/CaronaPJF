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
})