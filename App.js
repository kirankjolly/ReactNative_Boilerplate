import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import { Image, TouchableOpacity, AppState, AsyncStorage } from 'react-native';
import { translate } from 'react-i18next';
import RNLanguages from 'react-native-languages';

import i18n from './src/I18n/index';
import SplashScreen from './src/screens/SpashScreen/SpalshScreen';
import store from './src/store/store';
import NavigationDrawer from './src/components/NavigationDrawer/NavigationDrawer';
import Home from './src/screens/Home/Home';
import AboutUs from './src/screens/AboutUs/AboutUs';
import Images from './src/assets/images/Images';
import styles from './src/styles/globalStyles';

const WrappedStack = ({ t }) => {
  return <Provider store={store} >
    <Drawer screenProps={{ t }}/>
  </Provider>;
};
const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

export default class App extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

   _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      if (i18n.language != RNLanguages.language) {
        i18n.changeLanguage(RNLanguages.language.slice(0, 2));
        try {
            AsyncStorage.setItem('@APP:languageCode',lang);
        } catch (error) {
            console.log(`Errorrrr : ${error}`);
        }
      }
    }
    this.setState({appState: nextAppState});
  }
  render() {
    return (
      <ReloadAppOnLanguageChange/>
    );
  }
}

const Navigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.navigationDrawerImage} source={Images.drawerIcon} onPress={() => navigation.openDrawer()}></Image>
        </TouchableOpacity>),
        title: 'Home'
      })
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: ({ navigation }) => ({
        title: 'About Us'
      })
    }
  }
);

const Drawer = DrawerNavigator(
  { Navigator: { screen: Navigator } },
  { contentComponent: NavigationDrawer }
);



