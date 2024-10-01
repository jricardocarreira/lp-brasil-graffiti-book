import {
    Box,
    Container,
    Stack,
    Typography
} from "@mui/joy";

export default function Welcome() {
    const texts = [
        {
            highlight: "52 fotos originais",
            paragraph: ", tiradas por um fotógrafo profissional que manja do assunto. São imagens de paredes, muros de tijolos, portões de alumínio e até do metrô de São Paulo.",
            src: "/showing.webp"
        },

        {
            highlight: "Ideal pra artistas de todos os níveis",
            paragraph: "! Não importa se você quer começar ou se já é da cena, esse sketchbook é o espaço pra você soltar a criatividade e até fazer a galera assinar.",
            src: "/floating.webp" 
        },
        {
            highlight: "Pinte com diversos materiais",
            paragraph: "! Canetas tipo Posca, base álcool ou base óleo, tinta spray e pincel podem ser usados! O papel foi feito pra resistir e aguentar a versatilidade dos materiais",
            src: "/materials.webp"
        },
        {
            highlight: "Imagens no tamanho ideal ",
            paragraph: "(A4) pra você destruir no graffiti! Seja pra soltar um throw-up, fazer seu persona ou até fechar uma agenda de pixo.",
            src: "/writing.webp" 
        },
    ];

    return (
        <Container
            disableGutters
            sx={{
                pt: [3, 6],
                px: [2, 0],
            }}>
            <Stack justifyContent="center" alignItems="center">
                <Typography
                    level="h2"
                    textAlign="center"
                    sx={{ fontSize: [24, 32, 40] }}
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
                                <Typography level="body-md">
                                    <Box
                                        component={'span'}
                                        sx={{ color: "primary.500", fontWeight: 700 }}
                                    >
                                        {text.highlight}
                                    </Box>
                                    {text.paragraph}
                                </Typography>
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
