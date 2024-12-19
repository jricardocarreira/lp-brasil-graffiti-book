import { useState } from 'react';
import { Modal, Typography, Select, Option, Button, Stack, Box, IconButton } from '@mui/joy';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type CheckoutModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CheckoutModal = ({ open, onClose }: CheckoutModalProps) => {
    const [step, setStep] = useState(1);
    const [quantity, setQuantity] = useState('1');

    const handleClose = () => {
        setStep(1);
        setQuantity('1');
        onClose();
    };

    const handleContinue = () => {
        if (quantity === 'more') {
            window.location.href = 'https://wa.me/5563981032332?text=Olá!%20Tenho%20interesse%20em%20comprar%20mais%20de%205%20unidades%20do%20Brasil%20Graffiti%20Book';
        } else {
            setStep(2);
        }
    };

    const handleCheckout = (withStickers: boolean) => {
        const checkoutLinks = {
            '1': {
                withStickers: 'pl_PGwj0kovWRN7e81FkYIM6LJDEKYAB5n9',
                withoutStickers: 'pl_9VP7owL6YDKZryEHnipaRdMArOEqv1g5'
            },
            '2': {
                withStickers: 'pl_EnNmDRMYkLejADaYSvcVdGabzx17PXvy',
                withoutStickers: 'pl_PgGw2zMDnNev8natxxSEkJLbWZpEB4lO'
            },
            '3': {
                withStickers: 'pl_JdomrPVMNGB4JREtbAiY43gOvbQE6kqy',
                withoutStickers: 'pl_KEoaVpyDrkxmvDMCeuJAnOPw3elbGNz2'
            },
            '4': {
                withStickers: 'pl_6QW7X1xdN3wGVPgUW5CRLPKvEYbr8kj5',
                withoutStickers: 'pl_dDwkZ7OVyxGRm99tlBinmMnJaqNrvz4o'
            },
            '5': {
                withStickers: 'pl_dq0E4Ko5ABmWvJtPXtAGWrjQYwXaGOkn',
                withoutStickers: 'pl_l73XNMGyoq0AbQiYoueQ6kO5ZDwW9zQE'
            }
        };

        const linkId = checkoutLinks[quantity as keyof typeof checkoutLinks][withStickers ? 'withStickers' : 'withoutStickers'];
        const baseUrl = 'https://payment-link.pagar.me';
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
                {step === 1 ? (
                    <>
                        <Typography level="h4" textAlign="center">
                            Quantos livros você deseja?
                        </Typography>
                        <Select
                            value={quantity}
                            onChange={(_, newValue) => setQuantity(newValue as string)}
                        >
                            <Option value="1">Quero apenas um</Option>
                            <Option value="2">2 unidades</Option>
                            <Option value="3">3 unidades</Option>
                            <Option value="4">4 unidades</Option>
                            <Option value="5">5 unidades</Option>
                            <Option value="more">Mais de 5 unidades</Option>
                        </Select>
                        <Button
                            onClick={handleContinue}
                            color={quantity === 'more' ? 'success' : 'primary'}
                        >
                            {quantity === 'more' ? 'Conversar no WhatsApp' : 'continuar'}
                        </Button>
                    </>
                ) : (
                    <>
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
                                variant="outlined"
                                color='neutral'
                                onClick={() => handleCheckout(false)}
                            >
                                {Number(quantity) > 1 
                                    ? `Continuar com apenas os livros`
                                    : `Continuar com apenas o livro`
                                }
                            </Button>
                        </Stack>
                    </>
                )}
            </Stack>
        </Modal>
    );
}; 