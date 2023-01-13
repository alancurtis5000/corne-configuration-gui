import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { saveAs } from "file-saver";
import { configTemplate } from "./config-template";

export const DownloadButton = (props) => {
  const { layers } = useContext(KeymapContext);

  const generateConfigFile = () => {
    const defineLayers = [];
    const layerConfigs = [];

    layers.forEach((layer) => {
      const bindingsConfig = [];
      defineLayers.push(`#define ${layer.label} ${layer.index} `);
      layer.bindings.forEach((binding) => {
        if (
          binding.index === 9 ||
          binding.index === 19 ||
          binding.index === 29
        ) {
          bindingsConfig.push(`${binding.tapped.code} \n`);
        } else {
          bindingsConfig.push(`${binding.tapped.code}`);
        }
      });
      layerConfigs.push(`${layer.label}_layer {
        label = "${layer.label}";
        bindings = <
     ${bindingsConfig.join("     ")}
        >;
      };
        `);
    });

    const layerConfigsToString = layerConfigs.join("\n");
    const defineLayersToString = defineLayers.join("\n");
    console.log({ layerConfigsToString });

    return { defineLayersToString, layerConfigsToString };
  };

  //   default_layer {
  //     label = "DEF";
  //                 bindings = <
  // &none   &kp Q &kp W &kp E &kp R &kp T          &kp Y &kp U  &kp I    &kp O   &kp P    &none
  // &none   &kp A &kp S &kp D &hm LCMD F &kp G     &kp H &hm LCMD J  &kp K     &kp L   &kp SEMI     &none
  // &none   &kp Z &kp X &kp C &kp V &kp B          &kp N &kp M  &kp COMMA &kp DOT   &kp FSLH    &none
  //         &kp LSHIFT  &kp SPACE &kp N3      &to ARROWS_L  &kp ENTER  &kp BACKSPACE
  //                 >;
  //         };

  const defaultConfigTop = `
  /*
  * Copyright (c) 2020 The ZMK Contributors 
  * SPDX-License-Identifier: MIT 
  */ 
  
  #include <behaviors.dtsi> 
  #include <dt-bindings/zmk/keys.h> 
  #include <dt-bindings/zmk/bt.h> \n`;

  const handleDownload = () => {
    console.log("handleDownload");
    const { defineLayersToString, layerConfigsToString } = generateConfigFile();
    var blob = new Blob(
      [
        `${defaultConfigTop}
${defineLayersToString}

/ {
  behaviors {
    hm: homerow_mods {
        compatible = "zmk,behavior-hold-tap";
        label = "HOMEROW_MODS";
        #binding-cells = <2>;
        tapping-term-ms = <300>;
        quick-tap-ms = <200>;
        flavor = "tap-preferred";
        bindings = <&kp>, <&kp>;
    };
};
  keymap {
compatible = "zmk,keymap";\n
${layerConfigsToString}
  };
};
    `,
      ],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    saveAs(blob, "corne.keymap");
  };

  return (
    <div>
      <div className="delete-button">
        <IconButton color="default" onClick={handleDownload}>
          <DownloadIcon sx={{ pointerEvents: "none" }} />
        </IconButton>
      </div>
    </div>
  );
};
