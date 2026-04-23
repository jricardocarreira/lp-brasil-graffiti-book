import { Button } from "@mui/joy";

const PICOS_URL = "https://picosdegraffiti.com.br";

type PicosButtonProps = {
  fullWidth?: boolean;
  id?: string;
};

export const PicosButton = ({ fullWidth = false, id }: PicosButtonProps) => {
  return (
    <Button
      id={id}
      fullWidth={fullWidth}
      size="lg"
      color="primary"
      variant="solid"
      component="a"
      href={PICOS_URL}
      sx={{ borderRadius: 0 }}
    >
      Conhecer o Picos de Graffiti
    </Button>
  );
};
