import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



export const AboutAppScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Something About this super app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
    },

});
