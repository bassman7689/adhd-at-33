import React, { ComponentType } from "react";
import NavHeader from "../components/nav-header";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Location } from "history";

type PageLayoutProps = {
  title: string;
  location: Location;
  children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  margin: 0;
  background-color: #F0F0F0;
}

* {
  box-sizing: border-box;
}
`;

const Content = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageLayout = ({ title, location, children }: PageLayoutProps) => {
  return (
    <main>
      <Helmet defer={false}>
        <title>{title}</title>
      </Helmet>
      <GlobalStyle />
      <NavHeader location={location} />
      <Content>{children}</Content>
    </main>
  );
};

export function withPageLayout<P>(
  Component: ComponentType<P>
): ComponentType<P & PageLayoutProps> {
  const WithLayout = ({ title, location, ...rest }) => {
    return (
      <PageLayout title={title} location={location}>
        <Component {...rest} />
      </PageLayout>
    );
  };

  return WithLayout;
}
