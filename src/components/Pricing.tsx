import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography
} from "@mui/joy";
import { useEffect, useState } from "react";
import { CheckoutModal } from './CheckoutModal';

interface RatingProps {
  totalRatings: number;
  totalScore: number;
  maxScore: number;
}

const Rating = ({ totalRatings, totalScore, maxScore }: RatingProps) => {
  // Converte a nota de 0-10 para 0-5 estrelas
  const averageScore = (totalScore / totalRatings) * (5 / maxScore);
  const fullStars = Math.floor(averageScore);
  const decimal = averageScore % 1;
  const hasAlmostFullStar = decimal >= 0.1;
  const emptyStars = 5 - fullStars - (hasAlmostFullStar ? 1 : 0);

  const starColor = "#e4a700";

  return (
    <Stack direction="row" spacing={0.5} alignItems="flex-end" mb={1}>
      <Typography level="body-sm">
        {(averageScore).toFixed(1)}
      </Typography>
      <Stack direction="row" spacing={0}>
        {[...Array(fullStars)].map((_, i) => (
          <GradeRoundedIcon key={`full-${i}`} sx={{ color: starColor, fontSize: 22 }} />
        ))}
        {hasAlmostFullStar && (
          <StarRoundedIcon
            sx={{
              color: starColor,
              fontSize: 22,
              opacity: decimal
            }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <GradeOutlinedIcon key={`empty-${i}`} sx={{ color: starColor, fontSize: 22 }} />
        ))}
      </Stack>
      <Typography level="body-sm">
        ({totalRatings} avaliações)
      </Typography>
    </Stack>
  );
};

// Função para calcular a previsão de entrega
const calcularPrevisaoEntrega = (diasUteis: number) => {
  const dataAtual = new Date();
  let diasAdicionados = 0;

  while (diasAdicionados < diasUteis) {
    dataAtual.setDate(dataAtual.getDate() + 1);
    const diaSemana = dataAtual.getDay();
    if (diaSemana !== 0 && diaSemana !== 6) { // Ignorar domingos e sábados
      diasAdicionados++;
    }
  }

  return dataAtual.toLocaleDateString('pt-BR', { year: '2-digit', month: '2-digit', day: '2-digit' });
};

export const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      src: "/mockup-4.webp",
      alt: "Brasil Graffiti Book com Personagem"
    },
    {
      src: "/mockup-6.webp",
      alt: "Brasil Graffiti Book Capa"
    },
    {
      src: "/mockup-2.webp",
      alt: "Brasil Graffiti Book Aberto"
    },
    {
      src: "/mockup-3.webp",
      alt: "Brasil Graffiti Book com Letra"
    },

    {
      src: "/mockup-5.webp",
      alt: "Brasil Graffiti Book Folheando"
    },
    {
      src: "/mockup-7.webp",
      alt: "Brasil Graffiti Book Contra-capa"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, images.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5563981032332";
    const message = "Olá! Tenho interesse em comprar mais de 5 unidades do Brasil Graffiti Book.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const getFreteValue = (quantity: number) => {
    switch (quantity) {
      case 1:
        return "R$ 11,80";
      case 2:
        return "R$ 15,80";
      case 3:
        return "R$ 20,00";
      case 4:
      case 5:
        return "R$ 25,90";
      default:
        return null;
    }
  };

  return (
    <Container
      id="pricing-section"
      disableGutters
      sx={{
        pt: [1, 6],
        px: [0, 0],
      }}
    >
      <Stack
        direction={["column", "row"]}
        gap={[2, 4]}
        alignItems={["center", "start"]}
        justifyContent="center"
        sx={{ px: [0, 2] }}
      >
        {/* Slider de Imagens */}
        <Box
          sx={{
            width: ["100vw", "60%"],
            maxWidth: ["none", 800],
            position: "relative"
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              aspectRatio: ["3/2", "4/3"],
              borderRadius: [0, 2],
              overflow: "hidden",
              boxShadow: ["none", "lg"],
              "&:hover .MuiIconButton-root": {
                opacity: 1
              }
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out"
                }}
                width="800"
                height="600"
                loading="lazy"
              />
            ))}

            {/* Controles do Slider */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                bgcolor: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                p: 1,
              }}
            >
              {images.map((_, index) => (
                <FiberManualRecordIcon
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  sx={{
                    cursor: "pointer",
                    fontSize: 12,
                    color: index === currentImageIndex ? "primary.500" : "white",
                    opacity: index === currentImageIndex ? 1 : 0.5,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 0.8
                    }
                  }}
                />
              ))}
            </Stack>

            {/* Botões de Navegação */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                display: { xs: 'none', sm: 'flex' },
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.8)",
                opacity: { xs: 1, sm: 0 },
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "white"
                }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                display: { xs: 'none', sm: 'flex' },
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.8)",
                opacity: { xs: 1, sm: 0 },
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "white"
                }
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Miniaturas */}
          <Stack
            direction="row"
            spacing={[0.5, 2]}
            sx={{
              mt: [1, 2],
              justifyContent: "center"
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  width: 80,
                  height: 60,
                  position: "relative",
                  borderRadius: 1,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "2px solid",
                  borderColor: index === currentImageIndex ? "primary.500" : "transparent",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={`Miniatura ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Informações do Produto */}
        <Box sx={{
          width: ["100%", "40%"],
          maxWidth: ["none", 400],
          alignSelf: "start",
          px: [2, 0]
        }}>

          <Typography
            level="h1"
            sx={{ fontSize: ["24px", "32px"], mb: 1 }}
          >
            Brasil Graffiti Book
          </Typography>

          <Rating
            totalRatings={17}
            totalScore={163}
            maxScore={10}
          />

          <Typography level="body-sm" sx={{ mb: 1, color: "neutral.500" }}>
            PUBLICAÇÃO INDEPENDENTE
          </Typography>

          <Typography level="body-sm" sx={{ mb: 2, color: "success.500" }}>
            Disponibilidade: PRONTA ENTREGA
          </Typography>

          <Typography
            level="h2"
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5
            }}
          >
            <Typography
              level="body-sm"
              sx={{
                textDecoration: "line-through",
                color: "neutral.500",
              }}
            >
              R$ 120,00
            </Typography>
            <Stack direction="row" alignItems={["flex-end", "baseline"]} spacing={1}>
              <Typography
                level="h2"
                color="success"
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap"
                }}
              >
                R$ 93,10
              </Typography>
              <Typography level="body-sm" sx={{ fontWeight: "500" }}>
                no PIX (5% de desconto)
              </Typography>
            </Stack>
          </Typography>

          <Box sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: 2,
            mb: 2
          }}>
            <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
              Cartão de crédito
            </Typography>
            <Typography level="body-sm">
              <b>R$ 98,00</b> em até <b>3x de R$ 32,67</b> sem juros
            </Typography>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            sx={{
              mb: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              overflow: "hidden"
            }}
          >
            <Button variant="outlined" onClick={() => handleQuantityChange(-1)} sx={{ width: 40, border: "none", borderRadius: 0 }}>-</Button>
            <Typography sx={{ px: 2, width: 20, textAlign: "center" }}>{quantity}</Typography>
            <Button variant="outlined" onClick={() => handleQuantityChange(1)} sx={{ width: 40, border: "none", borderRadius: 0 }}>+</Button>
            <Button
              fullWidth
              size="lg"
              color={quantity >= 6 ? "success" : "primary"}
              variant="solid"
              onClick={quantity >= 6 ? handleWhatsAppClick : () => setModalOpen(true)}
              sx={{ borderRadius: 0 }}
            >
              {quantity >= 6 ? "Conversar no WhatsApp" : "Comprar"}
            </Button>
          </Stack>

          {/*           <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 2 }}>
            <Box component="img" src="/pagarme-icon.svg" alt="Pagar.me" sx={{ width: 24, height: 24 }} />
            <Typography level="body-sm" sx={{ color: "text.secondary" }}>
              Pagar.me
            </Typography>
            <Typography level="body-sm" sx={{ color: "grey.100", px: 1 }}>|</Typography>
            <Box component="img" src="/secure-icon.svg" alt="Ambiente Seguro" sx={{ width: 24, height: 24 }} />
            <Typography level="body-sm" sx={{ color: "text.secondary" }}>
              Ambiente Seguro
            </Typography>
          </Stack> */}

          {quantity < 6 && (
            <Box sx={{
              bgcolor: "#f5f5f5",
              p: 2,
              gap: 1,
              display: "flex",
              borderRadius: 1,
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalShippingIcon sx={{ color: 'background.500' }} />
                <Stack direction="column" spacing={0}>
                  <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                    Envio rápido pra todo Brasil
                  </Typography>
                  <Typography level="body-sm">
                    Correios - Previsão {calcularPrevisaoEntrega(9)}
                  </Typography>
                </Stack>
              </Box>
              <Typography level="body-sm" minWidth={65} sx={{ fontWeight: "bold" }}>
                {getFreteValue(quantity)}
              </Typography>
            </Box>
          )}
        </Box>
      </Stack>

      <CheckoutModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        quantity={quantity}
      />
    </Container>
  );
};