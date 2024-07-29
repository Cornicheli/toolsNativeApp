import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from '@/theme/theme';

export const Animation101Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpluBox} />
            <Pressable
                onPress={() => {
                    console.log('fade in');
                }}>
                <Text>Fade In</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    console.log('fade out');
                }}>
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
