import { Box, Container, Typography } from "@mui/joy";
import { PicosButton } from "./PicosButton";
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
                Assista ao vídeo e conheça o Picos de Graffiti por dentro
            </Typography>
            <Box 
                sx={{ 
                    mt: [0.5, 1],
                    maxWidth: 400,
                    mx: 'auto'
                }}
            >
                <YoutubeVideo embed="ydsxirYGn_c" />
            </Box>
            <Typography
                level="body-md"
                textAlign="center"
                sx={{ mt: 2 }}
            >
                Curtiu essa proposta? O próximo passo é conhecer o Picos 👇
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
                <Box sx={{ width: "100%", maxWidth: 320 }}>
                    <PicosButton fullWidth />
                </Box>
            </Box>
        </Container>
    );
}; 