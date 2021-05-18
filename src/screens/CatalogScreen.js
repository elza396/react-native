import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



export const CatalogScreen = (props) => {

    const {navigation} = props;

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch('https://run.mocky.io/v3/7df0ccdc-f1be-4f5a-8dd6-98b744cdd18f')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContacts(data);
            })
    },[])


    return (
        <View>
            {contacts.map(contact => {
                return(
                    <TouchableOpacity key={contact._id}>
                        <Text>{contact.name + ' ' + contact.surname}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
