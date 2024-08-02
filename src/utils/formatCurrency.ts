export const formatCurrency = (value: number): string => {
    return value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
};
  