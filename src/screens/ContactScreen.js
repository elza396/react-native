import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ContactScreen = (props) => {
    const {route} = props;
    const {data} = route.params;
    const {name, surname, phone, email} = data;

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Name: <Text style={styles.textBold}>{name}</Text></Text>
            <Text style={styles.text}>Surname: <Text style={styles.textBold}>{surname}</Text></Text>
            <Text style={styles.text}>Phone: <Text style={{
                ...styles.textBold,
                ...styles.link
            }}>+7 {phone}</Text></Text>
            <Text style={styles.text}>Email: <Text style={{
                ...styles.textBold,
                ...styles.link
            }}>{email}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '600',
    },
    textBold: {
        fontWeight: 'bold',
    },
    link: {
        color: '#0a509f',
    }
})
