import React, { useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  Alert,
  PermissionsAndroid,
  StatusBar,
} from 'react-native';

import { Container,
       Btn,
       TextBtn,
       TextResultGPS } from './styles'

const App = () => {
  const [ position, setPosition ] = useState([
    {name: "Latitude", value: 0},
    {name: "Longitude", value: 0},
    {name: "Altitude", value: 0}
  ])
  
  const getLocation = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    if (granted) {
      Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);

            setPosition([
              {name: "Latitude", value: position.coords.latitude},
              {name: "Longitude", value: position.coords.longitude},
              {name: "Altitude", value: position.coords.altitude !== null ? position.coords.altitude : 0}
            ])
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Btn onPress={() => getLocation()}>
          <TextBtn>
            Check Location
          </TextBtn>
        </Btn>
        {position.map((item) => (
          <TextResultGPS>{item.name}: {item.value}</TextResultGPS>

        ))}
      </Container>
    </>
  );
};

export default App;
