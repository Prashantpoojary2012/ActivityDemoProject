import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { MainStyle } from '../Styles/commonStyles';

const styles = MainStyle();

class Activity extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('UploadActivity')}
                >
                    <Text style={styles.textStyle}>Upload Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate('ListActivity')}
                >
                    <Text style={styles.textStyle}>List Activity</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
export default Activity;