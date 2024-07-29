import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Title } from '@/components/Title';
import { globalStyles } from '@/theme/theme';
import { MenuIcon } from '@/components/MenuIcon';
import { animationMenuItems, menuItems, uiMenuItems } from '@/icons/Icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParamList } from '@/routes/StackNavigator';

type HomeScreenNavigationProp = NavigationProp<StackParamList>;

export const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={[globalStyles.mainContainer]}>
            <View style={[globalStyles.globalMargin]}>
                <ScrollView>
                    <Title text="Options menu" safe />
                    <View style={styles.container}></View>
                    {animationMenuItems.map((item, index) => (
                        <MenuIcon
                            onPress={() =>
                                navigation.navigate('Animation101Screen')
                            }
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))}
                    <View style={{ marginTop: 30 }} />
                    {menuItems.map((item, index) => (
                        <MenuIcon
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))}
                    <View style={{ marginTop: 30 }} />
                    {uiMenuItems.map((item, index) => (
                        <MenuIcon
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        maxWidth: 960,
        marginHorizontal: 'auto',
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36,
        color: '#38434D',
    },
});
