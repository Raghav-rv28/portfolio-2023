import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Stack, Link } from "@mui/material";
import data from "../../../public/data/blogsdata.json";
import { format } from "date-fns";
import Image from "next/image";
import clapping from "../../../public/clapping.png";
import { motion } from "framer-motion";
type Props = {};

const CardSection = ({
  title,
  imgUrl,
  claps,
  url,
  publishedAt,
}: {
  title: string;
  imgUrl: string;
  claps: number;
  url: string;
  publishedAt: string;
}) => {
  return (
    <div key={title}>
      <Card key={title} sx={{ maxWidth: 345, backgroundColor: "#FF6969" }}>
        <Link underline="none" href={url} target="_blank">
          <CardActionArea>
            <CardMedia
              sx={{ pt: "0.5rem" }}
              component="img"
              src={imgUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                textAlign="center"
                fontSize={18}
                component="div"
                color="white"
              >
                {title}
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="1rem"
              >
                <Typography
                  variant="body2"
                  fontFamily="sans-serif"
                  fontSize={18}
                  fontWeight={700}
                  color="text.secondary"
                >
                  Date: {format(new Date(publishedAt), "PP")}
                </Typography>
                <Stack direction="row">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Image
                      src={clapping}
                      width={48}
                      height={48}
                      alt="clapping hands"
                    />
                  </motion.div>

                  <Typography mt=".5rem">{claps}</Typography>
                </Stack>
              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
};
export default function BlogSection(props: Props) {
  return (
    <div>
      <Box
        component="h1"
        fontSize={72}
        width={"100%"}
        textAlign={"center"}
        color="lightsalmon"
        sx={{}}
      >
        PUBLICATIONS
      </Box>
      <Stack>
        {data.data.map((value) => {
          return (
            <CardSection
              title={value.title}
              imgUrl={value.image_url}
              claps={value.claps}
              url={value.url}
              publishedAt={value.published_at}
            />
          );
        })}
      </Stack>
    </div>
  );
}
