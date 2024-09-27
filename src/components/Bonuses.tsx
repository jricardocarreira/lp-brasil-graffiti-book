import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";

export const Bonuses = () => {
  return (
    <Container disableGutters sx={{ mt: 6, px: [2, 0] }}>
      <Card>
        <Typography level="h2" textAlign="center" color="primary">
          Bônus de Lançamento
        </Typography>
        <Typography
          level="body-md"
          sx={{ mt: 0, mx: [4, 0] }}
          textAlign={["center", "left"]}
        >
          Como um presente exclusivo para quem adquirir o curso no lançamento,
          você terá acesso a bônus <strong>LIMITADOS!</strong> Esses bônus
          incluem módulos extras, com conteúdos avançados para aprofundar ainda
          mais seu conhecimento, além de acessos exclusivos a materiais e
          recursos adicionais.{" "}
          <Typography level="body-xs" textAlign="center">
            *Os bônus serão lançados em Outubro e Novembro.
          </Typography>
        </Typography>
        <Typography
          id="decorated-list-demo"
          level="body-xs"
          sx={{ textTransform: "uppercase", fontWeight: "lg", mb: -1, mt: 2 }}
        >
          MÓDULOS EXTRA:
        </Typography>
        <List aria-labelledby="decorated-list-demo">
          <ListItem>
            <ListItemDecorator>⚡</ListItemDecorator>Introdução ao BoltCEP: crie
            extensões extremamente rápido
          </ListItem>
          <ListItem>
            <ListItemDecorator>🔑</ListItemDecorator>Introdução ao GitHub:
            ferramenta essencial para seu projeto
          </ListItem>
          <ListItem>
            <ListItemDecorator>✨</ListItemDecorator>Como Criar Camadas novas
            com scripts
          </ListItem>
        </List>
        <Typography
          id="decorated-list-demo"
          level="body-xs"
          sx={{ textTransform: "uppercase", fontWeight: "lg", mb: -1, mt: 2 }}
        >
          ACESSO EXCLUSIVO:
        </Typography>
        <List aria-labelledby="decorated-list-demo">
          <ListItem>
            <ListItemDecorator>🤝</ListItemDecorator>2 encontros ao vivo para
            tirar dúvidas
          </ListItem>
          <ListItem>
            <ListItemDecorator>📱</ListItemDecorator>Acesso exclusivo ao
            WhatsApp
          </ListItem>
        </List>
      </Card>
    </Container>
  );
};
