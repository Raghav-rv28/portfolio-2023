import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import curvedArrow from "../../../public/curved stroke.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {};
const curvedVariants = {
  visible: {
    opacity: 1,
    scale: 2,
    rotate: 30,
    translateY: 150,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, scale: 0 },
};
export default function AboutSection({}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  console.log(inView);
  return (
    <div>
      <Paper
        elevation={12}
        sx={{
          pb: "10rem",
          borderRadius: "25px",
          backgroundColor: "#C70039",
        }}
      >
        <Box
          ref={ref}
          component={motion.div}
          initial={{ scale: 0 }}
          variants={curvedVariants}
          animate={{ rotate: 30, scale: 1, translateY: 150 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            width={300}
            height={300}
            alt="curved arrow"
            src={curvedArrow}
          />
        </Box>
        <Box
          component="h1"
          fontSize={72}
          width={"100%"}
          textAlign={"center"}
          color="lightsalmon"
          sx={{}}
        >
          ABOUT ME
        </Box>
        <Box p="2rem">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            rowGap={2}
          >
            <Grid
              item
              xs={12}
              lg={7}
              sx={{
                borderRadius: "5%",
                backgroundColor: "darkkhaki",
                minHeight: "600px",
              }}
            >
              <Box
                height="600px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography fontSize="1.5rem" width="80%" color="#FFF8C9">
                  Results-driven Full-Stack Software Engineer with a Bachelor of
                  Science in Computer Science from Lakehead University, 2+ years
                  of agile development experience, proficiency in React, Node,
                  Next, and various AWS services. Strong academic background
                  with a GPA of 3.7. Skilled in developing integrated
                  applications, responsive frontend components, and upgrading
                  existing applications to use serverless and Microservices
                  architecture.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              lg={4}
              sx={{
                borderRadius: "5%",
                backgroundColor: "darkkhaki",
                minHeight: "600px",
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ width: "100%", minHeight: "600px" }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  pt="2rem"
                  alignItems="center"
                  sx={{
                    borderRadius: "5%",
                    backgroundColor: "darkcyan",
                    minHeight: "200px",
                    width: "90%",
                  }}
                >
                  <Typography fontSize="1.2rem" color="#FFF8C9" width="80%">
                    Full Stack Cloud Engineer | Resource Software International
                    Ltd. (RSI).
                  </Typography>
                  <Typography fontSize="0.8rem" color="#FFF8C9" width="80%">
                    May 2022 - Aug 2023 · 1 yr 4 mos
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  pt="2rem"
                  alignItems="center"
                  sx={{
                    borderRadius: "5%",
                    backgroundColor: "darkcyan",
                    minHeight: "200px",
                    width: "90%",
                  }}
                >
                  <Typography fontSize="1.2rem" color="#FFF8C9" width="80%">
                    Junior Web Developer | Bangaree Infotech Solutions
                  </Typography>
                  <Typography fontSize="0.8rem" color="#FFF8C9" width="80%">
                    Jan 2020 - Nov 2021 · 1 yr 11 mos
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
