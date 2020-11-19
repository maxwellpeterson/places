import React from "react"
import { Button, Pressable } from "react-native"
import styled from "styled-components/native"

const CustomButton = (props) => (
  <ButtonContainer backgroundColor={props.backgroundColor}>
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
)

const ScreenContainer = styled.View`
  padding: 14px;
`

const ButtonContainer = styled.TouchableOpacity`
	width: 75px;
	height: 32px
	padding: 12px;
	border-radius: 8px;	
  background-color: 'rgb(211, 211, 211)';
`

const ButtonText = styled.Text`
  font-size: 13px;
  margin: -3px;
  color: ${(props) => props.textColor};
  text-align: center;
`
export default function BackButton({ onPress, navigation }) {
  return (
    <ScreenContainer>
      <Button
        //text="BACK"
        title={"BACK"}
        //textColor="#fff"
        backgroundColor="rgb(211, 211, 211)"
        onPress={() => navigation.navigate("Home")}
      />
    </ScreenContainer>
  )
}
