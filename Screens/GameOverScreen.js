import React from "react";
import {
  ProgressViewIOSComponent,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

import colors from "../Constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://lh3.googleusercontent.com/proxy/CCLFP4vNJNCbIGwcR7cK9Bbaw_GZQBynzEBf2F9aJJi8NaO4W1ETwNCoA4u8HIaH8g3kLb0c_IHMhUVXjQCNdyxj0A2VlpEQBodRuXltLrOJ34Kz-PJz7YLEv3qYJhwdbO7Sharu_P7MslFhjZLH2vGeU7Dcb6zaeQ'}}
          style={styles.Image}
          resizeMode="cover"
        />
      </View>

      <BodyText> Number of rounds: <Text color = {colors.primary}>{props.roundsNumber}</Text></BodyText>
      <BodyText> Number was: <Text color = {colors.primary}>{props.userNumber}</Text></BodyText>
      <MainButton
        onPress={props.onRestart}
      >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
