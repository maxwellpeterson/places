import React from "react"
import styled from "styled-components/native"

const CustomButton = (props) => (
  <ButtonContainer backgroundColor={props.backgroundColor}>
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
)

const ScreenContainer = styled.View`
  padding: 14px;
  align-self: center;
`

const ButtonContainer = styled.TouchableOpacity`
	width: 76px;
	height: 29px
	padding: 12px;
	border-radius: 10px;
  border: 2px solid #d2c26c;
`

const ButtonText = styled.Text`
  font-size: 12px;
  margin: -7px;
  color: ${(props) => props.textColor};
  text-align: center;
`
export default function FollowButton() {
  return (
    <ScreenContainer>
      <CustomButton
        text="follow"
        textColor="#d2c26c"
        backgroundColor="rgb(256, 256, 256)"
      />
    </ScreenContainer>
  )
}
