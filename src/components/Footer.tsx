import { Container, Typography } from "@mui/joy";
import React from "react";

export const Footer = () => {
  return (
    <Container
      sx={{
         mt: [4, 10],
          py: 3,
          backgroundImage: "url('/bg-brick.webp')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
        
       }}
      disableGutters={true}
      maxWidth={false}
    >
      <Typography textAlign="center" sx={{color: "white"}}>
        © 2024 Bug063. All rights reserved.
      </Typography>
    </Container>
  );
};
