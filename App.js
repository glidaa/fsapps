import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import {GlobalContextProvider} from './contexts/GlobalContext';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Project from './components/Project';
import Note from './components/Note';

const Stack = createNativeStackNavigator()

function App() {

  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Project" component={Project} />
          <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
 
})

export default withAuthenticator(App)
// export default App