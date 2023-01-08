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
          label: "q",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 1,
          label: "w",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 2,
          label: "e",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 3,
          label: "r",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 4,
          label: "t",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 5,
          label: "y",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 6,
          label: "u",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 7,
          label: "i",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 8,
          label: "o",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 9,
          label: "p",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 10,
          label: "a",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 11,
          label: "s",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 12,
          label: "d",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 13,
          label: "f",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 14,
          label: "g",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 15,
          label: "h",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 16,
          label: "j",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 17,
          label: "k",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 18,
          label: "l",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 19,
          label: ":",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 20,
          label: "z",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 21,
          label: "x",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 22,
          label: "c",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 23,
          label: "v",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 24,
          label: "b",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 25,
          label: "n",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 26,
          label: "m",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 27,
          label: ",",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 28,
          label: ".",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 29,
          label: "/",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 30,
          label: "1",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 31,
          label: "2",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 32,
          label: "3",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 33,
          label: "4",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 34,
          label: "5",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 35,
          label: "6",
          tapped: "&kp Q ",
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
          label: "q",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 1,
          label: "w",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 2,
          label: "e",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 3,
          label: "r",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 4,
          label: "t",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 5,
          label: "y",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 6,
          label: "u",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 7,
          label: "i",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 8,
          label: "o",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 9,
          label: "p",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 10,
          label: "a",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 11,
          label: "s",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 12,
          label: "d",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 13,
          label: "f",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 14,
          label: "g",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 15,
          label: "h",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 16,
          label: "j",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 17,
          label: "k",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 18,
          label: "l",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 19,
          label: ":",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 20,
          label: "z",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 21,
          label: "x",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 22,
          label: "c",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 23,
          label: "v",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 24,
          label: "b",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 25,
          label: "n",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 26,
          label: "m",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 27,
          label: ",",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 28,
          label: ".",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 29,
          label: "/",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 30,
          label: "1",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 31,
          label: "2",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 32,
          label: "3",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 33,
          label: "4",
          tapped: "&kp Q ",
          held: "",
        },
        {
          index: 34,
          label: "5",
          tapped: "&kp W",
          held: "",
        },
        {
          index: 35,
          label: "6",
          tapped: "&kp Q ",
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
