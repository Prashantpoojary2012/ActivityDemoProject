import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { MainStyle } from '../Styles/commonStyles';
import Video from 'react-native-video';

const styles = MainStyle();
export default class ViewActivity extends Component {
    state = {
        modalVisible: false,
        modalVideo: false,
    }
    componentDidMount() {
        console.log(this.props.navigation.state.params.data);
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    toggleVideo(visible) {
        this.setState({ modalVideo: visible });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal}>
                        <Image
                            style={{ width: '100%', height: 200, resizeMode: 'stretch', marginBottom: 20.0 }}
                            source={{ uri: this.props.navigation.state.params.data.imagePath }}
                        />

                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.toggleModal(!this.state.modalVisible) }}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVideo}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal2}>

                        <Video
                            source={{ uri: this.props.navigation.state.params.data.videoPath }}   // Can be a URL or a local file.
                            ref={(ref) => {
                                this.player = ref
                            }}
                            resizeMode={'cover'}
                            onFullScreen={true}                             // Store reference
                            onBuffer={this.onBuffer}                // Callback when remote video is buffering
                            onError={this.videoError}               // Callback when video cannot be loaded
                            style={styles.backgroundVideo}
                        />

                        <TouchableOpacity style={styles.videoButton}
                            onPress={() => { this.toggleVideo(!this.state.modalVideo) }}>
                            <Text style={{ color: 'white', paddingHorizontal: 20.0, paddingVertical: 10.0 }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View
                    style={styles.viewBox}
                >
                    <View style={styles.insideView}>
                        <Text style={styles.viewText}>Name:</Text>
                        <Text>{this.props.navigation.state.params.data.name}</Text>
                    </View>
                    <View style={styles.insideView}>
                        <Text style={styles.viewText}>Title:</Text>
                        <Text>{this.props.navigation.state.params.data.title}</Text>
                    </View>
                    <View style={styles.insideView}>
                        <Text style={styles.viewText}>Description:</Text>
                        <Text>{this.props.navigation.state.params.data.desc}</Text>
                    </View>
                    <View style={styles.insideView}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.toggleModal(true) }}
                        >
                            <Text style={styles.viewText}>View Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { this.toggleVideo(true) }}
                        >
                            <Text style={styles.viewText}>Play Video</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}