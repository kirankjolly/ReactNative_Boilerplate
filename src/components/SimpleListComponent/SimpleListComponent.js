import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { translate} from 'react-i18next';
import * as jsonDataFetchAction from '../../actions/jsonDataFetchAction';
import styles from "./SimpleListComponentStyle";

class SimpleListComponent extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    goToNextComponent() {
        this.props.navigation.navigate('AboutUs');
    }

    render() {
        const { t, i18n } = this.props;
        if (this.props.loading) {
            return (
                <View >
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Button onPress={() => this.goToNextComponent()} title={t('common:actions.goToNextPage')}  />
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View >
                <Text >
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text >
                    {item.description}
                </Text>
            </View>
        )
    }
   
}

function mapStateToProps(state, props) {
    return {
        loading: state.jsonDataReducer.loading,
        data: state.jsonDataReducer.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        'getData': () => {
            dispatch(jsonDataFetchAction.getData());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(translate(['home', 'common'], { wait: true })(SimpleListComponent));
