import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import {
  changeLayerNameUtil,
  createLayerUtil,
  moveLayerUtil,
  deleteLayerUtil,
  addModifierToKeyUtil,
  changeKeyTappedUtil,
} from "./keymap.utils";

// import { incrementCount, decrementCount } from "./keymap.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  layers: [],
  // actions
  // increment: () => {},
  createLayer: () => {},
  changeLayerName: () => {},
  moveLayer: () => {},
  deleteLayer: () => {},
  addModifierToKey: () => {},
  changeKeyTapped: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [layers, setLayers] = useState([
    {
      index: 0,
      label: "DEF",
      /* bindings: `
   &none   &kp Q &kp W &kp E &kp R &kp T          &kp Y &kp U  &kp I    &kp O   &kp P    &none
   &none   &kp A &kp S &kp D &hm LCMD F &kp G     &kp H &hm LCMD J  &kp K     &kp L   &kp SEMI     &none
   &none   &kp Z &kp X &kp C &kp V &kp B          &kp N &kp M  &kp COMMA &kp DOT   &kp FSLH    &none 
                &kp LSHIFT  &kp SPACE &kp N3      &to ARROWS_L  &kp ENTER  &kp BACKSPACE
                `,
                */
      bindings: [
        {
          index: 0,
          label: "q",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 1,
          label: "w",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 2,
          label: "e",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 3,
          label: "r",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 4,
          label: "t",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 5,
          label: "y",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 6,
          label: "u",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 7,
          label: "i",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 8,
          label: "o",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 9,
          label: "p",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 10,
          label: "a",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 11,
          label: "s",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 12,
          label: "d",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 13,
          label: "f",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 14,
          label: "g",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 15,
          label: "h",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 16,
          label: "j",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 17,
          label: "k",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 18,
          label: "l",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 19,
          label: ":",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 20,
          label: "z",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 21,
          label: "x",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 22,
          label: "c",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 23,
          label: "v",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 24,
          label: "b",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 25,
          label: "n",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 26,
          label: "m",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 27,
          label: ",",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 28,
          label: ".",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 29,
          label: "/",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 30,
          label: "1",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 31,
          label: "2",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 32,
          label: "3",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 33,
          label: "4",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 34,
          label: "5",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 35,
          label: "6",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
      ],
    },
    {
      index: 1,
      label: "NAV",
      /* bindings: `
   &none   &kp Q &kp W &kp E &kp R &kp T          &kp Y &kp U  &kp I    &kp O   &kp P    &none
   &none   &kp A &kp S &kp D &hm LCMD F &kp G     &kp H &hm LCMD J  &kp K     &kp L   &kp SEMI     &none
   &none   &kp Z &kp X &kp C &kp V &kp B          &kp N &kp M  &kp COMMA &kp DOT   &kp FSLH    &none 
                &kp LSHIFT  &kp SPACE &kp N3      &to ARROWS_L  &kp ENTER  &kp BACKSPACE
                `,
                  */
      bindings: [
        {
          index: 0,
          label: "1",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 1,
          label: "2",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 2,
          label: "3",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 3,
          label: "r",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 4,
          label: "t",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 5,
          label: "y",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 6,
          label: "u",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 7,
          label: "i",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 8,
          label: "o",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 9,
          label: "p",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 10,
          label: "a",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 11,
          label: "s",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 12,
          label: "d",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 13,
          label: "f",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 14,
          label: "g",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 15,
          label: "h",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 16,
          label: "j",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 17,
          label: "k",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 18,
          label: "l",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 19,
          label: ":",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 20,
          label: "z",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 21,
          label: "x",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 22,
          label: "c",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 23,
          label: "v",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 24,
          label: "b",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 25,
          label: "n",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 26,
          label: "m",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 27,
          label: ",",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 28,
          label: ".",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 29,
          label: "/",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 30,
          label: "1",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 31,
          label: "2",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 32,
          label: "3",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 33,
          label: "4",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 34,
          label: "5",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
        {
          index: 35,
          label: "6",
          tapped: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff tapped",
            modifiers: [],
          },
          held: {
            code: "&kp Q",
            label: "Q",
            description: "button that does stuff held",
            modifiers: [],
          },
        },
      ],
    },
  ]);
  // actions
  // const increment = () => setCount(incrementCount(count, margin));
  const createLayer = () => setLayers(createLayerUtil({ layers }));
  const changeLayerName = ({ input, index, selectedLayer }) =>
    setLayers(changeLayerNameUtil({ input, index, selectedLayer, layers }));
  const moveLayer = ({ direction, index }) =>
    setLayers(moveLayerUtil({ direction, index, layers }));
  const deleteLayer = ({ index }) =>
    setLayers(deleteLayerUtil({ index, layers }));
  const addModifierToKey = ({ index, layer }) =>
    setLayers(addModifierToKeyUtil({ index, layer, layers }));
  const changeKeyTapped = ({ index, layer }) =>
    setLayers(changeKeyTappedUtil({ index, layer, layers }));

  // if count changes do something
  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <KeymapContext.Provider
      value={{
        //increment
        layers,
        setLayers,
        createLayer,
        changeLayerName,
        moveLayer,
        deleteLayer,
        addModifierToKey,
        changeKeyTapped,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
};

KeymapProvider.propTypes = {
  children: propTypes.node,
};
