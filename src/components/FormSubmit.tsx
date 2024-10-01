import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import posthog from "posthog-js";
import React, { RefObject, useState } from "react";

type Props = { plansRef: RefObject<HTMLDivElement> };

export const FormSubmit = ({ plansRef }: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());

    posthog.identify(email, formJson);

    setSuccessMessage("Em breve entrei em contato!");

    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    <Container
      disableGutters
      sx={{
        pt: [3, 6],
        px: [2, 0],
      }}>
      <div ref={plansRef}>
        <Stack justifyContent="center" alignItems="center">
          <Typography
            level="h2"
            textAlign="center"
            sx={{ fontSize: [24, 32, 40] }}
            maxWidth={[450, 450, 550]}
          >
            Garanta seu
            {' '}
            <Box
              component={'span'}
              display={'inline'}
              sx={{ color: 'primary.500' }}>
              Brasil Graffiti Book
            </Box> {' '}
            por R$93!

          </Typography>
          <Typography
            level="body-md"
            textAlign="center"
            maxWidth={[440]}
            sx={{ mb: [2, 4], mt: 1 }}>
            Leve as ruas na palma da sua mão e<b> desenhe graffiti em qualquer hora e lugar</b>!
          </Typography>
        </Stack>
      </div>

      <form onSubmit={handleSubmit}>
        <Stack spacing={1} px={[0, 12]}>
          <Input
            size="lg"
            placeholder="Nome"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            size="lg"
            placeholder="DDD + Whatsapp"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Input
            size="lg"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button color="success" size="lg" type="submit">
            Fazer Pedido
          </Button>
        </Stack>
      </form>
      {successMessage && (
        <Alert
          sx={{
            alignItems: "flex-start",
            position: "fixed",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            width: "auto",
          }}
          startDecorator={<CheckCircleIcon />}
          variant="soft"
          color="success"
          endDecorator={
            <IconButton
              variant="soft"
              color="success"
              onClick={() => setSuccessMessage(null)}
            >
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <div>Sucesso</div>
            <Typography level="body-sm" color="success">
              {successMessage}
            </Typography>
          </div>
        </Alert>
      )}
    </Container>
  );
};
