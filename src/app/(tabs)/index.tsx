import { Text, StyleSheet, Image, View } from 'react-native';
import React from 'react';


export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Image source={require('../../../assets/images/userIcon.png')} height={10} />
        <Text style={styles.title}>Tabata Zanco</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileBox: {
    width: 310,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingLeft: 15,
    gap: 30,
    marginTop: 60,

    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 50,
  },
  title: {
    fontSize: 24
  }
});
