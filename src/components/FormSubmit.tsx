import {
  Button,
  IconButton,
  Input,
  Stack,
  Typography,
  Alert,
  Container,
} from "@mui/joy";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import posthog from "posthog-js";

export const FormSubmit = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
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
    <Container disableGutters sx={{ mt: 6, px: [2, 0] }}>
      <Typography level="h2" color="primary" textAlign="center">
        Fazer Pedido
      </Typography>
      <Typography level="body-md" textAlign="center" sx={{ mb: 4, mt: 1 }}>
        Textinho menor aqui
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
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
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Endereço"
            name="address"
            type="address"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
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
