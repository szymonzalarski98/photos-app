import styled from "styled-components/native";

interface ISpace {
  height?: number;
}

export const Container = styled.View`
  padding: 24px;
  background: #FFF;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 8px 20px rgba(240, 242, 245, 0.5);
`;

export const Space = styled.View<ISpace>`
  height: ${({ height }) => height ?? 12}px;
`;
