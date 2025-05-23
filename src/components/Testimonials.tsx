import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Container, Stack, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const testimonials = [
    {
      name: "Noguer",
      sign: "@noguer.art13 • Grafiteiro",
      text: "Pra quem nunca pintou na rua, esse book te leva mais próximo das ruas, ele ajuda muito a desenvolver o seu senso estético em diferentes formato de muros entre outros suportes que a rua pode te oferecer!",
      avatar: "/nog.jpg"
    },
    {
      name: "Wixy",
      sign: "@wixy.zzzzz • Tatuadora",
      text: "Vou levar comigo nas viagens pra galera de vários países assinar o livro 😆❤️‍🔥🚔 Esse livro é muito da hora, gostei demais!!",
      avatar: "/wxz.jpg"
    },
    {
      name: "Noguer",
      sign: "@noguer.art13 • Grafiteiro",
      text: "Gostei muito da ideia do Brasil Graffiti Book, pois ele vai além um livro para interagir com suas artes. Ele possibilita um vivência muitas vezes impossível para a maioria das pessoas que não conhecem nossa cultura, ele pode levar as ruas para dentro de uma sala de aula e discutir diversas formas de interações e intervenções que nossa cidade cinza pede.",
      avatar: "/nog.jpg"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handlers para pausar o autoplay
  const handleTouchStart = () => {
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = () => {
    setIsAutoPlaying(true);
  };

  const handleMouseDown = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseUp = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 6000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [testimonials.length, isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Para desktop, mostramos 3 depoimentos por vez
  const getVisibleTestimonials = () => {
    // Em desktop, mostra 3 depoimentos por padrão
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  // Usado para renderizar apenas um depoimento em telas pequenas
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 900 ? 1 : 3);
    };

    // Inicialização
    handleResize();

    // Adiciona o evento de resize
    window.addEventListener('resize', handleResize);
    
    // Limpa o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Obtém os depoimentos visíveis baseado na largura da tela
  const visibleTestimonials = () => {
    if (visibleCount === 1) {
      return [testimonials[currentIndex]];
    }
    
    return getVisibleTestimonials();
  };

  return (
    <Container
      disableGutters
      maxWidth="lg"
      sx={{
        pt: [3, 6],
        px: [2, 0],
        position: "relative",
        overflow: "hidden"
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Stack justifyContent="center" alignItems="center">
        <Typography
          level="h2"
          textAlign="center"
          sx={{ fontSize: [28, 40], mb: 1 }}
          maxWidth={[450, 450, 550]}
        >
          O que a galera tá falando do
          {' '}
          <Box
            component={'span'}
            display={'inline'}
            sx={{ color: 'primary.500' }}>
            Brasil Graffiti Book
          </Box>
          ?
        </Typography>
        <Typography level="body-lg" sx={{ fontSize: [16, 20], textAlign: "center", mb: 4 }}>
          Se liga no que nossos clientes estão falando sobre o Brasil Graffiti Book
        </Typography>
      </Stack>

      <Box sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            width: "100%",
            transition: "transform 0.5s ease-in-out"
          }}
        >
          {isClient && visibleTestimonials().map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                bgcolor: "#f5f5f5",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: 300,
                borderRadius: 2
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2
                }}
              >
                <Box
                  component="img"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mb: 2,
                    border: "3px solid",
                    borderColor: "background.level2"
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "/default-avatar.webp";
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    level="title-md"
                    fontWeight="bold"
                    color="primary"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    level="body-sm"
                    sx={{
                      color: "text.secondary",
                      fontSize: 14
                    }}
                  >
                    {testimonial.sign}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ position: "relative", flex: 1 }}>
                <Typography
                  level="body-md"
                  sx={{
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* Controles do Slider (apenas bolinhas) */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            p: 1,
            mt: 2
          }}
        >
          {testimonials.map((_, index) => (
            <FiberManualRecordIcon
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                cursor: "pointer",
                fontSize: 12,
                color: index === currentIndex ? "primary.500" : "neutral.300",
                opacity: index === currentIndex ? 1 : 0.5,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  opacity: 0.8
                }
              }}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}; 