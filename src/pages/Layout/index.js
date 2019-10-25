import React from "react";
import styled from "@emotion/styled";
import { Grid } from "semantic-ui-react";
import Header from "./Header";

const HeaderContainer = styled(Grid.Row)`
  padding: 0px !important;
`;

const Layout = ({ children }) => {
  return (
    <Grid centered padded>
      <HeaderContainer>
        <Grid.Column>
          <Header />
        </Grid.Column>
      </HeaderContainer>
      <Grid.Row>
        <Grid.Column>{children}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Layout;
