import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container, IconButton, Stack, Typography } from "@mui/joy";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <Container
      sx={{
        mt: [4, 10],
        py: 4,
        backgroundImage: "url('/bg-brick.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
      disableGutters={true}
      maxWidth={false}
    >
      <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={1} sx={{ mb: 1 }}>
        <Link
          href="https://www.instagram.com/bug063"
          target="_blank"
        >
          <IconButton size="md" sx={{ "&:hover svg": { color: "gray" } }}>
            <InstagramIcon sx={{color: "white"}}/>
          </IconButton>
        </Link>
        <Link
          href="https://www.youtube.com/@bug063"
          target="_blank"
        >
          <IconButton size="md" sx={{ "&:hover svg": { color: "gray" } }}>
            <YouTubeIcon sx={{color: "white"}} />
          </IconButton>
        </Link>
      </Stack>
      <Typography textAlign="center" sx={{ color: "white" }}>
        © 2024 Bug063. All rights reserved.
      </Typography>
    </Container>
  );
};
