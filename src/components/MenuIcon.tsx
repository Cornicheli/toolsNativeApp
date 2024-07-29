import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { colors } from '@/theme/theme';

interface Props {
    name: string;
    icon: string;
    isFirst?: boolean;
    isLast?: boolean;
    key?: string;
    onPress?: () => void;
}

export const MenuIcon = ({
    name,
    icon,
    isFirst = false,
    isLast = false,
    onPress,
}: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View
                style={{
                    ...styles.container,
                    backgroundColor: colors.cardBackground,
                    ...(isFirst && {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: 10,
                    }),
                    ...(isLast && {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        paddingBottom: 10,
                    }),
                }}>
                <Icon
                    name={icon}
                    size={25}
                    style={{ marginRight: 10 }}
                    color={colors.primary}
                />
                <Text style={{ color: colors.text }}>{name}</Text>
                <Icon
                    name="chevron-forward-outline"
                    size={25}
                    style={{ marginLeft: 'auto' }}
                    color={colors.primary}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});
