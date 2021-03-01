import React from 'react'
import { ProgressViewIOSComponent, StyleSheet, Text, View, Button } from 'react-native'
import colors from '../Constants/colors'

const GameOverScreen = props => {

    return <View style = {styles.screen}>
        <Text> The Game Is Over!</Text>
        <Text> Number of rounds: {props.roundsNumber}</Text>
        <Text> Number was: {props.userNumber}</Text>
        <Button color={colors.primary}title=" New Game" onPress ={props.onRestart}></Button>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen