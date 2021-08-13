import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  max-height: 56px;
  background-color: #FFF;
`;

export const Label = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Separator = styled.View`
  background-color: #F0F2F5;
  width: 1px;
  height: 24px;
`;

export const Underline = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background: #466BC9;
`;