import React, {useState} from "react";
import { Button, Text, StyleSheet } from 'react-native'
import Estilo from './style'

export default props => {

    // let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <React.Fragment>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button style={style.layoutBT} title="     -     " onPress={dec}  />
            <Button style={style.layoutBT} title="     +     " onPress={inc}  />
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    layoutBT: {
        width: 600,
        height: 600
    }
})