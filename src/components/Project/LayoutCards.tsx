import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import portfolioOld from "../../../public/portfolio-old.jpeg";
import finalysis from "../../../public/logoOnlyNoBg.png";
import finalysisHome from "../../../public/finalysis-home.jpeg";
import Image from "next/image";
import "./style.css";
import Link from "@mui/material/Link";

type Props = {};

export default function LayoutCards({}: Props) {
  return (
    <div>
      <Grid
        mt="3rem"
        pb="10rem"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{}}
        columnGap={5}
      >
        <Grid
          item
          xs={10}
          md={6}
          sx={{
            backgroundColor: "darkorchid",
            borderRadius: "10px",
            minHeight: "400px",
          }}
        >
          <Link
            underline="none"
            target="_blank"
            href="https://main.d348wb8dm2qnjy.amplifyapp.com/"
          >
            <Stack justifyContent="space-around" direction="row">
              <Box>
                <Image
                  src={finalysis}
                  alt="finalysis-logo"
                  width={120}
                  height={120}
                />
              </Box>
              <Typography
                color="#FFF8C9"
                height={120}
                fontSize={72}
                sx={{ display: "inline-block" }}
              >
                Finalysis
              </Typography>
            </Stack>
          </Link>
          <Box>
            <Box
              sx={{
                position: "relative",
                top: "0",
                ml: "5%",
                width: "90%",
                height: 240,
                objectFit: "cover",
              }}
            >
              <Image
                className="test"
                placeholder="blur"
                src={finalysisHome}
                alt=""
                fill
              />
            </Box>
            <Typography mt={-24} width="90%" ml="5%" fontSize={18}>
              Finalysis, a comprehensive platform designed to serve as your
              ultimate destination for in-depth analysis of stocks,
              cryptocurrencies, and a wide array of financial instruments.
              Utilizing an event-driven architecture approach and harnessing the
              power of various cloud services, particularly AWS, we are
              committed to delivering an unparalleled financial analysis
              experience.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={10}
          md={4}
          lg={3}
          sx={{
            backgroundColor: "#FF6969",
            borderRadius: "10px",
            minHeight: "400px",
          }}
        >
          <Stack
            justifyContent="center"
            alignItems={"center"}
            direction="column"
          >
            <Typography
              color="#FFF8C9"
              height={120}
              fontSize={64}
              sx={{ display: "inline-block" }}
            >
              Portfolio
            </Typography>
            <Box>
              <a
                target="_blank"
                href="https://master.d1l07ni53erfjo.amplifyapp.com/"
              >
                <Image
                  src={portfolioOld}
                  alt="finalysis-logo"
                  height={250}
                  width={300}
                />
              </a>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
