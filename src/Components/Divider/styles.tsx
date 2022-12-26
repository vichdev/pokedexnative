import styled from "styled-components/native";

export const DividerContent = styled.View<{
  horizontal?: boolean;
  color?: string;
}>`
  width: 100%;
  height: 1px;
  transform: ${(props) => (props.horizontal ? "" : "rotate(90deg)")};
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.gray};
`;
