import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
Icons.loadFont();

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView>
      <Modal transparent={true} visible={showModal} animationType="fade">
        <TouchableOpacity
          onPress={() => {
            setShowModal(false);
          }}
          // onPress={event => {
          //   event.target == event.currentTarget && setShowModal(false);
          // }}
          style={styles.modalBody}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={1}
            style={styles.modalUpper}>
            <View style={styles.modalImgView}>
              <ImageBackground
                style={styles.imgStyle}
                source={require('../../assets/newsPaper.jpeg')}>
                <LinearGradient
                  colors={['#7D003a', 'transparent']}
                  useAngle
                  angle={180}
                  locations={[1, 0]}
                  style={styles.gradient}>
                  <View style={styles.imgTxtContainer}>
                    <Text style={styles.imgTxtPrimary}>Share the wisdom</Text>
                    <Text style={styles.imgTxtSecondary}>
                      Get points while empowering others
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={styles.iconCard}>
              <View style={styles.pointView}>
                <LinearGradient
                  colors={['#ff3300', '#ff8c1a']}
                  useAngle
                  locations={[0, 0.6]}
                  style={styles.pointGradient}>
                  <Text style={styles.pointTxt}>GET 200 POINTS</Text>
                </LinearGradient>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity style={styles.addUserBtn}>
                  <Icons
                    style={styles.addIcon}
                    name="person-add-outline"
                    size={30}
                    color={'#ffffff'}
                    onPress={() => {}}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareBtn}>
                  <Icons
                    style={styles.shareIcon}
                    name="share-social-outline"
                    size={30}
                    color={'#ffffff'}
                    onPress={() => {}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.cardTxtContainer}>
                <Text style={styles.cardTxt}>
                  You shared it with
                  <Text style={styles.cardTxtBold}> 5 friends</Text>
                </Text>
              </View>
            </View>
            <View style={styles.modalBtns}>
              <TouchableOpacity style={styles.modalBtnSms}>
                <Text style={styles.modalBtnTxt}>Send message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalBtnMail}>
                <Text style={styles.modalBtnTxt}>Send email</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setShowModal(true);
          }}>
          <Text style={styles.btnText}>Click</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {alignItems: 'center', justifyContent: 'center'},
  btn: {
    // flex: 1,
    backgroundColor: '#000000',
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  modalBody: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundColor: 'grey',
  },
  modalUpper: {
    backgroundColor: '#ffffff',
    // width: 350,
    // height: 300,
    alignItems: 'center',
    // padding: 5,
    // paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
  },
  modalImgView: {
    // height: '60%',
    width: 357,
    top: 0,
  },
  imgStyle: {
    height: 360,
    width: '100%',
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'transparent',
    // position: 'absolute',
  },
  gradient: {
    height: '100%',
    // backgroundColor: 'transparent',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  modalBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  modalBtnSms: {
    // flex: 1,
    backgroundColor: '#FF0074',
    height: 50,
    width: 158,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#FF0074',
  },
  modalBtnMail: {
    // flex: 1,
    backgroundColor: '#000000',
    height: 50,
    width: 158,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 11,
  },
  modalBtnTxt: {color: '#ffffff', fontWeight: '700', fontSize: 17},
  iconCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    // width: '90%',
    // height: '12%',
    marginTop: '10%',
    // marginHorizontal: '10%',
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 5,
    padding: 5,
  },
  addUserBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderWidth: 0,
    borderRadius: 30,
  },
  addIcon: {fontSize: 20, fontWeight: '800'},
  shareBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    position: 'absolute',
    left: 35,
    width: 40,
    height: 40,
    backgroundColor: '#FF0074',
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 30,
  },
  shareIcon: {fontSize: 23, fontWeight: 'bold'},
  icons: {left: 0, marginTop: '4%'},
  cardTxtContainer: {marginLeft: '12%', marginTop: '2%'},
  cardTxt: {
    fontSize: 15,
    marginHorizontal: '5%',
  },
  cardTxtBold: {fontWeight: '700'},
  pointGradient: {
    padding: 6,
    borderWidth: 0,
    borderRadius: 14,
    bottom: 32,
    // marginHorizontal: '10%',
  },
  pointView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // top: 400,
  },
  pointTxt: {
    fontWeight: '700',
    color: '#ffffff',
  },
  imgTxtContainer: {
    height: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
    // position: 'absolute',
    // bottom: 55,
    marginHorizontal: 20,
  },
  imgTxtPrimary: {
    color: '#ffffff',
    fontSize: 25,
    marginBottom: 8,
    fontWeight: '600',
    fontFamily: 'Montserrat-Medium',
  },
  imgTxtSecondary: {color: '#ffffff', fontSize: 14},
});

export default ModalScreen;
