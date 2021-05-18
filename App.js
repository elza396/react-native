import React from 'react';
import {AppNavigation} from './src/AppNavigation';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';

const App =  () => {
  return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
  );
};


export default App;
