"use client";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import stroke from "../../../public/test.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import LayoutCards from "./LayoutCards";
type Props = {};

export default function ProjectSection({}: Props) {
  const [temp, setTemp] = React.useState<number>(500);

  useEffect(() => {
    if (window !== undefined) {
      setTemp(window.innerHeight);
    }
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "50vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 320,
            position: "relative",
            transform: "rotate(80deg)",
            top: -50,
            left: temp / 2,
          }}
        >
          <Image alt="stroke" src={stroke} width={320} height={180} />
        </Box>
        <Box
          component="h1"
          fontSize={72}
          width={"100%"}
          textAlign={"center"}
          color="lightsalmon"
          sx={{}}
        >
          PROJECTS
        </Box>
        <Box>
          <LayoutCards />
        </Box>
      </Box>
    </div>
  );
}
