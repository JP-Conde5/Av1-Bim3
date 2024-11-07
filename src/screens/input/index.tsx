import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import navigation from "../../navigation/navigation";

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

export function Input(){
    const [location, setLocation] = useState<ILocation>()
    function handleChange(itemLocation:ILocation){
        setLocation({...location, ...itemLocation})
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Origem</Text>
            <TextInput
                placeholder="Latitude"
                onChangeText={(i) => handleChange({origin:{latitude:Number(i)}})}
            />
            <TextInput
                placeholder="Logitude"
                onChangeText={(i) => handleChange({origin:{longitude:Number(i)}})}
            />

            <Text style={styles.title}>Destino</Text>
            <TextInput
                placeholder="Latitude"
                onChangeText={(i) => handleChange({destination:{latitude:Number(i)}})}
            />
            <TextInput
                placeholder="Logitude"
                onChangeText={(i) => handleChange({destination:{longitude:Number(i)}})}
            />    

            <TouchableOpacity onPress={navigation.navigate("Mapa", location)}/>
        </View>
    )
}