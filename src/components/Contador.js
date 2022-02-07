import React, {useState} from "react";
import { Button, Text } from 'react-native'
import Estilo from './style'

export default props => {

    // let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}  />
            <Button title="-" onPress={dec}  />
        </>
    )
}