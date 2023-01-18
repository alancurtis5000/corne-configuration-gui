const isNone = ({ tapped }) => {
  if (tapped.code !== "none") return;
  return `&${tapped.code}`;
};
// keypress values would only be on tapped
const isKeyPressNoMods = ({ tapped, held }) => {
  if (held.label) return; // is held modifier
  if (tapped.code === "to") return; // is toggle layer
  if (tapped.code.includes("BT_")) return; // is bluetooth
  if (tapped.modifiers.length > 0) return; // has mods
  return `&kp ${tapped.code}`;
};
// keypress values would only be on tapped
const isKeyPressWithMods = ({ tapped, held }) => {
  if (held.label) return;
  if (tapped.code === "to") return;
  if (tapped.code.includes("BT_")) return;
  if (tapped.modifiers.length < 1) return;
  return `&kp ${addModsToCode(tapped.code, tapped.modifiers)}`;
};

const isHoldModifierBasic = ({ tapped, held }) => {
  if (!held.label) return; // needs held label
  if (tapped.code === "to") return; // is toggle layer
  if (tapped.code.includes("BT_")) return; // is bluetooth
  if (tapped.modifiers.length > 0) return; // tapped has mods
  if (held.modifiers.length > 0) return; // held has mods
  if (held.code === "lt") return; // is held layer toggle keycode
  return `&hm ${held.code} ${tapped.code}`;
};

const isHoldModifierTapMods = ({ tapped, held }) => {
  if (!held.label) return; // needs held label
  if (tapped.code === "to") return; // is toggle layer
  if (tapped.code.includes("BT_")) return; // is bluetooth
  if (tapped.modifiers.length < 0) return; // needs tapped has mods
  if (held.modifiers.length > 0) return; // held has mods
  if (held.code === "lt") return; // is held layer toggle keycode
  return `&hm ${held.code} ${addModsToCode(tapped.code, tapped.modifiers)}`;
};

const isHoldModifierHeldMods = ({ tapped, held }) => {
  if (!held.label) return; // needs held label
  if (tapped.code === "to") return; // is toggle layer
  if (tapped.code.includes("BT_")) return; // is bluetooth
  if (tapped.modifiers.length > 0) return; // tapped has mods
  if (held.modifiers.length < 0) return; //  needs held has mods
  if (held.code === "lt") return; // is held layer toggle keycode
  return `&hm ${addModsToCode(held.code, held.modifiers)} ${tapped.code}`;
};

const isHoldModifierTapAndHeldMods = ({ tapped, held }) => {
  if (!held.label) return; // needs held label
  if (tapped.code === "to") return; // is toggle layer
  if (tapped.code.includes("BT_")) return; // is bluetooth
  if (tapped.modifiers.length < 0) return; // needs tapped has mods
  if (held.modifiers.length < 0) return; //  needs held has mods
  if (held.code === "lt") return; // is held layer toggle keycode
  return `&hm ${addModsToCode(held.code, held.modifiers)} ${addModsToCode(
    tapped.code,
    tapped.modifiers
  )}`;
};

const addModsToCode = (code, modifiers) => {
  let codeWithmodifiers = code;
  modifiers.forEach((modifier, index) => {
    codeWithmodifiers = `${modifier.modCode}(${codeWithmodifiers})`;
  });
  return codeWithmodifiers;
};

export const generateBindingCode = (binding) => {
  const { tapped, held, index } = binding;
  console.log({ index });
  let code = isNone(binding);

  if (!code) {
    code = isKeyPressNoMods(binding);
  }
  if (!code) {
    code = isKeyPressWithMods(binding);
  }
  if (!code) {
    code = isHoldModifierBasic(binding);
  }
  if (!code) {
    code = isHoldModifierTapMods(binding);
  }
  if (!code) {
    code = isHoldModifierHeldMods(binding);
  }
  if (!code) {
    code = isHoldModifierTapAndHeldMods(binding);
  }

  console.log({ code });
  return code;
};

/*
export const generateBindingCodeOld = (binding) => {
  // alan for now just focus on basics  one toggle on key not combos
  const { tapped, held, index } = binding;
  console.log("gen", { binding });

  if (!held.label && tapped.modifiers.length < 1) {
    // if layer toggle
    if (tapped.code === "to") {
      return `&to ${tapped.layer.label}`;
    }
    // if bluetooth
    if (tapped.code.includes("BT_")) {
      return `&bt ${tapped.code}`;
    }
    // just key press no mods
    return `&kp ${tapped.code}`;
  }
  // if tapped has modifiers add them to keycode
  if (!held.label && tapped.modifiers.length > 0) {
    let code = `${tapped.code}`;
    tapped.modifiers.forEach((modifier, index) => {
      if (index === tapped.modifiers.length - 1) {
        // if tapped code is toggle layer and held has key with mods
        if (tapped.code === "to") {
          code`&to ${tapped.layer.label} ${modifier.modCode}(${code})`;
        } else {
          // else its just keypress with mods
          code = `&kp ${modifier.modCode}(${code})`;
        }
      } else {
        console.log("im here!!!!!");
        code = `${modifier.modCode}(${code})`;
      }
    });
    return code;
  }
  // if  held
  if (held.label) {
    // if keycode is layer toggle while held return lt
    if (held.code === "lt") {
      return `&lt ${held.layer.label} ${tapped.code}`;
    } else {
      // if tapped has modifiers add them to keycode
      if (!held.label && tapped.modifiers.length > 0) {
        let code = `${tapped.code}`;
        tapped.modifiers.forEach((modifier, index) => {
          if (index === tapped.modifiers.length - 1) {
            // else its just keypress with mods
            code = `${modifier.modCode}(${code})`;
          } else {
            console.log("im here!!!!!");
            code = `${modifier.modCode}(${code})`;
          }
        });
        return `&lt ${held.layer.label} ${code}`;
      }
      // if layer toggle
      if (tapped.code === "to") {
        if (held.modifiers.length > 0) {
          let code = `${tapped.code}`;
          tapped.modifiers.forEach((modifier, index) => {
            if (index === tapped.modifiers.length - 1) {
              // else its just keypress with mods
              code = `${modifier.modCode}(${code})`;
            } else {
              console.log("im here!!!!!");
              code = `${modifier.modCode}(${code})`;
            }
          });
          return `&to ${tapped.layer.label} ${code}`;
        }
        return `&to ${tapped.layer.label} ${held.code}`;
      }

      return `&hm ${held.code} ${tapped.code}`;
    }
  }
};

*/
