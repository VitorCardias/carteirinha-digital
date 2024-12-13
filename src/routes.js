import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/login"
import Registro_Tela1 from "./screens/Registro_Tela1/registro_tela1";
import Registro_Tela2 from "./screens/Registro_Tela2/registro_tela2";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="registro_tela1"
                    component={Registro_Tela1}
                    options={{headerShadowVisible: false, title: "", headerBackTitle: "Voltar", headerTransparent: true}}
                />
                <Stack.Screen 
                    name="registro_tela2"
                    component={Registro_Tela2}
                    options={{headerShadowVisible: false, title: "", headerBackTitle: "Voltar", headerTransparent: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;