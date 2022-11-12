import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
// import Button from "@storino/Button";
const Home = () =>{
    return (
        <>
            <Header/>
            <Layout>
               <PageTitle>welcome to Storino</PageTitle>
               {/* <Button 
                    link="/products"
                    text=""
                    btnClass="">

               </Button> */}
            </Layout>
        </>
    )
}
export default Home;