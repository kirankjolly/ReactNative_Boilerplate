import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { translate} from 'react-i18next';
import styles from './CounterStyles';
import * as counterAction from '../../actions/counterAction';

class CountChanger extends Component {
    increment() {
        this.props.increment();
    }

    decrement() {
        this.props.decrement();
    }
    render() {
        const { t, i18n } = this.props;
        return (
            <View style={styles.container}>
                <Text>{t('common:currentLanguage', { lng: i18n.language })+ i18n.language}</Text>
                <Button onPress={() => this.increment()} title={t('common:actions.increment')} />
                <Button onPress={() => this.decrement()} title={t('common:actions.decrement')}/>
                <Text >
                    Component 1. Count = {this.props.count}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        count: state.counterReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        'increment': () => {
            dispatch(counterAction.incrementCount());
        },
        'decrement': () => {
            dispatch(counterAction.decrementCount());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(translate(['home', 'common'], { wait: true }) (CountChanger));
