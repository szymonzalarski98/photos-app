import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 24px 0px 24px 24px;
  background: #FFF;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 8px 20px rgba(240, 242, 245, 0.5);
`;

export const Space = styled.View`
  height: 4px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin: 0px 1.5px 0px 25.5px;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;