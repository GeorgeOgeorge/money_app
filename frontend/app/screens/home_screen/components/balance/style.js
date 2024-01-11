import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    scaffold: {
        height: 155,
        width: '100%',
        marginBottom: 20,
        borderWidth: 1.7,
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '90%',
        height: '80%',
    },
    buttonsScaffold: {
        flexDirection: 'row',
        height: '40%',
    },
    balanceValueHeader: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#5A5A5A',
        fontWeight: '400'
    },
    balanceValue: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
    },
    balanceValueScaffold: {
        marginBottom: 20,
    },
    balanceButtonScaffold: {
        borderWidth: 1,
        borderRadius: 15,
        width: '45%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { height: 2.5, width: 2.5 },
        marginRight: 25,
        flexDirection: 'row',
    },
    balanceButtonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17,
    },
    balanceButtonCircleIcon: {
        height: 35,
        width: 35,
        borderRadius: 20,
        backgroundColor: '#000000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceButtonIcon: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default styles;