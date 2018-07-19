import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Switch, TouchableOpacity,
} from 'react-native';
import {Slider} from 'react-native-elements';
import Modal from 'react-native-modal';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            gender: false,
            age: 0,
            visibleModal: null,
        };
        this.handleGender = this.handleGender.bind(this);
    }

    handleGender(e) {
        this.setState({gender: e})
    }

    renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text style={{color: 'red'}}>Giới Tính : {this.state.gender ? 'Nữ' : 'Nam'}</Text>
            <Text style={{color: 'red'}}>Độ Tuổi : {this.state.age}</Text>
            {this.renderButton('Đóng', () => this.setState({visibleModal: null}))}
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.visibleModal === 1}>
                    {this.renderModalContent()}
                </Modal>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textStyle}> Nam</Text>
                    <Switch
                        onValueChange={this.handleGender}
                        value={this.state.gender}/>
                    <Text style={styles.textStyle}> Nữ</Text>
                </View>
                <View style={{flex: 1, alignItems: 'stretch', width: '80%'}}>
                    <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={200}
                        value={this.state.age}
                        onValueChange={(age) => this.setState({age})}/>
                    <Text style={styles.textStyle}>Tuổi của bạn: {this.state.age}</Text>
                </View>
                {this.renderButton('Hiển thị thông tin', () => this.setState({visibleModal: 1}))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FF6600',
    },
    buttonStyle: {
        backgroundColor: '#3366FF',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    textStyle: {
        fontSize: 18,
        color: '#FFF'
    },
    button: {
        backgroundColor: 'blue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'green',
    },
});
