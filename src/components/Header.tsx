import { Chip, Container, IconButton, Link, Stack } from "@mui/joy";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Header = () => {
  return (
    <Container maxWidth="md">
      <Stack
        direction={["column-reverse", "row"]}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ my: 4, mx: [2, 0], mt: 10 }}
      >
        <Link href="/" underline="none">
          <Chip size="lg" sx={{ mt: [1, 0] }}>
            create-script
          </Chip>
        </Link>
        {/* <Stack direction="row" alignItems="center" spacing={1}>
          <Link
            href="https://github.com/gabrielcarreira"
            underline="none"
            target="_blank"
          >
            <IconButton size="lg">
              <GitHubIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <IconButton size="lg">
            <TwitterIcon sx={{ color: "white" }} />
          </IconButton>
          <Link
            href="https://www.instagram.com/creategabriel"
            underline="none"
            target="_blank"
          >
            <IconButton size="lg">
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Stack> */}
      </Stack>
    </Container>
  );
};
