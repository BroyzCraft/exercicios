import React from "react"
import { Button, StyleSheet } from 'react-native'

export default props => {

    function executar() {
        console.warn('Executadoooooo!!')
    }

    return (
        <Button 
            title="Executar"
            onPress={executar}
        />
    )
}

const style = StyleSheet.create({
    button: {
        width: 600,
        height: 600,
        backgroundColor: '#FFF'
    }
})