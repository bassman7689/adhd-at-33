import * as React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 5px 10px -1px rgba(var(--background-shadow-color), 1);
  padding: 10px;
  margin-bottom: 10px;
`;

type CardProps = {
  children: React.ReactNode;
};

export function Card({
  children,
}: CardProps): React.ReactElement<any, any> | null {
  return <CardDiv> {children} </CardDiv>;
}
