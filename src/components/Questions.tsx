import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Container,
  Typography
} from "@mui/joy";

export const Questions = () => {
  return (
    <Container disableGutters sx={{ mt: 8, mb: 4, px: [2, 0] }}>
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
          <AccordionSummary>Não sei graffiti, o livro é para mim?</AccordionSummary>
          <AccordionDetails>
            Com certeza! O Brasil Graffiti Book é perfeito tanto para iniciantes. Se você está começando agora, as fotografias e ilustrações vão te inspirar e ajudar a desenvolver suas habilidades. Você pode usar as páginas para praticar, experimentar novas técnicas e fazer esboços.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Qual o valor do FRETE?
          </AccordionSummary>
          <AccordionDetails>
            O valor do frete é de R$11,80. Ele é fixo para o Brasil todo pois é enviado pela modalidade Registro Módico, utilizado para o envio de livros, revistas entre outros materiais gráficos
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Posso usar qualquer material no livro?
          </AccordionSummary>
          <AccordionDetails>
            Os principais materiais, sim! O Brasil Graffiti Book é feito de um papel revestido resistente que aceita uma variedade de materiais. Você pode usar canetas marcadoras, tintas spray, pincel com tinta, squeezers e muito mais. É muita versatilidade!
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
          <AccordionSummary>
            Como posso comprar o livro?
          </AccordionSummary>
          <AccordionDetails>
            Você pode garantir o seu Brasil Graffiti Book nessa página, no botão verde de "Fazer Pedido". Basta clicar nele e aguardar que eu vou te responder.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>O livro estará disponível em lojas físicas?</AccordionSummary>
          <AccordionDetails>
            Inicialmente, o Brasil Graffiti Book estará disponível online e também será distribuido nas Lojas Real Grapixo e na Banca Forte, ambas localizadas em Belo Horizonte.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Quais as formas de pagamento?</AccordionSummary>
          <AccordionDetails>
            PIX e Cartão de crédito (à vista/parcelado) via link de pagamento do Mercado Pago
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Como posso acompanhar as novidades sobre o Brasil Graffiti Book?</AccordionSummary>
          <AccordionDetails>
            Siga-me nas redes sociais para ficar por dentro de todas as novidades e conteúdos exclusivos relacionados ao Brasil Graffiti Book. Você pode me encontrar no Instagram, YouTube e TikTok.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
};
