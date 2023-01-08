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
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 1,
          label: "w",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 2,
          label: "e",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 3,
          label: "r",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 4,
          label: "t",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 5,
          label: "y",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 6,
          label: "u",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 7,
          label: "i",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 8,
          label: "o",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 9,
          label: "p",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 10,
          label: "a",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 11,
          label: "s",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 12,
          label: "d",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 13,
          label: "f",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 14,
          label: "g",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 15,
          label: "h",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 16,
          label: "j",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 17,
          label: "k",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 18,
          label: "l",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 19,
          label: ":",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 20,
          label: "z",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 21,
          label: "x",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 22,
          label: "c",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 23,
          label: "v",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 24,
          label: "b",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 25,
          label: "n",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 26,
          label: "m",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 27,
          label: ",",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 28,
          label: ".",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 29,
          label: "/",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 30,
          label: "1",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 31,
          label: "2",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 32,
          label: "3",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 33,
          label: "4",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 34,
          label: "5",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 35,
          label: "6",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
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
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 1,
          label: "w",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 2,
          label: "e",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 3,
          label: "r",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 4,
          label: "t",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 5,
          label: "y",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 6,
          label: "u",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 7,
          label: "i",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 8,
          label: "o",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 9,
          label: "p",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 10,
          label: "a",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 11,
          label: "s",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 12,
          label: "d",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 13,
          label: "f",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 14,
          label: "g",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 15,
          label: "h",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 16,
          label: "j",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 17,
          label: "k",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 18,
          label: "l",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 19,
          label: ":",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 20,
          label: "z",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 21,
          label: "x",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 22,
          label: "c",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 23,
          label: "v",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 24,
          label: "b",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 25,
          label: "n",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 26,
          label: "m",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 27,
          label: ",",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 28,
          label: ".",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 29,
          label: "/",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 30,
          label: "1",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 31,
          label: "2",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 32,
          label: "3",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 33,
          label: "4",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 34,
          label: "5",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
        },
        {
          index: 35,
          label: "6",
          description: "button that does stuff",
          modifiers: [],
          tapped: {
            code: "&kp Q",
            label: "Q",
          },
          held: {
            code: "&kp Q",
            label: "Q",
          },
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
