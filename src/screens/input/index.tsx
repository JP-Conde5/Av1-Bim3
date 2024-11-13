import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
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
        console.log(itemLocation)
    }
    function handleShowMap() {
        if (!location?.origin?.latitude || !location?.origin?.latitude || !location?.origin?.latitude || !location?.origin?.latitude) {
            Alert.alert("Preencha todo o formulário!")
        } else {
            navigation.navigate("Mapa", location as ILocation)
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Origem</Text>
                <TextInput
                    style={styles.write}
                    placeholder="Latitude"
                    onChangeText={(i) => handleChange({origin:{latitude:Number(i)}})}
                />
                <TextInput
                    style={styles.write}
                    placeholder="Logitude"
                    onChangeText={(i) => handleChange({origin:{longitude:Number(i)}})}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Destino</Text>
                <TextInput
                    style={styles.write}
                    placeholder="Latitude"
                    onChangeText={(i) => handleChange({destination:{latitude:Number(i)}})}
                />
                <TextInput 
                    style={styles.write}
                    placeholder="Logitude"
                    onChangeText={(i) => handleChange({destination:{longitude:Number(i)}})}
                />    
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>handleShowMap()}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        </View>
    )
}