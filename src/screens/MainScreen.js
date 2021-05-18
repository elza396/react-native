import React from 'react';
import {View, Text, Button} from 'react-native';



export const MainScreen = (props) => {
    const { navigation } = props;

    return (
        <View>
            <Text>Telephone directory</Text>
            <Button
                onPress={() => {
                    navigation.navigate('AboutAppScreen')
                }
                }
                title="More information"
            />
        </View>
    )
}
