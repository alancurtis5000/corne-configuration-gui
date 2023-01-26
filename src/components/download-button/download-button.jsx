import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { saveAs } from "file-saver";
import { generateBindingCode } from "../../utilities/generate-binding-code";

export const DownloadButton = (props) => {
  const { layers } = useContext(KeymapContext);

  const generateConfigFile = () => {
    const defineLayers = [];
    const layerConfigs = [];

    layers.forEach((layer) => {
      const bindingsConfig = [];
      defineLayers.push(`#define ${layer.label} ${layer.index} `);
      layer.bindings.forEach((binding) => {
        let tapBindingCode = undefined;

        tapBindingCode = generateBindingCode(binding);

        if (binding.index === 0) {
          bindingsConfig.push(`     &none       ${tapBindingCode}`);
        } else if (binding.index === 9 || binding.index === 19) {
          bindingsConfig.push(
            ` ${tapBindingCode}     &none \n          &none `
          );
        } else if (binding.index === 29) {
          bindingsConfig.push(
            ` ${tapBindingCode}     &none \n                                    `
          );
        } else {
          bindingsConfig.push(` ${tapBindingCode}`);
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

    return { defineLayersToString, layerConfigsToString };
  };

  const defaultConfigTop = `
  /*
  * Copyright (c) 2020 The ZMK Contributors 
  * SPDX-License-Identifier: MIT 
  */ 
  
  #include <behaviors.dtsi> 
  #include <dt-bindings/zmk/keys.h> 
  #include <dt-bindings/zmk/bt.h> \n`;

  const handleDownload = () => {
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
