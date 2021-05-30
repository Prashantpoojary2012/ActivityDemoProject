import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class CustomTextInput extends Component {
    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                value={this.props.inputName}
                onChangeText={this.props.onChange}
                style={{
                    borderWidth:1.0,
                    width:'80%',
                    borderRadius:5.0,
                    marginBottom:20.0,
                    paddingLeft:20.0
                }}
            />
        )
    }
}