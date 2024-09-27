import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";

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
          <AccordionSummary>
            Preciso ter conhecimento prévio em programação?
          </AccordionSummary>
          <AccordionDetails>
            Não, o curso foi pensado para designers e motions, não para
            programadores. Não é necessário nenhum conhecimento prévio de
            programação para acompanhar.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Preciso saber Expressões?</AccordionSummary>
          <AccordionDetails>
            Não é ensinado sobre expressões durante o curso, então é importante
            ter pelo menos um conhecimento básico para conseguir criar Scripts
            melhores, porém não é necessário saber expressões para acompanhar as
            aulas.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Qual é a duração das aulas?</AccordionSummary>
          <AccordionDetails>
            As aulas teoricas são curtas e diretas ao ponto, com duração de 5-7
            minutos cada.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Qual a duração do curso?</AccordionSummary>
          <AccordionDetails>
            A duração do curso somando teoria e projeto prático é de 7 horas
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>O que vou aprender no curso?</AccordionSummary>
          <AccordionDetails>
            Você aprenderá o essencial para criar seus primeiros scripts para
            After Effects, partindo do absoluto zero. O curso inclui teoria e 5
            projetos práticos de diferentes níveis de dificuldade.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Existe garantia de reembolso?</AccordionSummary>
          <AccordionDetails>
            Sim, há uma garantia de reembolso de 7 dias.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            O curso é adequado para iniciantes?
          </AccordionSummary>
          <AccordionDetails>
            Sim, o curso foi estruturado para ser acessível a iniciantes, com
            uma progressão gradual e linguagem amigável.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
};
