import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MainStyle } from '../Styles/commonStyles';
import { connect } from 'react-redux';
import { AddActivity } from '../Redux/Action/addActivityActions';

const styles = MainStyle();

class ListActivity extends Component {
    componentDidMount() {
       // console.log(this.props.ActivityReducer.activityList);
    }
    renderRow(data, index) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%', backgroundColor: '#f0e6c7', paddingHorizontal: 10.0, paddingVertical: 20.0, marginTop: 2.0 }} key={index}>
                <Text>{data.name}</Text>
                <Text>{data.title}</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ViewActivity', { 'data': data })}
                >
                    <Text style={{ textDecorationLine: 'underline', textDecorationColor: '#0430e0' }}>
                        View
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container1}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%', backgroundColor: 'white', paddingHorizontal: 10.0, paddingVertical: 20.0, marginTop: 10.0 }}>
                    <Text>Name</Text>
                    <Text>Title</Text>
                    <Text>View</Text>
                </View>
                { this.props.ActivityReducer.activityList.map((datum, index) => { // This will render a row for each data element.
                    return this.renderRow(datum);
                })}
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => {
    return {
        ActivityReducer: state.ActivityReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        AddActivity: data => {
            dispatch(AddActivity(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListActivity);