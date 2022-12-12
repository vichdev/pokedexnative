import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{ color: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  padding: 16px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.yellow};
`;

export const ButtonTitle = styled.Text<{ textColor: string }>`
  color: ${(props) => (props.textColor ? props.textColor : "#FFF")};
  font-size: 20px;
`;
