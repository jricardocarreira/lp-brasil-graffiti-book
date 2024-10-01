import React from "react";
import { IconButton } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const WhatsAppButton = () => {
  const phoneNumber = "5563981032332";
  const message = "Fala, Bug! Quero falar sobre o Brasil Graffiti Book";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <IconButton
      id="wpp-button"
      onClick={handleClick}
      sx={{
        zIndex: 9999,
        position: "fixed",
        bottom: 16,
        right: 16,
        p: 1,
        bgcolor: "#25D366",
        borderRadius: "50%",
        "&:hover": {
          bgcolor: "#128c7e",
        },
      }}
      size="lg"
    >
      <WhatsAppIcon sx={{ color: "white", fontSize: 48 }} />
    </IconButton>
  );
};