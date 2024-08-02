import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchProducts } from './store/slices/productsSlice';
import ProductCard from './components/ProductCard';
import { Container, Grid, Typography } from '@mui/material';

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Container sx={{ marginTop: 4, paddingX: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Produk Kami
            </Typography>
            {loading ? (
                <Typography align="center">Loading...</Typography>
            ) : (
                products && products.length > 0 ? (
                    <Grid container spacing={4} justifyContent="center">
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard
                                    id={String(product.id)}
                                    product_name={product.product_name}
                                    category={product.category}
                                    price={product.price}
                                    discount={product.discount}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography align="center">No products available.</Typography>
                )
            )}
        </Container>
    );
};

export default App;
