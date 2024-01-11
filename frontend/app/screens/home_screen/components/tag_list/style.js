import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    tagListScaffold: {
        height: 155,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    header: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    tagItemScaffold: {
        height: 110,
        width: 90,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderRadius: 15,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
    },
    tagItemText: {
        fontFamily: 'Roboto',
        fontSize: 15,
    },
});

export default styles;
