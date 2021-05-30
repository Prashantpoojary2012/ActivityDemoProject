import { StyleSheet } from 'react-native'
const MainStyle = type =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E5E5E5',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container1: {
            flex: 1,
            backgroundColor: '#E5E5E5',
            //justifyContent:'center',
            alignItems: 'center'
        },
        button: {
            borderWidth: 1.0,
            padding: 10.0,
            borderRadius: 10.0,
            borderColor: 'red'
        },
        videoButton: {
            backgroundColor:'red',
            padding: 10.0,
            borderRadius: 10.0,
            alignSelf:'flex-end',
            
        },
        viewBox: {
            borderWidth: 1.0,
            // height: '60%',
            width: '90%',
        },
        viewText: {
            fontSize: 18.0,
            fontWeight: '700'
        },
        modal: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'center',
            padding: 10,
        },
        modal2: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'transparent',
            padding: 10,
        },
        button1: {
            borderWidth: 1.0,
            paddingVertical: 10.0,
            paddingHorizontal: 20.0,
            borderRadius: 10.0,
            marginTop: 20.0,
            borderColor: 'green'

        },
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        textStyle: {
            fontSize: 18.0,
            fontWeight: '700'
        },
        insideView: {
            justifyContent: 'space-around',
            borderBottomWidth: 1.0,
            flexDirection: 'row',
            paddingVertical: 10.0
        },
        imageBtn: {
            // borderWidth:1.0,
            width: '80%',
            borderRadius: 5.0,
            backgroundColor: 'white'
            // marginBottom:20.0
        }
    });

export { MainStyle };