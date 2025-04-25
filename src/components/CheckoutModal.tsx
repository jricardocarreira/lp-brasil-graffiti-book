import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, IconButton, Modal, Stack, Typography } from '@mui/joy';

type CheckoutModalProps = {
    open: boolean;
    onClose: () => void;
    quantity: number;
};

export const CheckoutModal = ({ open, onClose, quantity }: CheckoutModalProps) => {

    const handleClose = () => {
        onClose();
    };

    const handleCheckout = (withStickers: boolean) => {
        const checkoutLinks = {
            1: {
                withStickers: 'pl_ykQ6jNgd72aVpOGF97Imp0nKXZ4Al1R3',
                withoutStickers: 'pl_6MmL5kg8WRa2n1aFPZUBQXlEJAndB9vq'
            },
            2: {
                withStickers: 'pl_7lGzpor9aVZe8XYsBVfKYegM5LX8Om0w',
                withoutStickers: 'pl_X6Wp5EDG0nd28DYc0Bsz3241BoVJvaYL'
            },
            3: {
                withStickers: 'pl_6X2OLK0b1xMEzD0SxtynvljwGyaPVZWR',
                withoutStickers: 'pl_2zwY84byxDQrbJlsJDspDrZKRAOg6pqa'
            },
            4: {
                withStickers: 'pl_AEGN2MoO1L07gvvfmMsRDV3qPn9bJyRW',
                withoutStickers: 'pl_lgoxPeBrnkGZWrgSLxf8x17wzRD42X8p'
            },
            5: {
                withStickers: 'pl_dApxQ8z9WaZ2674XUwUKnoXkGM40e7gj',
                withoutStickers: 'pl_MKR08VA37B41mwBCPUkgndQmPzjxLrW2'
            }
        };

        const linkId = checkoutLinks[quantity as keyof typeof checkoutLinks][withStickers ? 'withStickers' : 'withoutStickers'];
        const baseUrl = 'https://payment-link-v3.pagar.me';
        const checkoutUrl = `${baseUrl}/${linkId}`;
        window.location.href = checkoutUrl;
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Stack spacing={2} sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 8, 
                maxWidth: 400,
                position: 'relative' 
            }}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1
                    }}
                >
                    <CloseRoundedIcon />
                </IconButton>
                <Typography level="h4" textAlign="center">
                    Combo exclusivo! 🔥
                </Typography>
                <Box
                    component="img"
                    src="/combo-stickers.webp"
                    alt="Folhas de adesivos exclusivos do graffiti brasileiro"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 4,
                        objectFit: 'cover',
                        paddingX: 4
                    }}
                />
                <Typography fontSize={14} textAlign="center">
                    Adicione adesivos exclusivos (tamanho A4)
                    inspirados na cena do graffiti brasileiro por apenas
                    R$20,00!
                </Typography>
                <Stack spacing={1}>
                    <Button onClick={() => handleCheckout(true)}>
                        Aproveitar essa oferta
                    </Button>
                    <Button
                        variant="plain"
                        color="neutral"
                        onClick={() => handleCheckout(false)}
                        sx={{
                            border: 'none',
                            color: 'text.secondary',
                            textDecoration: 'underline',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        {quantity > 1 
                            ? `Continuar com apenas os livros`
                            : `Continuar com apenas o livro`
                        }
                    </Button>
                </Stack>
            </Stack>
        </Modal>
    );
}; 