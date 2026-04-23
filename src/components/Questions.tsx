import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Container,
  Link,
  Typography
} from "@mui/joy";

export const Questions = () => {
  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ mt: 8, mb: 4, px: [2, 0] }}
    >
      <Typography level="h3" textAlign="center" sx={{ mb: 3 }} color="primary">
        Perguntas Frequentes
      </Typography>
      <AccordionGroup
        size="lg"
        sx={(theme) => ({
          [`& .${accordionClasses.root}`]: {
            marginTop: "0.5rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: "background.level1",
            borderRadius: "md",
            borderBottom: "1px solid",
            borderColor: "background.level2",
          },
          '& [aria-expanded="true"]': {
            boxShadow: `inset 0 -1px 0 ${theme.vars.palette.divider}`,
          },
        })}
      >
        <Accordion>
          <AccordionSummary>
            O Brasil Graffiti Book ainda está disponível?
          </AccordionSummary>
          <AccordionDetails>
            Não. Todas as unidades foram vendidas.
            <br />
            Mas você pode conhecer o Picos de Graffiti, que é a evolução do projeto.
            {' '}
            <Link href="https://picosdegraffiti.com.br" target="_blank" rel="noopener noreferrer">
              Conhecer o Picos de Graffiti
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Posso usar qualquer material no livro?
          </AccordionSummary>
          <AccordionDetails>
            Os principais materiais, sim! O Brasil Graffiti Book é feito de um papel revestido resistente que aceita uma variedade de materiais. Você pode usar Posca, canetas marcadoras, tintas spray, pincel com tinta, squeezers e muito mais. É muita versatilidade!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Não sei graffiti, o livro é para mim?</AccordionSummary>
          <AccordionDetails>
            Com certeza! O Brasil Graffiti Book é perfeito para iniciantes. Se você está começando agora, as fotografias vão te inspirar e ajudar a desenvolver suas habilidades. Você pode usar as páginas para praticar, experimentar novas técnicas e fazer esboços.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Quantas folhas tem no livro?
          </AccordionSummary>
          <AccordionDetails>
            O livro contém 52 folhas de fotografias originais capturadas por um fotógrafo profissional, imagens de paredes, muros de tijolos, portões de alumínio e do metrô de São Paulo.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Já faço graffiti, como posso usar o livro?</AccordionSummary>
          <AccordionDetails>
            Se você já é grafiteiro, o Brasil Graffiti Book é perfeito para convidar outros artistas para deixar suas assinaturas e personas nele. É uma maneira única de registrar as conexões que o graffiti faz na sua vida.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Como posso acompanhar as novidades sobre o Brasil Graffiti Book?</AccordionSummary>
          <AccordionDetails>
            Siga-nos nas redes sociais para ficar por dentro de todas as novidades e conteúdos exclusivos relacionados ao Brasil Graffiti Book. Você pode nos encontrar no Instagram, YouTube e TikTok.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
};
