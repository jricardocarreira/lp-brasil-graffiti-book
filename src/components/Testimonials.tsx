import { Box, Container, Stack, Typography } from "@mui/joy";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      text: "O Brasil Graffiti Book é incrível! As imagens são de alta qualidade e me inspiram todos os dias.",
    },
    {
      name: "Maria Oliveira",
      text: "Adorei o livro! É perfeito para quem ama arte urbana e quer praticar suas habilidades.",
    },
    {
      name: "Carlos Souza",
      text: "Recomendo a todos os meus amigos grafiteiros. Um produto de excelente qualidade!",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ pt: [3, 6], px: [2, 0], mb: 4 }}
    >
      <Typography
        level="h3"
        textAlign="center"
        sx={{ mb: 3, fontSize: [24, 32], color: 'primary.500' }}
      >
        O que nossos clientes dizem
      </Typography>
      <Stack spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <Typography level="body-lg" sx={{ mb: 1, fontWeight: 'bold' }}>
              {testimonial.name}
            </Typography>
            <Typography level="body-md">
              {testimonial.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}; 