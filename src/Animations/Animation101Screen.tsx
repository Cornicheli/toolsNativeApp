import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import React, { useRef } from 'react';
import { colors } from '@/theme/theme';

export const Animation101Screen = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('animation ended'));
    };
    const fadeOut = () => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.purpluBox, { opacity: animatedOpacity }]}
            />
            <Pressable onPress={fadeIn}>
                <Text>Fade In</Text>
            </Pressable>
            <Pressable onPress={fadeOut}>
                <Text>Fade Out</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpluBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
});
