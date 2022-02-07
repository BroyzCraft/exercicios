import React from "react"
import { View, StyleSheet } from "react-native"

// import Primeiro from './components/Primeiro'
// import MinMax from "./components/MinMax"
// import CompPadrao , { Comp1, Comp2 } from './components/Mults'
// import Estilo from './components/style'
// import Aleatorio from './components/Aleatorio'
import Botao from './components/Botao'

export default () => (
    <View style={style.App}>

        <Botao></Botao>

        {/* <MinMax min={1} max={50} />
        <MinMax min="Um" max="Cinquenta" />

        <Primeiro texto="Teste de Texto passado por parametro"/>
        <Comp1 />
        <Comp2 />
        <CompPadrao />

        <Aleatorio min={1} max={50} />
        <Aleatorio min={1} max={100} /> */}

    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})