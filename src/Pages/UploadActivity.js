import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { MainStyle } from '../Styles/commonStyles';
import { connect } from 'react-redux';
import { AddActivity } from '../Redux/Action/addActivityActions';
import CustomTextInput from '../Components/CustomTextInput';
import ImagePicker from 'react-native-image-picker';
import { stat } from 'react-native-fs';

const styles = MainStyle();

class UploadActivity extends Component {
    state = {
        itemAdded: this.props.ActivityReducer.activityList,
        name: '',
        title: '',
        desc: '',
        imageuri: 'image path',
        videoUri: 'max length 10MB'
    }
    componentDidMount() {
        //  console.log(this.state.itemAdded);
    }
    handleChange = key => val => {
        this.setState({ [key]: val });
    }
    changeImage = async (type) => {
        const options = {
            quality: 0.7, allowsEditing: true, mediaType: type, noData: true,
            storageOptions: {
                skipBackup: true,
                waitUntilSaved: true,
                //path: 'images',
                cameraRoll: true,
                imageuri: '',
                videouri: '',
            }
        }
        ImagePicker.showImagePicker(options, async (response) => {
            if (response.error) {
                //Îconsole.log('ImagePicker Error: ', response.error);
                Alert.alert('Error', response.error);
            } else if (!response.didCancel) {
                if (type === 'photo') {
                    this.setState({
                        imageuri: response.uri
                    });
                } else {
                    const statResult = await stat(response.path);
                    // console.log('file size: ' + parseInt(statResult.size) / 1000000);
                    var currSize = parseInt(statResult.size) / 1000000;
                    if (10 >= currSize) {
                        this.setState({
                            videoUri: response.uri
                        });
                    } else {
                        Alert.alert('Error', `Video size should max 10 MB. Your file size is ${currSize}MB`);
                    }

                }

                //console.log(response.uri);

            }
        });
    }
    addList = () => {
        if (this.state.name.trim().length === 0) {
            Alert.alert('Error', 'Enter a name');
        }
        else if (this.state.title.trim().length === 0) {
            Alert.alert('Error', 'Enter a title');
        }
        else if (this.state.desc.trim().length === 0) {
            Alert.alert('Error', 'Enter a description');
        }
        else if (this.state.imageuri === 'image path') {
            Alert.alert('Error', 'Select a image');
        }
        else if (this.state.videoUri === 'max length 10MB') {
            Alert.alert('Error', 'Select image url');
        } else {
            var data = {
                'name': this.state.name,
                'title': this.state.title,
                'desc': this.state.desc,
                'imagePath': this.state.imageuri,
                'videoPath': this.state.videoUri

            }
            var tempArray = this.state.itemAdded;
            tempArray.push(data);
            this.setState({
                itemAdded: tempArray
            })
            this.props.AddActivity(this.state.itemAdded);
            Alert.alert('Success', 'Data is Updated');
            this.setState({
                name: '',
                title: '',
                desc: '',
                imageuri: 'image path',
                videoUri: 'max length 10MB'
            })
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 20.0, fontWeight: '800', marginBottom: 50.0 }}>
                    Activity Details Form
                </Text>
                <CustomTextInput
                    placeholder="Enter a Name"
                    inputName={this.state.name}
                    onChange={this.handleChange('name')}
                />
                <CustomTextInput
                    placeholder="Enter a title"
                    inputName={this.state.title}
                    onChange={this.handleChange('title')}
                />
                <CustomTextInput
                    placeholder="Enter a description"
                    inputName={this.state.desc}
                    onChange={this.handleChange('desc')}
                />
                <TouchableOpacity
                    style={styles.imageBtn}
                    onPress={() => this.changeImage('photo')}
                >
                    <Text style={{ paddingLeft: 20.0, paddingVertical: 15.0, color: 'grey' }}>Select a Image</Text>
                </TouchableOpacity>
                <Text style={{ color: 'grey', alignSelf: 'flex-start', marginLeft: 50.0, marginBottom: 10.0 }}>{this.state.imageuri}</Text>
                <TouchableOpacity
                    style={styles.imageBtn}
                    onPress={() => this.changeImage('video')}
                >
                    <Text style={{ paddingLeft: 20.0, paddingVertical: 15.0, color: 'grey' }}>Select a Video</Text>
                </TouchableOpacity>
                <Text style={{ color: 'grey', alignSelf: 'flex-start', marginLeft: 50.0, marginBottom: 10.0 }}>{this.state.videoUri}</Text>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={this.addList}
                >
                    <Text style={styles.textStyle}>Add Activity</Text>
                </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(UploadActivity);