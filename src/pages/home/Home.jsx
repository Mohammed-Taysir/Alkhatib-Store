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
import Testimonials from '../../components/testimonials/Testimonials';
import banner from '../../assets/banner-2.jpg'


function Home() {
  const {t} = useTranslation();
  const {data:products, isLoading, isError, error} = useFetch('/Customer/Products', 'products');
  
  return (
    <Box component={'main'}>
      <MainBanner />
      <BrandsBanner />
      
      <ProductsSection sectionTitle = {t("Featured Products")} products = {products?.data?.data} isLoading = {isLoading} />

      <BannerSection text = {t('bannerDiscountTitle')} subText={t('bannerDiscountSubTitle')} img = {banner} />
      <Testimonials />
      <Subscribe />
    </Box>
  )
}

export default Home