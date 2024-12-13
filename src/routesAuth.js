import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "./screens/Inicio/inicio"
import icons from "./constants/icons";
import Validacao from "./screens/Validacao/validacao";
import Perfil from "./screens/Perfil/perfil";
import { Image, Text, View } from "react-native";
import { COLORS, FONT_SIZE } from "./constants/theme";

const Tab = createBottomTabNavigator();

function RoutesAuth(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{animation: "shift", tabBarShowLabel: false, tabBarStyle: { position: 'absolute', height: 80, paddingTop: 25 }}}>
                <Tab.Screen 
                    name= "carteirinha"
                    component={Inicio}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <View>
                                <Image
                                    source={icons.tabInicio}
                                    style={{width: 30, height: 30, opacity: focused ? 1 : 0.3, margin: "auto"}}
                                />
                                <Text style={{fontSize: FONT_SIZE.sm, width: "100%", color: COLORS.light_blue, opacity: focused ? 1 : 0.3}}>Carteirinha</Text>
                            </View>
                        },
                    }}
                />
                <Tab.Screen 
                    name= "validacao"
                    component={Validacao}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <View>
                                <Image
                                    source={icons.tabValidacao}
                                    style={{width: 30, height: 30, opacity: focused ? 1 : 0.3, margin: "auto"}}
                                />
                                <Text style={{fontSize: FONT_SIZE.sm, width: "100%", color: COLORS.light_blue, opacity: focused ? 1 : 0.3}}>Validação</Text>
                            </View>
                        },
                    }}
                />
                <Tab.Screen 
                    name= "perfil"
                    component={Perfil}
                    options={{
                        title: "Meu Perfil",
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: COLORS.white,
                        },
                        tabBarIcon: ({focused}) => {
                            return <View>
                                <Image
                                    source={icons.tabPerfil}
                                    style={{width: 30, height: 30, opacity: focused ? 1 : 0.3, margin: "auto"}}
                                />
                                <Text style={{fontSize: FONT_SIZE.sm, width: "100%", color: COLORS.light_blue, opacity: focused ? 1 : 0.3}}>Perfil</Text>
                            </View>
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RoutesAuth;