import * as React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 4px 5px 10px -1px rgba(var(--background-shadow-color), 1);
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
`;

type CardProps = {
  children: React.ReactNode;
  onClick: (event) => void;
  style: React.CSSProperties;
};

export function Card({
  children,
  onClick,
  style,
}: CardProps): React.ReactElement<any, any> | null {
  return (
    <CardDiv style={style} onClick={onClick}>
      {" "}
      {children}{" "}
    </CardDiv>
  );
}
