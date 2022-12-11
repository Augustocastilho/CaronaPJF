import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoggedOut } from "../screens/LoggedOut";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="LoggedOut" component={LoggedOut} options={{headerShown: false}}/>
                <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <AppStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}