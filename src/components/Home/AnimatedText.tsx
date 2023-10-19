"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

type Props = {};

export default function AnimatedText({}: Props) {
  return (
    <motion.div>
      <Stack
        sx={{
          height: "95vh",
          pl: "2rem",
        }}
        direction="column"
        justifyContent="center"
        alignContent="center"
      >
        <Typography
          component="h1"
          textAlign={"center"}
          color="lightsalmon"
          fontSize={84}
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
        {/* <Button sx={{ maxWidth: 150, m: "1rem", ml: "2rem", fontSize: 24 }}>
          About Me
        </Button> */}
      </Stack>
    </motion.div>
  );
}
