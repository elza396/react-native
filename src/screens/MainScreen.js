import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';



export const MainScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Telephone directory</Text>
            <Button
                style={styles.button}
                onPress={() => {
                    navigation.navigate('AboutAppScreen')
                }
                }
                title="More information"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight: '600',
        marginBottom: 40,
    },
    button: {
        padding: 5,
        fontSize: 20,
        fontWeight: '400',
    },
});
