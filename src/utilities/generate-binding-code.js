export const generateBindingCode = (binding) => {
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
