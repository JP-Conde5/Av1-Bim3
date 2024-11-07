import { NavigationContainer } from "@react-navigation/native";
import { MenuDrawer } from "./drawer.navigation";

export default function Navigation(){
    return(
        <NavigationContainer>
            <MenuDrawer/>
        </NavigationContainer>
    )
}