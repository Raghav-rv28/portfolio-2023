"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Image from "next/image";
import github from "../../../public/github-mark.png";
import linkedln from "../../../public/linkedln logo.png";
import Link from "next/link";
import AnimatedText from "../AnimatedText";
import { StaggeredText } from "../StaggeredText";
type Props = { toAbout: any };

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

export default function HomeContent({ toAbout }: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          sx={{
            height: "75vh",
          }}
          direction="column"
          justifyContent="center"
          alignContent="center"
        >
          <AnimatedText
            text="RAGHAV RUDHRA"
            fontSize={{ xs: "2.5rem", md: "5rem" }}
          />

          <Typography
            color="lightsalmon"
            component="h5"
            fontSize={{ xs: "1rem", md: "2rem" }}
            textAlign={"center"}
          >
            <StaggeredText
              text="Software Development Engineer with expertise in developing
  Full-Stack & Cloud solutions."
              once
              eachAlphabet
            />
          </Typography>
          <Box width="100%" justifyContent="center" display="flex">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 10,
              }}
            >
              <Button
                onClick={toAbout}
                sx={{ maxWidth: 150, m: "1rem", ml: "2rem", fontSize: 24 }}
              >
                About Me
              </Button>
            </motion.div>
          </Box>
        </Stack>
      </motion.div>
      {/* Social Media Links */}
      <Stack
        component={motion.div}
        initial={{ x: -1000 }}
        animate={{ x: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        sx={{ m: "1rem" }}
        spacing={3}
      >
        <Box
          component={motion.div}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            backgroundColor: "lightsalmon",
            borderRadius: "10%",
            width: 84,
            height: 84,
          }}
        >
          <Link href={"https://github.com/Raghav-rv28"} target="_blank">
            <Image
              style={{
                display: "block",
                marginTop: "8px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={github}
              alt="github-logo"
              width="64"
              height="64"
            ></Image>
          </Link>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            backgroundColor: "lightsalmon",
            borderRadius: "10%",
            width: 84,
            height: 84,
          }}
        >
          <Link
            href={"https://www.linkedin.com/in/raghav-rv28/"}
            target="_blank"
          >
            <Image
              style={{
                display: "block",
                marginTop: "8px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={linkedln}
              alt="linkedln-logo"
              width="64"
              height="64"
            ></Image>
          </Link>
        </Box>
      </Stack>
    </div>
  );
}
