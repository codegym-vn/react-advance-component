import React, { Component } from 'react';

import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native'
import Modal from "react-native-modal";

class ModalExample extends Component {
    render() {
        return (
            <View>
                <Modal isVisible={true}>
                    <View style={{ flex: 1 }}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}
export default ModalExample

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
});
