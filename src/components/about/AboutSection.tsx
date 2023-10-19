import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import curvedArrow from "../../../public/curved stroke.png";
import { motion } from "framer-motion";
import { Button, Link } from "@mui/material";
import { GifBox } from "@mui/icons-material";
type Props = {};

export default function AboutSection({}: Props) {
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
          width={150}
          component={motion.div}
          initial={{ scale: 0 }}
          whileInView={{ rotate: 30, scale: 1, translateY: -50 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            duration: 3,
            damping: 20,
          }}
        >
          <Image
            width={150}
            height={150}
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
              <Stack height="600px" justifyContent="center" alignItems="center">
                <Typography
                  fontSize="1.5rem"
                  fontFamily={"sans-serif"}
                  fontWeight="700"
                  width="80%"
                  color="#FFF8C9"
                >
                  Results-driven Full-Stack Software Engineer with a Bachelor of
                  Science in Computer Science from Lakehead University, 2+ years
                  of agile development experience, proficiency in React, Node,
                  Next, and various AWS services. Strong academic background
                  with a GPA of 3.7. Skilled in developing integrated
                  applications, responsive frontend components, and upgrading
                  existing applications to use serverless and Microservices
                  architecture.
                </Typography>
                <Link
                  target="_blank"
                  href="https://raghav-portfolio-media.s3.amazonaws.com/Resume.pdf"
                  underline="none"
                >
                  <Button variant="contained"> Resume</Button>
                </Link>
              </Stack>
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
                <Typography component="h1" fontSize={"2rem"}>
                  EXPERIENCE
                </Typography>
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
                  <Typography
                    fontSize="1.2rem"
                    color="#FFF8C9"
                    textAlign={"center"}
                  >
                    Full Stack Cloud Engineer | Resource Software International
                    Ltd. (RSI).
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    color="#FFF8C9"
                    textAlign={"center"}
                  >
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
                  <Typography
                    fontSize="1.2rem"
                    color="#FFF8C9"
                    textAlign={"center"}
                  >
                    Junior Web Developer | Bangaree Infotech Solutions
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    color="#FFF8C9"
                    textAlign={"center"}
                  >
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
