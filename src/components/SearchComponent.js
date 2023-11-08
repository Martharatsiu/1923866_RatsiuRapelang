import React, {useState, useRef} from 'react';
import {colors} from '../global/styles';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {filterData} from '../global/Data';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

export default function SearchComponent() {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>
            Which Sanitary Item Are you Donating?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.view>
                <Icon
                  name={textInputFocused ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocused(false);
                  }}
                  style={styles.Icon2}
                  type="material"
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.view>
              <Text
                style={{width: '90%'}}
                placeholder=" "
                autoFocus={false}
                ref={textInput}
              />
              <Animatable.view>
                <Icon
                  name={textInputFocused ? 'cancel' : null}
                  onPress={() => {
                    textInput.current.clear();
                    //handleSearch();
                  }}
                  style={{marginRight: -10}}
                  type="material"
                  iconStyle={{color: colors.grey3}}
                />
              </Animatable.view>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SchoolSearchScreen', {item: item.name});
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: colors.grey2, fontSize: 15}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#86939e',
    alignContent: 'center',
    marginHorizontal: 0,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'space-evenly',
  },
  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    alignItems: 'center',
    borderColor: colors.grey4,
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  Icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
});
