/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { type PropsWithChildren } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Transactions from './app/containers/transactions';
 import TransactionDetail from './app/containers/transaction_detail';
 
 const Stack = createNativeStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Transactions">
         <Stack.Screen
           name="Transactions"
           component={Transactions}
           options={{
             headerShown: false,
           }}
         />
         <Stack.Screen
           name="TransactionDetail"
           component={TransactionDetail}
           options={{ headerShown: false }}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;