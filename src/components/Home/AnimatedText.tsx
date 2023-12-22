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
type Props = { toAbout: any };

export default function AnimatedText({ toAbout }: Props) {
  return (
    <motion.div>
      <Stack
        sx={{
          height: "75vh",
        }}
        direction="column"
        justifyContent="center"
        alignContent="center"
      >
        <Typography
          component="h1"
          textAlign={"center"}
          color="lightsalmon"
          fontSize="4rem"
        >
          RAGHAV RUDHRA
        </Typography>
        <Typography
          color="lightsalmon"
          component="h5"
          fontSize={24}
          textAlign={"center"}
        >
          Software Development Engineer with expertise in developing Full-Stack
          & Cloud solutions.
        </Typography>
        <Box width="100%" justifyContent="center" display="flex">
          <Button
            onClick={toAbout}
            sx={{ maxWidth: 150, m: "1rem", ml: "2rem", fontSize: 24 }}
          >
            About Me
          </Button>
        </Box>
      </Stack>
      {/* Social Media Links */}
      <Stack
        component={motion.div}
        sx={{ m: "1rem", transform: "translateY(-10rem)" }}
        spacing={3}
      >
        <Box sx={{ backgroundColor: "lightsalmon", width: 72, height: 72 }}>
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
            }}
            src={github}
            alt="github-logo"
            width="64"
            height="64"
          ></Image>
        </Box>
        <Box
          sx={{
            backgroundColor: "lightsalmon",
            width: 72,
            height: 72,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={linkedln}
            alt="linkedln-logo"
            width="64"
            height="64"
          ></Image>
        </Box>
      </Stack>
    </motion.div>
  );
}
