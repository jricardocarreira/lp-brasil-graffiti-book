import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, IconButton, Modal, Option, Select, Stack, Typography } from '@mui/joy';
import { useState } from 'react';

type CheckoutModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CheckoutModalOutOfStock = ({ open, onClose }: CheckoutModalProps) => {
    const [quantity, setQuantity] = useState('1');
    const [showStickers, setShowStickers] = useState(false);

    const handleClose = () => {
        setQuantity('1');
        onClose();
    };

    const handleContinue = () => {
        if (quantity === 'more') {
            window.location.href = 'https://wa.me/5563981032332?text=Olá!%20Tenho%20interesse%20em%20comprar%20mais%20de%205%20unidades%20do%20Brasil%20Graffiti%20Book';
        } else {
            const checkoutLinks = {
                '1': 'pl_PGwj0kovWRN7e81FkYIM6LJDEKYAB5n9',
                '2': 'pl_EnNmDRMYkLejADaYSvcVdGabzx17PXvy',
                '3': 'pl_JdomrPVMNGB4JREtbAiY43gOvbQE6kqy',
                '4': 'pl_6QW7X1xdN3wGVPgUW5CRLPKvEYbr8kj5',
                '5': 'pl_dq0E4Ko5ABmWvJtPXtAGWrjQYwXaGOkn'
            };

            const linkId = checkoutLinks[quantity as keyof typeof checkoutLinks];
            const checkoutUrl = `https://payment-link.pagar.me/${linkId}`;
            window.location.href = checkoutUrl;
        }
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

                <Typography level="h4" textAlign="center" color='danger'>
                    Estamos sem estoque no momento
                </Typography>

                <Typography fontSize={14} textAlign="center">
                    Garanta o seu antecipadamente e
                    {' '}
                    <Box
                        component="span"
                        fontWeight={600}
                    >
                        receba gratuitamente
                    </Box>
                    {' '}
                    <Box
                        component="span"
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: 'primary.main'
                        }}
                        onClick={() => setShowStickers(!showStickers)}
                    >
                        adesivos exclusivos
                    </Box>
                    {' '}(tamanho A4) inspirados na cena do graffiti brasileiro
                </Typography>

                {showStickers && (
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
                )}

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
                    {quantity === 'more' ? 'Conversar no WhatsApp' : 'Garantir antecipado'}
                </Button>

                <Typography fontSize={14} textAlign="center" color="neutral">
                    Novas cópias estarão disponíveis até fevereiro
                </Typography>
            </Stack>
        </Modal>
    );
}; 