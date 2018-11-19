import React, { Component } from "react";
import { View, Text } from "react-native";
import { translate} from 'react-i18next';
import styles from "./HomeStyle";
import Counter from '../../components/Counter/Counter';
import SimpleListComponent from '../../components/SimpleListComponent/SimpleListComponent';

const HeaderTitle = (props) => (
    <View style={{textAlign:"left" ,flex:1}} >
        <Text style={{fontSize:21,fontWeight: "bold"}}>{props.lang}</Text>
    </View>
);

class Home extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: <HeaderTitle  lang={screenProps.t('home:title')}/>,
    });
    render() {
        return (
            <View style={styles.container}>
                <Counter/>
                <SimpleListComponent navigation={this.props.navigation} />
            </View>
        );
    }
}

export default translate(['home'], { wait: true })(Home);

