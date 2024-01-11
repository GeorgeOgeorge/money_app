import {
  React,
  useContext,
} from 'react';

import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppContext } from '../../../../app_context';
import TagIcon from '../../../../components/tag_icon/tag_icon';
import styles from './style';
import propTypes from './types';

const TagItem = ({ tag }) => {
  const scaffoldStyle = [
    styles.tagItemScaffold,
    { backgroundColor: tag.id === 0 ? '#a0ff91' : '#ffffff' },
  ]
  const textStyles = [
    styles.tagItemText,
    { fontWeight: tag.id === 0 ? 'bold' : '500' },
  ]

  return (
    <TouchableOpacity style={scaffoldStyle}>
      <TagIcon tag={tag} />
      <Text style={textStyles}>{tag.name}</Text>
    </TouchableOpacity>
  );
};
TagItem.propTypes = propTypes.tag;


const TagList = () => {
  const { expenseTags, setExpenseTags } = useContext(AppContext);

  return (
    <View style={styles.tagListScaffold}>
      <Text style={styles.header}> Expense Tags </Text>
      <FlatList
        data={expenseTags}
        horizontal={true}
        renderItem={({ item }) => <TagItem tag={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TagList;
