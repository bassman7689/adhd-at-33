import React from "react";
import NavHeader from "../components/nav-header";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { PageProps } from "gatsby";

type PageLayoutProps = {
  title: string;
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

const PageLayout = ({
  title,
  children,
  ...rest
}: PageLayoutProps & Omit<PageProps, "children">) => {
  return (
    <main>
      <Helmet defer={false}>
        <title>{title}</title>
      </Helmet>
      <GlobalStyle />
      <NavHeader {...(rest as PageProps)} />
      <Content>{children}</Content>
    </main>
  );
};

export function withPageLayout<P>(
  Component: React.ComponentType<P>
): React.ComponentType<P & PageLayoutProps & PageProps> | null {
  const WithLayout: React.ComponentType<P & PageLayoutProps & PageProps> = ({
    title,
    ...rest
  }): React.ReactElement<any, any> | null => {
    return (
      <PageLayout title={title} {...(rest as PageProps)}>
        <Component {...(rest as P)} />
      </PageLayout>
    );
  };

  return WithLayout;
}
