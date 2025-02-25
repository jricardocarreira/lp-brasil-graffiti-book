import { Box, Container, Typography } from "@mui/joy";

export const HeaderSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/bg-brick.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: [4, 6],
        pb: [2, 3],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: [2, 0],
        }}
      >
        <Box
          component="img"
          src="/logo-desktop.webp"
          alt="Brasil Graffiti Book Logo"
          sx={{
            width: ["300px", "400px"],
            height: "auto",
            objectFit: "contain",
            content: "url('/logo-desktop.webp')"
          }}
          width="400"
          height="auto"
          loading="lazy"
        />
        <Typography
          component="h2"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "500",
            fontSize: [14, 20],
            maxWidth: "600px",
            width: "100%",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          O sketch book que traz as ruas para suas mãos
        </Typography>
      </Container>
    </Box>
  );
}; 