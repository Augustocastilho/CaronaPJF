import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

import { LoggedOut } from "../screens/LoggedOut";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Profile } from "../screens/Profile";
import { EditProfile } from "../screens/EditProfile";
import { Run } from "../screens/Run";

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="LoggedOut" component={LoggedOut} options={{headerShown: false}}/>
                <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <AppStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <AppStack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <AppStack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
                <AppStack.Screen name="Run" component={Run} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}