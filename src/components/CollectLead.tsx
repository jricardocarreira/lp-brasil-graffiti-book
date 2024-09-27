import {
  Button,
  IconButton,
  Input,
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
  Alert,
} from "@mui/joy";
import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import posthog from "posthog-js";

export const CollectLead = () => {
  const [open, setOpen] = useState<boolean>(false);
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
    setOpen(false);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
  };

  return (
    <React.Fragment>
      <IconButton
        id="wpp-button"
        onClick={() => setOpen(true)}
        sx={{
          zIndex: 9999,
          // opacity: open ? 0 : 1,
          position: "fixed",
          bottom: 0,
          right: open ? -200 : 0,
          m: 2,
          p: 1,
          bgcolor: "#25D366",
          borderRadius: 20,
          transition: '200ms',
          "&:hover": {
            bgcolor: "#128c7e",
          },
        }}
        size="lg"
      >
        <WhatsAppIcon sx={{ color: "white", fontSize: 48 }} />
      </IconButton>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ width: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          <Typography level="h2" color="primary" textAlign="center">
            Create Script
          </Typography>
          <Typography level="body-md" textAlign="center" sx={{ mb: 4, mt: 1 }}>
            Se você tem alguma dúvida sobre o curso Create Script, eu posso
            tirar sua dúvida diretamente no Whatsapp. Preencha o formulário e
            aguarde que entrarei em contato.
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
              <Button color="success" size="lg" type="submit">
                Falar com Suporte
              </Button>
            </Stack>
          </form>
        </Sheet>
      </Modal>

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
    </React.Fragment>
  );
};
