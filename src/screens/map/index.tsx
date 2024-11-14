import { useEffect, useState } from "react";
import { Alert, View, Text } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import { styles } from "./styles";
import { ILocation } from "../input";
import { useRoute } from "@react-navigation/native";
import {DrawerTypes} from "../../navigation/drawer.navigation"
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";
import { MaterialIcons } from "@expo/vector-icons";

export function Map({navigation}:DrawerTypes){
    const [error, setError] = useState<string>()
    const route = useRoute()
    const location = route.params as ILocation
    const [origin, setOrigin] = useState<Region>()
    const [destination, setDestination] = useState<Region>()
    const test = location && location.originLatitude && location.originLongitude && location.destinationLatitude && location.destinationLongitude
    useEffect(() => {
        if(!(test)){
            navigation.navigate('Localizar')
            Alert.alert('Faltando dados!!!')
            setError('Faltando dados!!!')
        }else{
            setOrigin({latitude: location.originLatitude as number, longitude: location.originLongitude as number, latitudeDelta: 0.04, longitudeDelta: 0.04})
            setDestination({latitude: location.destinationLatitude as number, longitude: location.destinationLongitude as number, latitudeDelta: 0.04, longitudeDelta: 0.04})
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
            <MapView style={styles.container} region={origin}>
                <Marker coordinate={origin as Region}>
                    <MaterialIcons name="location-history"/>
                </Marker>
                <Marker coordinate={destination as Region}>
                    <MaterialIcons name="location-history"/>
                </Marker>
                {origin && destination &&
                    <Polyline
                            coordinates={[{latitude: origin.latitude, longitude: origin.longitude as number},
                                {latitude: destination.latitude, longitude: destination.longitude}
                            ]}
                    />
                }
            </MapView>
        )
    }
}