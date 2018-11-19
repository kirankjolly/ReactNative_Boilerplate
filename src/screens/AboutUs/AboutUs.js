import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './AboutUsStyles';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import ServiceFetchItemListComponent from '../../components/ServiceFetchItemListComponent/ServiceFetchItemListComponent';

const HeaderTitle = (props) => (
    <View style={{textAlign:"left" ,flex:1}} >
        <Text style={{fontSize:21,fontWeight: "bold"}}>{props.lang}</Text>
    </View>
);
class AboutUs extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: <HeaderTitle  lang={screenProps.t('aboutUs:title')}/>,
    });
    render() {
        return (
            <View style={styles.container}>
                <CounterDisplay />
                <ServiceFetchItemListComponent/>
            </View>
        );
    }
}

export default AboutUs;

