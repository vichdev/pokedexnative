import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_blue};
`;

export const LogoContainer = styled.View`
  width: 80%;
`;

export const ButtonWrapper = styled.View`
  width: 80%;
`;

export const Logo = styled.Image`
  width: 100%;
`;
