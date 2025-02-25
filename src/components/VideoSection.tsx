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
                sx={{ mt: 2, fontSize: [14, 20], color: 'text.secondary' }}
            >
                Clique no vídeo abaixo e saiba tudo sobre
            </Typography>
            <Box sx={{ mt: [0.5, 1] }}>
                <YoutubeVideo embed="gdRdBVgMOBQ" />
            </Box>
        </Container >
    );
}; 