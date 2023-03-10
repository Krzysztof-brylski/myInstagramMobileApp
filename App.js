
import React,{useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/serach";
import AddScreen from "./screens/add";
import ProfileScreen from "./screens/profile";
import AxiosFacade from "./facades/Axios";
import LoginComponent from "./screens/auth/login";
import commentView from "./screens/comments";
import ScreenTemplate from "./templates/screenTemplate";
import MessagesScreen from "./screens/messages";
import MessageWithUserScreen from "./screens/messageWithUser";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [auth,setAuth]=useState(AxiosFacade.isAuth());
   if(!auth) { return (<LoginComponent auth={auth} setAuth={setAuth}/>)};
  return (
     <NavigationContainer >
             <Stack.Navigator>
             <Stack.Screen
                 hideNavigationBar={true}
                 name="Home"
                 component={HomeScreen}
                 options={() => ({
                     headerShown:false,
                 })}
             />
             <Stack.Screen
                 name="Search"
                 component={SearchScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
             <Stack.Screen
                 name="Add"
                 component={AddScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
             <Stack.Screen
                 name="Profile"
                 component={ProfileScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
             <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={() => ({
                    headerShown:false,
                })}

             />
             <Stack.Screen
                 name="Comments"
                 component={commentView}
             />
             <Stack.Screen
                name="MessageWithUserScreen"
                component={MessageWithUserScreen}
                options={{ title: '' }}

             />

         </Stack.Navigator>
     </NavigationContainer>
  );
}
