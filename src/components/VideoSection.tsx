import { Box, Container, Typography } from "@mui/joy";
import YoutubeVideo from "./YoutubeVideo";

export const VideoSection = () => {
    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                pt: [3, 6],
                px: [2, 0],
            }}
        >
            <Typography
                level="body-lg"
                textAlign="center"
                sx={{ mt: 2, fontSize: [14, 20], color: 'text.primary' }}
            >
                Dá uma olhada no Brasil Graffiti Book:
            </Typography>
            <Box 
                sx={{ 
                    mt: [0.5, 1],
                    maxWidth: 400,
                    mx: 'auto'
                }}
            >
                <YoutubeVideo embed="KlC3aiqIfy4" />
            </Box>
        </Container>
    );
}; 