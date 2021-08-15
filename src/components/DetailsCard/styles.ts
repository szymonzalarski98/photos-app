import styled from "styled-components/native";

interface ISpace {
  height?: number;
}

export const Wrapper = styled.ScrollView``;

export const Container = styled.View`
  padding: 40px 20px;
  background: #FFF;
  border-radius: 8px;
`;

export const Space = styled.View<ISpace>`
  height: ${({ height }) => height ?? 12}px;
`;
