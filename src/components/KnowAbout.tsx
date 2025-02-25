import {
    Box,
    Button,
    Container,
    Stack,
    Typography
} from "@mui/joy";

export default function KnowAbout() {
    const texts = [
        {
            highlight: "Pinte com diversos materiais",
            paragraph: "Canetas tipo Posca, base álcool ou base óleo, tinta spray e pincel podem ser usados! O papel foi feito pra resistir e aguentar a versatilidade dos materiais",
            src: "/materials.webp",
            buttonText: "Garanta o seu",
        },
        {
            highlight: "52 fotos originais",
            paragraph: "Capturadas por um fotógrafo profissional que manja do assunto. São imagens de paredes, muros de tijolos, portões de alumínio e até do metrô de São Paulo.",
            src: "/mockup-5.png",
            buttonText: "Adquira já",
        },
        {
            highlight: "Ideal pra artistas de todos os níveis",
            paragraph: "Não importa se você quer começar ou se já é da cena, esse sketchbook é o espaço pra você soltar a criatividade e até fazer a galera assinar.",
            src: "/mockup-4.png",
            buttonText: "Compre agora",
        },
        {
            highlight: "Imagens no tamanho ideal ",
            paragraph: "Tamanho 29x21cm(A4) pra você destruir no graffiti! Seja pra soltar um throw-up, fazer seu persona ou até fechar uma agenda de pixo.",
            src: "/mockup-2.png",
            buttonText: "Leve o seu",
        },
    ];

    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                pt: [3, 6],
                px: [2, 0],
            }}>
            <Stack justifyContent="center" alignItems="center">
                <Typography
                    level="h2"
                    textAlign="center"
                    sx={{ fontSize: [28, 40] }}
                    maxWidth={[450, 450, 550]}
                >
                    Por que o
                    {' '}
                    <Box
                        component={'span'}
                        display={'inline'}
                        sx={{ color: 'primary.500' }}>
                        Brasil Graffiti Book
                    </Box>
                    {' '}
                    vai te inspirar?
                </Typography>
            </Stack>
            {texts.map((text, index) => (
                <Box key={index} pt={[2, 4]} display="flex" flexDirection="column">
                    <Stack justifyContent="center" alignItems="center" paddingX={[0, 4]}>
                        <Box
                            display="flex"
                            flexDirection={["column-reverse", index % 2 === 0 ? "row" : "row-reverse"]}
                            justifyContent="center"
                            alignItems="center"
                            gap={4}
                        >
                            <Box
                                flex={1}
                                sx={{ px: [2, 0] }}
                                textAlign={["center", "start"]}
                            >
                                <Typography level="h3" sx={{ mb: 1, fontWeight: 'bold', color: 'text.primary', fontSize: [24, 32] }}>
                                    {text.highlight}
                                </Typography>
                                <Typography level="body-lg" sx={{ fontSize: [16, 20] }}>
                                    {text.paragraph}
                                </Typography>
                                <Button
                                    variant="solid"
                                    onClick={() => {
                                        const pricingSection = document.getElementById('pricing-section');
                                        if (pricingSection) {
                                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    sx={{ mt: 2, borderRadius: 1 }}
                                >
                                    {text.buttonText}
                                </Button>
                            </Box>

                            <Box
                                flex={1}
                                sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
                            >
                                <img 
                                    src={text.src} 
                                    alt={text.highlight} 
                                    style={{ width: '100%', borderRadius: 8 }} 
                                />
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            ))}
        </Container>
    );
}
