import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager } from 'react-native';

const { State: TextInputState } = TextInput;

export default class KeyboardShift extends Component {
    state = {
        shift: new Animated.Value(0),
    };

    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    render() {
        const { children: renderProp } = this.props
        const { shift } = this.state;
        return (
            <Animated.View
                style={[this.props.style ? this.props.style : styles.container, { transform: [{ translateY: shift }] }]}>
                {renderProp}
            </Animated.View>
        );
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        if (currentlyFocusedField !== null) {
            UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
                const fieldHeight = height;
                const fieldTop = pageY;
                const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
                if (typeof this.props.from !== 'undefined') {
                    if (gap >= 20) {
                        return;
                    }
                    Animated.timing(
                        this.state.shift,
                        {
                            toValue: (gap - 28),
                            duration: 300,
                            useNativeDriver: true,
                        }
                    ).start();
                } else {
                    if (gap >= 0) {
                        return;
                    }
                    Animated.timing(
                        this.state.shift,
                        {
                            toValue: gap,
                            duration: 300,
                            useNativeDriver: true,
                        }
                    ).start();
                }
            });
        }
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
    }
});

KeyboardShift.propTypes = {
    children: PropTypes.any.isRequired,
};