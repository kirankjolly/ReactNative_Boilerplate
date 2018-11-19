import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'
import styles from './SplashScreenStyles';

class SpashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        }, 500)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>SpashScreen</Text>
            </View>
        );
    }
}

export default SpashScreen;
