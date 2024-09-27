import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";

export const Price = () => {
  return (
    <Container disableGutters sx={{ my: 6, px: [2, 0] }} maxWidth="xs">
      <Card variant="soft" sx={{ p: 4 }}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chip color="neutral" variant="solid" size="lg">
            30% OFF
          </Chip>
          <Typography textAlign="center" sx={{ fontSize: 30 }}>
            De R$6̶9̶7̶
          </Typography>
          <Typography
            textAlign="center"
            color="success"
            sx={{ fontSize: 50, fontWeight: 800, mt: -3, lineHeight: 1.2 }}
          >
            Por R$487
          </Typography>
          <Typography level="body-lg" textAlign="center" sx={{ mt: -1 }}>
            Dê o primeiro passo para criar seus próprios Scripts para After
            Effects
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="https://pay.cakto.com.br/6Apai6N?coupon=CREATEGABRIEL">
              <Button id="button-checkout-price">QUERO ECONOMIZAR R$200</Button>
            </Link>
          </Box>
        </Stack>
      </Card>
    </Container>
  );
};
