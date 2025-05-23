import {
    Box,
    Button,
    Container,
    Stack,
    Typography
} from "@mui/joy";

export default function KnowAbout() {
    const benefits = [
        {
            highlight: "Pinte com diversos materiais",
            paragraph: "Canetas tipo Posca, base álcool ou base óleo, tinta spray e pincel podem ser usados! O papel foi feito pra resistir e aguentar a versatilidade dos materiais",
            src: "/materials.webp"
        },
        {
            highlight: "52 fotos originais",
            paragraph: "Capturadas por um fotógrafo profissional que manja do assunto. São imagens de paredes, muros de tijolos, portões de alumínio e até do metrô de São Paulo.",
            src: "/mockup-5.webp"
        },
        {
            highlight: "Ideal pra artistas de todos os níveis",
            paragraph: "Não importa se você quer começar ou se já é da cena, esse sketchbook é o espaço pra você soltar a criatividade e até fazer a galera assinar.",
            src: "/mockup-4.webp"
        },
        {
            highlight: "Imagens no tamanho ideal",
            paragraph: "Tamanho 29x21cm(A4) pra você destruir no graffiti! Seja pra soltar um throw-up, fazer seu persona ou até fechar uma agenda de pixo.",
            src: "/mockup-2.webp"
        },
    ];

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                pt: [3, 6],
                px: [2, 4],
            }}>
            <Stack spacing={4}>
                <Box textAlign="center">
                    <Typography
                        level="h2"
                        sx={{ 
                            fontSize: [28, 40],
                            mb: 2
                        }}
                    >
                        Por que o{' '}
                        <Box
                            component={'span'}
                            sx={{ color: 'primary.500' }}>
                            Brasil Graffiti Book
                        </Box>
                        {' '}vai te inspirar?
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: '1fr 1fr'
                            },
                            gap: 4,
                            width: '100%',
                            maxWidth: 900,
                            mx: 'auto'
                        }}
                    >
                        {benefits.map((benefit, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    willChange: 'transform',
                                    transform: 'translateZ(0)',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px) translateZ(0)'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        aspectRatio: '16/9',
                                        position: 'relative',
                                    }}
                                >
                                    <img 
                                        src={benefit.src}
                                        alt={benefit.highlight}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            willChange: 'transform',
                                            transform: 'translateZ(0)'
                                        }}
                                        width="800"
                                        height="450"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </Box>
                                
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        bgcolor: 'background.level1',
                                    }}
                                >
                                    <Typography
                                        level="h3"
                                        sx={{
                                            mb: 1,
                                            fontSize: [20, 24],
                                            fontWeight: 'bold',
                                            color: 'primary.500'
                                        }}
                                    >
                                        {benefit.highlight}
                                    </Typography>
                                    <Typography
                                        level="body-lg"
                                        sx={{
                                            fontSize: [16, 18],
                                            color: 'text.secondary'
                                        }}
                                    >
                                        {benefit.paragraph}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Button
                        size="lg"
                        variant="solid"
                        onClick={() => {
                            const pricingSection = document.getElementById('pricing-section');
                            if (pricingSection) {
                                pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        sx={{
                            mt: 2,
                            borderRadius: 1,
                            px: 4
                        }}
                    >
                        Quero meu Brasil Graffiti Book
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
}
