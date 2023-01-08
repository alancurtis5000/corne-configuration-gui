import React, { createContext, useState } from "react";
import propTypes from "prop-types";

// import { incrementCount, decrementCount } from "./keymap.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  keymap: [],
  // actions
  // increment: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [keymap, setKeymap] = useState([
    {
      label: "DEF",
      bindings: `
   &none   &kp Q &kp W &kp E &kp R &kp T          &kp Y &kp U  &kp I    &kp O   &kp P    &none
   &none   &kp A &kp S &kp D &hm LCMD F &kp G     &kp H &hm LCMD J  &kp K     &kp L   &kp SEMI     &none
   &none   &kp Z &kp X &kp C &kp V &kp B          &kp N &kp M  &kp COMMA &kp DOT   &kp FSLH    &none 
                &kp LSHIFT  &kp SPACE &kp N3      &to ARROWS_L  &kp ENTER  &kp BACKSPACE
                `,
    },
  ]);
  // actions
  // const increment = () => setCount(incrementCount(count, margin));

  // if count changes do something
  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <KeymapContext.Provider
      value={{
        //increment
        keymap,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
};

KeymapProvider.propTypes = {
  children: propTypes.node,
};
