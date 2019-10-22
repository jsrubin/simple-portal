import React, { useState } from "react";

const { Provider, Consumer } = React.createContext({});

export const withAuthContext = BaseComponent => props => {
  return (
    <Consumer>
      {({ isAuthenticated, onAuthenticate }) => (
        <BaseComponent
          {...props}
          isAuthenticated={isAuthenticated}
          onAuthenticate={onAuthenticate}
        />
      )}
    </Consumer>
  );
};

const AppContextProvider = props => {
  const [isAuthenticated, onAuthenticate] = useState(false);

  return <Provider value={props} isAuthenticated={isAuthenticated} onAuthenticate={onAuthenticate}>{props.children}</Provider>;
};

AppContextProvider.defaultProps = {
  msg: "Hello"
}

export default AppContextProvider;
