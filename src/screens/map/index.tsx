import { useEffect, useState } from "react";
import { Alert, View, Text } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import { styles } from "./styles";
import { ILocation } from "../input";
import { useRoute } from "@react-navigation/native";
import {DrawerTypes} from "../../navigation/drawer.navigation"
import { TouchableOpacity } from "react-native";
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";
import { MaterialIcons } from "@expo/vector-icons";

export function Map({navigation}:DrawerTypes){
    const [error, setError] = useState<string>()
    const route = useRoute()
    const location = route.params as ILocation
    const test = location && location.origin?.latitude && location.origin?.longitude && location.destination?.latitude && location.destination?.longitude
    useEffect(() => {
        if(!(test)){
            navigation.navigate('Localizar')
            Alert.alert('Faltando dados!!!')
            setError('Faltando dados!!!')
        }
    }, [])
    if(!(test)){
        return(
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        )
    }
    else{
        return(
            <MapView style={styles.container} region={location.origin as AnimatedMapRegion}>
                <Marker coordinate={location.origin as Region}>
                    <MaterialIcons name="location-history"/>
                </Marker>
                <Marker coordinate={location.destination as Region}>
                    <MaterialIcons name="location-history"/>
                </Marker>
                {location.origin && location.destination &&
                    <Polyline
                            coordinates={[{latitude: location.origin.latitude as number, longitude: location.origin.longitude as number},
                                {latitude: location.destination.latitude as number, longitude: location.destination.longitude as number}
                            ]}
                    />
                }
            </MapView>
        )
    }
}