import React from 'react';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen } from '@/Animations';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Animation101Screen"
                component={Animation101Screen}
            />
        </Stack.Navigator>
    );
};

export type StackParamList = {
    ExtractMoney: undefined;
    Notification: undefined;
    QrCharger: undefined;
    Root: undefined;
    Transference: undefined;
};
