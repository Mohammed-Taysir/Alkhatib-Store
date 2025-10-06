import { Box } from '@mui/material'
import React from 'react'
import ProductsSection from '../../components/main/products-section/ProductsSection'
import useFetch from '../../custom-hook/useFetch'
import BrandsBanner from '../../components/brands-banner/BrandsBanner';
import MainBanner from '../../components/main-banner/MainBanner';
import { useTranslation } from 'react-i18next';
import Subscribe from '../../components/subscribe-section/Subscribe';

function Home() {
  const {t} = useTranslation();
  const {data:products, isLoading, isError, error} = useFetch('/Customer/Products', 'products');
  console.log(products);
  console.log(products)
  return (
    <Box component={'main'}>
      <MainBanner />
      <BrandsBanner />
      <ProductsSection sectionTitle = {t("Featured Products")} products = {products?.data?.data} isLoading = {isLoading} />
      <Subscribe />
    </Box>
  )
}

export default Home