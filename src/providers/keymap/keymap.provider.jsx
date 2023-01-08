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
      bindingsArray: [
        {
          index: 0,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 1,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 2,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 3,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 4,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 5,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 6,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 7,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 8,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 9,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 10,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 11,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 12,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 13,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 14,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 15,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 16,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 17,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 18,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 19,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 20,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 21,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 22,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 23,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 24,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 25,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 26,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 27,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 28,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 29,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 30,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 31,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 32,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 33,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 34,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 35,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 36,
          label: "W",
          press: "&kp W",
          held: "",
        },
      ],
    },
    {
      label: "NAV",
      bindings: `
   &none   &kp Q &kp W &kp E &kp R &kp T          &kp Y &kp U  &kp I    &kp O   &kp P    &none
   &none   &kp A &kp S &kp D &hm LCMD F &kp G     &kp H &hm LCMD J  &kp K     &kp L   &kp SEMI     &none
   &none   &kp Z &kp X &kp C &kp V &kp B          &kp N &kp M  &kp COMMA &kp DOT   &kp FSLH    &none 
                &kp LSHIFT  &kp SPACE &kp N3      &to ARROWS_L  &kp ENTER  &kp BACKSPACE
                `,
      bindingsArray: [
        {
          index: 0,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 1,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 2,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 3,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 4,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 5,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 6,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 7,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 8,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 9,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 10,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 11,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 12,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 13,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 14,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 15,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 16,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 17,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 18,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 19,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 20,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 21,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 22,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 23,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 24,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 25,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 26,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 27,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 28,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 29,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 30,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 31,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 32,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 33,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 34,
          label: "W",
          press: "&kp W",
          held: "",
        },
        {
          index: 35,
          label: "Q",
          press: "&kp Q ",
          held: "",
        },
        {
          index: 36,
          label: "W",
          press: "&kp W",
          held: "",
        },
      ],
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
