import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1;
  background-color: red;
  box-shadow: 0px 8px 20px rgba(240, 242, 245, 0.5);
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const Image = styled.Image`
  flex: 1;
`;

export const Title = styled.View`
  height: 49px;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: #FFF;
`;

export const Blank = styled.View`
  flex: 1;
  aspect-ratio: 1;
`;
