import { React, useContext } from 'react';
import { FlatList, Text, View } from 'react-native';

import { AppContext } from '../../../../app_context';
import TagIcon from '../../../../components/tag_icon/tag_icon';
import styles from './style';
import propTypes from './types';

const TransactionItem = ({ transaction }) => {
    const { expenseTags, setExpenseTags } = useContext(AppContext);

    const tag = expenseTags.find((tag) => tag.id === transaction.tagId);
    const valueScaffoldStyle = {
        ...styles.transactionValueScaffold,
        backgroundColor: transaction.type === 1 ? '#a0ff91' : '#ff93e8'
    };

    return (
        <View style={styles.itemScaffold}>
            <TagIcon tag={tag} />
            <View style={styles.itemData}>
                <Text style={styles.tagName}>{tag.name}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <View style={valueScaffoldStyle}>
                <Text style={styles.transactionValueText}>
                    {transaction.type === 1 ? '+' : '-'} ${transaction.value}
                </Text>
            </View>
        </View>
    );
}
TransactionItem.propTypes = propTypes.transaction;


const Transactions = () => {
    const transactions = [
        { key: 'Devin', type: 1, tagId: 1, value: 120, date: '2023-03-05' },
        { key: 'Dan', type: 2, tagId: 1, value: 120, date: '2023-03-05' },
        { key: 'banana', type: 1, tagId: 1, value: 120, date: '2023-03-05' },
        { key: 'fish', type: 1, tagId: 1, value: 120, date: '2023-03-05' },
    ]

    return (
        <View style={styles.scaffold}>
            <Text style={styles.header}>Transactions</Text>
            <FlatList
                style={styles.flatListScaffold}
                data={transactions}
                renderItem={({ item }) => <TransactionItem transaction={item} />}
            />
        </View>
    );
};

export default Transactions;
