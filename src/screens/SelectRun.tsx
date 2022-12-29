import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../utils/mapStyle.json';
import Icon from 'react-native-vector-icons/Feather';

export function SelectRun() {
    const navigation = useNavigation<any>();

    function navigateToRun() {
        navigation.navigate('Run');
    }

    const [region, setRegion] = React.useState<Region>(
        {
            latitude: -21.77681,
            longitude: -43.36902,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    );

    const [markers, setMarkers] = React.useState([
        {
            coordinate: {
                latitude: region.latitude,
                longitude: region.longitude,
            },
            title: "Partida",
        },
        {
            coordinate: {
                latitude: -21.76093,
                longitude: -43.35022,
            },
            title: "Chegada",

        },
    ]);

    function onRegionChange(region: Region) {
        setRegion({ ...region });
    }

    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                customMapStyle={mapStyle}
                loadingEnabled={true}
                initialRegion={region}
                showsUserLocation={true}
                onRegionChange={onRegionChange}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    // pinColor={index === 0 ? 'orange' : 'red'}
                    />
                ))}
            </MapView>
            <View style={styles.swipe}>
                <View style={styles.swipeButton} />
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, marginTop: 5 }}>
                        <Icon name='credit-card' size={25} color='#000' style={{ marginRight: 5 }} onPress={() => { }} />
                        <Text style={styles.swipeTitle}>
                            MasterCard 1111
                        </Text>
                    </View>
                    <Icon name='edit' size={25} color='#000' />
                </View>

                <View style={{ margin: 7 }}></View>

                <TouchableOpacity onPress={() => navigateToRun()} style={styles.optionTouchable1}>
                    <View style={styles.optionContainer}>
                        <View style={styles.optionInfo}>
                            <Text style={styles.optionTitle}>Simples</Text>
                            <Text style={styles.optionText}>Chegada: 5 min</Text>
                        </View>
                        <Text style={styles.optionPrice}>R$ 21,50</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.optionTouchable2}>
                    <View style={styles.optionContainer}>
                        <View style={styles.optionInfo}>
                            <Text style={styles.optionTitle}>Confort</Text>
                            <Text style={styles.optionText}>Chegada: 4 min</Text>
                        </View>
                        <Text style={styles.optionPrice}>R$ 27,65</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() =>  { navigation.goBack(); }}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}