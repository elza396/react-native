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

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
