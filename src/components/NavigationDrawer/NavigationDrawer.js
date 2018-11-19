import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import { translate} from 'react-i18next';
import { ScrollView, Text, View, AsyncStorage } from 'react-native';
import i18n from 'i18next';
import styles from './NavigationDrawerStyles';



class NavigationDrawer extends Component {

  async onChangeLang(lang) {
    i18n.changeLanguage(lang);
    try {
      await AsyncStorage.setItem('@APP:languageCode', lang);
    } catch (error) {
      console.log(` changeLanguage Error : ${error}`);
    }
    this.props.navigation.closeDrawer();
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Select Language
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={(language) => this.onChangeLang('en')}>
                EN
              </Text>
              <Text style={styles.navItemStyle} onPress={(language) => this.onChangeLang('de')}>
                DE
              </Text>
              <Text style={styles.navItemStyle} onPress={(language) => this.onChangeLang('ar')}>
                AR
              </Text>
            </View>            
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

NavigationDrawer.propTypes = {
  navigation: PropTypes.object
};

export default translate(['home', 'common'], { wait: true })(NavigationDrawer);
