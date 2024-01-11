import { View, StyleSheet, Text } from 'react-native';

function StatisticsScreen() {

    return (
        <View style={styles.scaffold}>
            <Text>banana</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    scaffold: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    }
});

export default StatisticsScreen;
