export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
  }).format(price)
}
