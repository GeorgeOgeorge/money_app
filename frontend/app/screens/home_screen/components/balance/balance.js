import { React } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './style';
import propTypes from './types';


const BalanceButton = ({ onPress, title }) => {
    const scaffoldStyle = [
        styles.balanceButtonScaffold,
        { backgroundColor: title === 'Transfer' ? '#f7cb46' : '#ff91e8' }
    ]
    const iconStyle = [
        styles.balanceButtonIcon,
        { transform: [{ rotate: title === 'Transfer' ? '225deg' : '45deg' }] }
    ]

    return (
        <TouchableOpacity onPress={onPress} style={scaffoldStyle}>
            <View style={styles.balanceButtonCircleIcon}>
                <FontAwesome name={'arrow-up'} style={iconStyle} />
            </View>
            <Text style={styles.balanceButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};
BalanceButton.propTypes = propTypes.ballanceButton;


const Balance = () => {
    return (
        <View style={styles.scaffold}>
            <View style={styles.background}>
                <View style={styles.balanceValueScaffold}>
                    <Text style={styles.balanceValueHeader}>Your Balance</Text>
                    <Text style={styles.balanceValue}>$8,320.50</Text>
                </View>
                <View style={styles.buttonsScaffold}>
                    <BalanceButton title={'Transfer'}/>
                    <BalanceButton title={'Request'}/>
                </View>
            </View>
        </View>
    );
};

export default Balance;