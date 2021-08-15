import styled from "styled-components/native";

interface ISpace {
  height?: number;
}

export const Container = styled.View`
  padding: 24px;
  background: #FFF;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Space = styled.View<ISpace>`
  height: ${({ height }) => height ?? 12}px;
`;
