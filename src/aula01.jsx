import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Aula02 extends Component {
    render(){
        return(
            <View style={styles.container}>
              <Text>aula02</Text>
            </View>
        )
    }
}


export default Aula02;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black", 
    },
})