import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenInput, ScreenMap } from "../screens";
import { ILocation } from "../screens/input";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles/colors";

type DrawerParam = {
    Localizar: undefined,
    Mapa: undefined | ILocation,
}

type DrawerScreenNavigation = DrawerNavigationProp<DrawerParam, "Localizar">
export type DrawerTypes = {
    navigation: DrawerScreenNavigation
}

export function MenuDrawer(){
    const Drawer = createDrawerNavigator<DrawerParam>();
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle:{backgroundColor: colors.primary},
            drawerActiveBackgroundColor: colors.primary,
            drawerInactiveBackgroundColor: colors.secondary,
            drawerStyle:{backgroundColor: colors.secondary},
            drawerActiveTintColor:colors.white,
            drawerInactiveTintColor: colors.black

        }}>
            <Drawer.Screen name="Localizar" component={ScreenInput} options={{
                drawerIcon:()=>{
                    return(
                        <FontAwesome name='search' color={colors.white}/>
                    )
                }
            }}/>
            <Drawer.Screen name="Mapa" component={ScreenMap}  options={{
                drawerIcon:()=>{
                    return(
                        <Entypo name='location-pin' color={colors.white}/>
                    )
                }
            }}/>
        </Drawer.Navigator>
    )
}