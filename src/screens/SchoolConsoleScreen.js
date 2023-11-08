import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function SchoolConsoleScreen() {
  return (
    <View style={styles.container}>
      <Text>WELCOME TO SCHOOL CONSOLE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
