import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import React from "react";

type Props = { text: string; fontSize: any };

const colors = [
  "IndianRed",
  "DarkSalmon",
  "LightSalmon",
  "Crimson",
  "firebrick",
  "darkred",
  "DeepPink",
  "MediumVioletRed",
  "Tomato",
  "OrangeRed",
  "Orange",
  "LightYellow",
  "LemonChiffon",
  "PapayaWhip",
  "Moccasin",
  "Gold",
  "Khaki",
  "lavender",
  "PaleGoldenrod",
  "Darkkhaki",
  "Thistle",
  "Orchid",
  "Magenta",
  "MediumPurple",
  "DarkOrchid",
  "Indigo",
  "MediumSlateBlue",
  "LawnGreen",
  "LimeGreen",
  "Lime",
];

const AnimatedText = (props: Props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignContent="center">
        {props.text.split("").map((char) => {
          return (
            <motion.div
              key={crypto.randomUUID()}
              initial={{ color: "lightsalmon" }}
              whileHover={{
                scale: 1.2,
                color: colors[Math.floor(Math.random() * colors.length)],
              }}
            >
              {char !== " " ? (
                <Typography sx={{ fontSize: props.fontSize }} variant="h1">
                  {char}
                </Typography>
              ) : (
                <Typography
                  sx={{ fontSize: props.fontSize, opacity: 0 }}
                  variant="h1"
                >
                  A
                </Typography>
              )}
            </motion.div>
          );
        })}
      </Stack>
    </div>
  );
};

export default AnimatedText;
