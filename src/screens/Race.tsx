import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../utils/mapStyle.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleIcon from 'react-native-vector-icons/AntDesign';

export function Race({ route }: { route: any }) {
    const navigation = useNavigation<any>();
    const userType = route.params.userType;

    function navigateToRaceInfo() {
        navigation.navigate('RaceInfo', { userType: userType });
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

    // React.useEffect(() => {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             setRegion({
    //                 ...region,
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //             });
    //         },
    //         (error) => {
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }, []);

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
            {userType === 'driver' ?
                <TouchableOpacity onPress={() => { }} style={styles.swipe}>
                    <View style={styles.swipeButton} />
                    <Text style={{ marginBottom: 20, fontSize: 17 }}>Corrida aceita <CircleIcon name='checkcircle' size={17} /></Text>
                    <View style={styles.aceptedRaceHeader}>
                        <Text style={styles.passengerText}>
                            {`Cristina Pinheiro\n(32) 99999-9999`}
                        </Text>
                        <Image source={require('../../assets/cristina-pinheiro-2001.png')} style={styles.imagePassenger} />
                    </View>

                    <View style={styles.line} />

                    <View style={styles.containerChat}>
                        <View style={styles.containerMessage}>
                            <Image source={require('../../assets/cristina-pinheiro-2001.png')} style={styles.imageMessage} />
                            <View style={styles.containerTextMessage}>
                                <Text style={styles.messageText}>Olá, bom dia!</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerMessageInput}>
                        <TextInput style={styles.messageInput} placeholder='Enviar uma mensagem' />
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name='send-circle-outline' size={45} color='#C4C4C4' />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => { navigateToRaceInfo() }} style={styles.swipe}>
                    <View style={styles.swipeButton} />
                    <View style={styles.header}>
                        <Text style={styles.swipeTitle}>
                            Antônio está a caminho
                        </Text>
                        <View style={styles.containerTime}>
                            <Text style={styles.time}>
                                5
                            </Text>
                            <Text style={styles.timeText}>
                                min
                            </Text>
                        </View>
                    </View>

                    <View style={styles.line} />

                    <View style={styles.containerModal}>
                        <View style={styles.infoDriver}>
                            <Text>Antônio Souza</Text>
                            <Text style={styles.plate}>ABC0000</Text>
                            <Text>Gol - Vermelho</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/antonio-souza-1001.png')} style={styles.imageDriver} />
                        </View>
                    </View>

                    <View style={styles.containerMessageInput}>
                        <TextInput style={styles.messageInput} placeholder='Enviar uma mensagem' />
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name='send-circle-outline' size={45} color='#C4C4C4' />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}