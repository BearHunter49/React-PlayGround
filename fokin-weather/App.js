import React from 'react';
import Loading from "./Loading"
import {Alert} from "react-native";
import * as Location from 'expo-location';
import {Text} from "react-native-web";

export default class extends React.Component {
    state = {
        isLoading: true
    };

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {latitude, longitude} = await Location.getCurrentPositionAsync();
            this.setState({isLoading: false});
        } catch (e) {
            Alert.alert("Can't find you.", "So sad");
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading} = this.state;
        return isLoading ? <Loading/> : <Text>Done!</Text>
    }
}

