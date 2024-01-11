import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/header/header';
import Balance from './components/balance/balance';
import TagList from './components/tag_list/tag_list';
import Transactions from './components/transactions/transactions';

function HomeScreen() {

  return (
    <View style={styles.appScaffold}>
      <View style={styles.background}>
        <Header />
        <Balance />
        <TagList />
        <Transactions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '90%',
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'column'
  },
  appScaffold: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '0xFFFAF7F7',
  },
});

export default HomeScreen;
