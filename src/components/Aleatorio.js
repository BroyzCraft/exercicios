import React from "react";
import { Text } from "react-native";
import Estilo from './style'


export default function aleatorio(props) {
    const numero = Math.floor(Math.random() * (props.max - props.min + 1) ) + props.min;
    
    return (
        <Text style={Estilo.fontG}>
            {numero} é um valor aleatorio entre {props.min} e {props.max}
        </Text>
    )
}