import React from 'react';
import {
    Grid,
    Image,
    Menu,
    Input,
    Button,
    Responsive,
    Dropdown
  } from "semantic-ui-react";
  import biobidimg from "../../../static/beaker-md.png";

  const MenuComponentDesktop = props => {
    return (
      <Menu secondary inverted>
        <Menu.Item
          name="home"
          active={props.activeItem === "home"}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name="about"
          active={props.activeItem === "about"}
          onClick={props.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  };

const HeaderComponent = props => {
    return (
      <React.Fragment>
        <Responsive minWidth={768} as={StyledSiteHeader}>
          <Grid.Column floated="left" width={3}>
            <StyledImage src={biobidimg} />
          </Grid.Column>
          <MenuCol>
            <MenuComponentDesktop {...props} />
          </MenuCol>
        </Responsive>
      </React.Fragment>
    );
  };

  export default HeaderComponent;