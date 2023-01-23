import React, { createContext, useState } from "react";
import propTypes from "prop-types";

// can I and should I right test for this?
/* istanbul ignore next */
export const LayoutContext = createContext({
  layout: {},
  originalLayout: {},

  // actions
  // increment: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState({});
  const [layoutOriginal, setLayoutOriginal] = useState({});

  // actions

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
        layoutOriginal,
        setLayoutOriginal,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: propTypes.node,
};
