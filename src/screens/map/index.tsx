import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import { styles } from "./styles";
import { ILocation } from "../input";

export function Map(location:ILocation){
    const [marker, setMarker] = useState<Region[]>()
    useEffect(() => {
        {location &&
            setMarker([{
                latitude: location.origin.latitude as unknown as number,
                longitude: location.origin.longitude as unknown as number,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
            setMarker([{
                latitude: location.destination.latitude as unknown as number,
                longitude: location.destination.longitude as unknown as number,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
        }
    }, [])
    return(
        <MapView style={styles.container} region={location.origin}>
            {marker && marker.map((item) => (
                <Marker id={item.latitude} coordinate={item}/>
            ))}
            <Polyline
                    coordinates={[
                        {latitude: location.origin.latitude, longitude: location.origin.longitude},
                        {latitude: location.destination.latitude, longitude: location.destination.longitude}
                    ]}
            />
        </MapView>
    )
}