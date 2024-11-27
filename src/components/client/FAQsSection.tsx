"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQs } from "@/src/constants";

const FAQsSection = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div id="faqs" className="w-screen min-h-screen py-10 flex  gap-4 flex-col items-center">
      <button className="border-4 rounded-[50px] border-black font-semibold text-xs py-2 px-12  uppercase text-black ">
        FAQs
      </button>
      <h2 className="text-7xl font-semibold text-[#002175]">
        FAQs for Insurance Riders
      </h2>

      <div className="flex flex-col px-24 py-10 w-full">
      {FAQs.map((item) => (
        <Accordion
          key={item.id}
          className="!py-3 shadow-none border-t-2 border-black"
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}d-content`}
            id={`panel${item.id}d-header`}
            className="flex justify-between items-center"
          >
            <Typography className="!font-semibold">
              {`${item.id}. ${item.question}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>
  );
};

export default FAQsSection;
