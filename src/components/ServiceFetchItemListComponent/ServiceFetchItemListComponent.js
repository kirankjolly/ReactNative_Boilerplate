import React, { Component } from 'react';
import { Text, View, ListView, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as ServiceCallAction from '..//../actions/general/ServiceCallAction';
import styles from './ServiceFetchItemListComponentStyles';

class ServiceFetchItemListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.props.callService()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            console.log('the state', nextProps)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
            });
        }
        if (nextProps.error != undefined) {
            alert(
                'Error',
                nextProps.error,
                [
                    { text: 'Do you want to reload', onPress: () => this.props.callService() },
                ],
                { cancelable: false })
        }
    }

    renderCell = (rowData) => (
        <View style={styles.containerList}>
            <Image source={{ uri: rowData.data.thumbnail }} style={styles.photo} />
            <Text style={styles.text}>
                {`${rowData.data.author}`}
            </Text>
        </View>
    );

    render() {
        const { dataSource, isLoading } = this.state;
        return (
            <View style={styles.container}>
                <ListView
                    style={{ marginTop: 30, flex: 1, height:500 }}
                    dataSource={dataSource}
                    renderRow={(rowData) => this.renderCell(rowData)}
                />
                <ActivityIndicator
                    animating={this.props.isLoading}
                    style={[styles.centering, { height: 80 }]}
                    size="large"
                    color="#0000ff"
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    isLoading: state.serviceFetchItemListReducer.isLoading,
    error: state.serviceFetchItemListReducer.error,
    data: state.serviceFetchItemListReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(ServiceCallAction.callGETWebservice('https://www.reddit.com/r/reactjs.json', "MY_REDDIT_DATA"))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceFetchItemListComponent);

