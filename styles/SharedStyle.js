import styled from "styled-components";

export const EmphasizedText = styled.span`
  font-size: ${(props) => {
    if (props.fontSize === "heading1") {
      return "var(--fs-700)";
    } else if (props.fontSize === "heading2") {
      return "var(--fs-600)";
    }
    return props.fontSize || "inherit";
  }};
  color: ${(props) => {
    if (props.color === "primary") {
      return props.theme.colors.primary;
    } else if (props.color === "normal") {
      return props.theme.colors.normal;
    }
    return props.color || "var(--clr-body)";
  }};
  text-shadow: 3px 2px 0px ${({ theme }) => theme.colors.mainBg},
    4px 4px 0px
      ${(props) => {
        if (props.shadowColor === "primary") {
          return props.theme.colors.primary;
        } else if (props.shadowColor === "normal") {
          return props.theme.colors.normal;
        } else if (props.color === "primary") {
          return props.theme.colors.primary;
        } else if (props.color === "normal") {
          return props.theme.colors.normal;
        }
        return props.shadowColor || props.color || "var(--clr-body)";
      }};
`;
