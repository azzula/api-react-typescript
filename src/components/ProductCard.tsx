import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { formatCurrency } from '../utils/formatCurrency';

interface ProductProps {
    id: string;
    product_name: string;
    category: string;
    price: number;
    discount: number;
}

const ProductCard: React.FC<ProductProps> = ({ id, product_name, category, price, discount }) => {
    const discountedPrice = price - (price * discount) / 100;

    return (
        <Card sx={{ 
            maxWidth: 345, 
            margin: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
            }
        }}>
            <CardMedia
                component="img"
                alt={product_name}
                height="140"
                image={`https://via.placeholder.com/300?text=${product_name}`}
                sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {product_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {category}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {discount > 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', mb: 1 }}>
                            {formatCurrency(price)}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                            {formatCurrency(discountedPrice)}
                        </Typography>
                        <Typography variant="body2" color="success.main" sx={{ fontWeight: 'bold' }}>
                            Diskon {discount}%!
                        </Typography>
                    </Box>
                ) : (
                    <Typography variant="h6" color="primary">
                        {formatCurrency(price)}
                    </Typography>
                )}
                </Box>
            </CardContent>
            <Box sx={{ p: 2, textAlign: 'center' }}>
                <Button variant="contained" color="primary" fullWidth>
                    Add to Cart
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;
