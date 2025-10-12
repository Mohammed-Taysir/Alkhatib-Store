import { Box } from '@mui/material'
import React from 'react'
import ProductsSection from '../../components/main/products-section/ProductsSection'
import useFetch from '../../custom-hook/useFetch'
import BrandsBanner from '../../components/brands-banner/BrandsBanner';
import MainBanner from '../../components/main-banner/MainBanner';
import { useTranslation } from 'react-i18next';
import Subscribe from '../../components/subscribe-section/Subscribe';
import BannerSection from '../../components/banner-section/BannerSection';
import ProductSkeleton from '../../components/skeleton/ProductSkeleton';
import QuickView from '../../components/product-card/QuickView';


function Home() {
  const {t} = useTranslation();
  const {data:products, isLoading, isError, error} = useFetch('/Customer/Products', 'products');
  
  return (
    <Box component={'main'}>
      <MainBanner />
      <BrandsBanner />
      
      <ProductsSection sectionTitle = {t("Featured Products")} products = {products?.data?.data} isLoading = {isLoading} />

      <BannerSection text = {'Enjoy a Warm Welcome: Exclusive Offer Inside'} subText={"Your first purchase comes with a special surprise – don’t miss out"} img = {'/banner-2.jpg'} />
      <Subscribe />
    </Box>
  )
}

export default Home