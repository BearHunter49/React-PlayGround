import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Weather({temp, condition})
{
    return <View style={styles.container}>
        <Text>
            {temp}{condition}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    }
})