import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenInput, ScreenMap } from "../screens";
import { ILocation } from "../screens/input";

type DrawerParam = {
    Localizar: undefined,
    Mapa: ILocation,
}

type DrawerScreenNavigation = DrawerNavigationProp<DrawerParam, "Localizar">
export type DrawerTypes = {
    navigation: DrawerScreenNavigation
}

export function MenuDrawer(){
    const Drawer = createDrawerNavigator<DrawerParam>();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Localizar" component={ScreenInput}/>
            <Drawer.Screen name="Mapa" component={ScreenMap}/>
        </Drawer.Navigator>
    )
}