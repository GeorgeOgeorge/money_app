import { React } from 'react';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './style';
import propTypes from './types';


const TagIcon = ({ tag }) => {
    const circleIconStyle = [
        styles.circleIcon,
        { backgroundColor: tag.iconCircleColor }
    ]

    return (
        <View style={circleIconStyle}>
            <FontAwesome name={tag.icon} style={styles.icon} />
        </View>
    );
};
TagIcon.propTypes = propTypes.circleIcon;

export default TagIcon;
