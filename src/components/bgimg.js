import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://media.istockphoto.com/photos/pizzaria-cuisine-will-never-disappoint-picture-id1332944497?b=1&k=20&m=1332944497&s=170667a&w=0&h=KtImC7IVDiAavfs0yxT9BCrzbLBNSw2C6RKZOJr3Ing=" };

const App = () => (
<View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Broyz</Text>
        <Text style={styles.subtext}>Melhor PIZZARIA de Pirituba!</Text>
        <Button color={'#FFF'} title="Fazer Pedido"/>
        <Button color={'#FFF'} title="Ver Cardapio"/>
        <Button color={'#FFF'} title="Login"/>
    </ImageBackground>
</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    subtext: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        paddingBottom: 20
    }
});

export default App;