import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, PageProps } from "gatsby";

const TitleDiv = styled.div`
  margin: 0 0 0 0.5vw;
  padding: 0;
  height: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: #f2f2f2;
  white-space: nowrap;
`;

const Title = ({ title }: { title: string }) => {
  return (
    <TitleDiv>
      <Link href="/">{title}</Link>
    </TitleDiv>
  );
};

type Page = {
  title: string;
  link: string;
};

const TopNav = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  padding: 0 2rem;
  text-decoration: none;
  color: #f2f2f2;
  background-color: rgba(
    84,
    118,
    255,
    ${({ active }: { active: boolean }) => (active ? "0.2" : "0.0")}
  );

  &:hover {
    background-color: rgba(84, 118, 255, 0.2);
  }
`;

function isActivePath(currentPath: string, linkPath: string): boolean {
  return [currentPath, linkPath].includes("/")
    ? currentPath == linkPath
    : currentPath.startsWith(linkPath);
}

const PageLinks = ({
  currentPath,
  pages,
}: {
  currentPath: string;
  pages: Page[];
}) => {
  return (
    <TopNav>
      {pages.map((page) => {
        return (
          <NavLink
            key={page.title.toLowerCase()}
            href={page.link}
            active={isActivePath(currentPath, page.link)}
          >
            {page.title}
          </NavLink>
        );
      })}
    </TopNav>
  );
};

const Header = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  background: linear-gradient(to bottom right, #0d33d0, #1f48f1);
  top: 0;
  position: sticky;
  z-index: 1;
`;

const NavHeader = ({
  location,
}: PageProps): React.ReactElement<any, any> | null => {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            title
            link
          }
        }
      }
    }
  `);

  return (
    <Header>
      <Title title={data?.site?.siteMetadata?.title} />
      <PageLinks
        currentPath={location.pathname}
        pages={data?.site?.siteMetadata?.menuLinks}
      />
    </Header>
  );
};

export default NavHeader;
