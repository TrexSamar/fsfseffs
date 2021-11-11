import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from "../screens/Feed";
import IonIcons from 'react-native-vector-icons/IonIcons';
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    retrn (
        <Tab.Navigator>
            screenOptions = {({ route }) => {
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName; 
                    if (route.name === 'Feed') {
                       iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <IonIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{

                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',


            }}
        >
            <Tab.screen name = 'Feed' component={Feed} />
            <Tab.screen name = 'CreatePost' component={CreatePost} />
        </Tab.Navigator>
   );
   }

   export default BottomTabNavigator

                    
                    


                    

                

           






        










 

 
