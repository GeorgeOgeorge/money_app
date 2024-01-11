import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    scaffold: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
    },
    circleIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFDBA5',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 3, height: 2 },
    },
    icon: {
        color: '#000000',
        fontSize: 20
    }
});

export default styles;