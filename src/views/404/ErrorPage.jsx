import React from 'react'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
const ErrorPage = () => {
  return (
    <>
        <Header />
        <Layout>
            <PageTitle>We can't find anything</PageTitle>
        </Layout>
        <Footer />
    </>
  )
}

export default ErrorPage