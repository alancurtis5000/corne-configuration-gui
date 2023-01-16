import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./key-dialog-page-3.styles.scss";
import { BackButton } from "../back-button/back-button.component";
import { keys } from "../../constants/keys";
import { Button } from "@mui/material";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { categories } from "../../constants/categories";
import { HELD, TAPPED } from "../../constants/button-modes";
import { isEmpty } from "../../utilities/data-parsing";

export const KeyDialogPage3 = (props) => {
  const { setPage } = props;
  const {
    selectedBindingIndex,
    selectedLayerIndex,
    layers,
    buttonMode,
    changeBindingTapped,
    changeBindingHeld,
  } = useContext(KeymapContext);
  const { index, tapped, held } =
    layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const back = () => {
    if (buttonMode === TAPPED) {
      if (isEmpty(tapped)) {
        setPage(1);
      } else {
        setPage(2);
      }
    } else if (buttonMode === HELD) {
      if (isEmpty(held)) {
        setPage(1);
      } else {
        setPage(2);
      }
    }
  };

  const handleOnClick = ({ newBindingTappedValue }) => {
    if (buttonMode === TAPPED) {
      changeBindingTapped({ newBindingTappedValue });
    } else if (buttonMode === HELD) {
      changeBindingHeld({ newBindingTappedValue });
    }

    setPage(2);
  };
  const sections = categories.map((category, index) => {
    const options = keys.filter((key) => key.key_category_id === category.id);
    options.sort((a, b) => a.label.localeCompare(b.label));

    return (
      <Accordion key={category.id} defaultExpanded={index === 0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${category.label}-content`}
          id={`${category.label}-header`}
        >
          <Typography>{`${category.label}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {options.map((option) => {
            return (
              <Button
                variant="outlined"
                key={option.id}
                onClick={() => handleOnClick({ newBindingTappedValue: option })}
              >
                {option.label}
              </Button>
            );
          })}
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <div className="key-dialog-page-3">
      <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
      <DialogContent dividers>
        <div className="content">
          <div>
            <BackButton onClick={back} />
          </div>
          <div className="key-options">{sections}</div>
        </div>
      </DialogContent>
    </div>
  );
};

KeyDialogPage3.propTypes = {
  setPage: PropTypes.func.isRequired,
};
