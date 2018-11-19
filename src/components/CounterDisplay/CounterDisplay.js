import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './CounterDisplayStyles';

class CounterDisplay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>
                        Component 2. Count = {this.props.count}
                    </Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counterReducer.count
    }
}

export default connect(mapStateToProps,null)(CounterDisplay);
