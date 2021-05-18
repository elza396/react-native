import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';



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

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.textWrapper}
            onPress={() => {
                navigation.navigate('ContactScreen', {data: item});
            }}
        >
            <Text style={styles.text}>{item.name + ' ' + item.surname}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            style={styles.container}
            data={contacts}
            renderItem={renderItem}
            keyExtractor={contact => contact._id}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textWrapper: {
        paddingHorizontal: 20,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 10,
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
    }
})
