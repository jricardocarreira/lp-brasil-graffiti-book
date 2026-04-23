import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Modal, Option, Select, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import { PicosButton } from './PicosButton';

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

                <PicosButton fullWidth />

                <Typography fontSize={14} textAlign="center" color="neutral">
                    Novas cópias estarão disponíveis até fevereiro
                </Typography>
            </Stack>
        </Modal>
    );
}; 