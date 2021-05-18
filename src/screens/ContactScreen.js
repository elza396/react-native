import React from 'react';
import {View, Text} from 'react-native';

export const ContactScreen = (props) => {
    const {route} = props;
    const {data} = route.params;
    const {name, surname, phone, email} = data;

    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Surname: {surname}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Email: {email}</Text>
        </View>
    )
}
