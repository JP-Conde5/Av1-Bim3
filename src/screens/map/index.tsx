import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import { styles } from "./styles";
import { ILocation } from "../input";
import {DrawerTypes} from "../../navigation/drawer.navigation"
import { TouchableOpacity } from "react-native";
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";

export function Map(location:ILocation, {navigation}:DrawerTypes){
    const [marker, setMarker] = useState<Region[]>()
    function input(){
        return(
            <TouchableOpacity onPress={() => navigation.navigate("Localizar")}/>
        )
    }
    useEffect(() => {
        if(!location){
            Alert.alert("ERRO", "Insira um valor válido para latitude e longitude da origem e de destino", )
            input()
        }else{
            setMarker([{
                latitude: location.origin?.latitude as number,
                longitude: location.origin?.longitude as number,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
            setMarker([{
                latitude: location.destination?.latitude as number,
                longitude: location.destination?.longitude  as number,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
        }
    }, [])
    return(
        <MapView style={styles.container} region={location.origin as AnimatedMapRegion}>
            {marker && marker.map((item) => (
                <Marker coordinate={item}/>
            ))}
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