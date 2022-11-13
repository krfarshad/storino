import React from 'react'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import ProductsList from './ProductsList/ProductsList'
const ProductsPage = () => {
  return (
    <>
        <Header />
        <Layout >
            <PageTitle>All products</PageTitle>
            <ProductsList />
        </Layout>
        <Footer />
    </>
  )
}

export default ProductsPage