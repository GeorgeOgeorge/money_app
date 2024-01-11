import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    scaffold: {
        width: '100%',
        height: '35%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    flatListScaffold: {
        height: '80%',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 1.7,
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
    },
    header: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    itemScaffold: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    itemData: {
        width: '40%',
        flexDirection: 'column',
        marginHorizontal: 15,
        height: 40,
    },
    tagName: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17
    },
    transactionDate: {
        fontFamily: 'Roboto'
    },
    transactionValueScaffold: {
        minWidth: 85,
        height: 30,
        borderRadius: 10,
        alignContent: 'center',
    },
    transactionValueText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default styles;
