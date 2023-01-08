import React, { createContext, useState } from "react";
import propTypes from "prop-types";

import { incrementCount, decrementCount } from "./keymap.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  count: 0,
  margin: 1,
  // actions
  increment: () => {},
  decrement: () => {},
  updateMargin: () => {},
  reset: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  // actions
  const increment = () => setCount(incrementCount(count, margin));
  const decrement = () => setCount(decrementCount(count, margin));
  const updateMargin = (updateMargin) => setMargin(updateMargin);
  const reset = () => {
    setCount(0);
    setMargin(1);
  };

  // if count changes do something
  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <KeymapContext.Provider
      value={{
        count,
        margin,
        increment,
        decrement,
        updateMargin,
        reset,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
};

KeymapProvider.propTypes = {
  children: propTypes.node,
};
