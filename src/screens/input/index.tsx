import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import {DrawerTypes} from "../../navigation/drawer.navigation";

export interface ILocation{
    origin?:{
        latitude?: number,
        longitude?: number,
    },
    destination?:{
        latitude?: number,
        longitude?: number,
    }
}

export function Input({navigation}:DrawerTypes){
    const [location, setLocation] = useState<ILocation>()
    function handleChange(itemLocation:ILocation){
        setLocation({...location, ...itemLocation})
    }
    return(
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Origem</Text>
                <TextInput
                    placeholder="Latitude"
                    onChangeText={(i) => handleChange({origin:{latitude:Number(i)}})}
                />
                <TextInput
                    placeholder="Logitude"
                    onChangeText={(i) => handleChange({origin:{longitude:Number(i)}})}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Destino</Text>
                <TextInput
                    placeholder="Latitude"
                    onChangeText={(i) => handleChange({destination:{latitude:Number(i)}})}
                />
                <TextInput
                    placeholder="Logitude"
                    onChangeText={(i) => handleChange({destination:{longitude:Number(i)}})}
                />    
            </View>
            <TouchableOpacity style={styles.} onPress={()=>navigation.navigate("Mapa", location as ILocation)}><Text>Entrar</Text></TouchableOpacity>
        </View>
    )
}