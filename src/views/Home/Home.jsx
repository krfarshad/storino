import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import Link from "next/link";
const Home = () =>{
    return (
        <>
            <Header/>
            <Layout>
               <PageTitle>welcome to Storino</PageTitle>
               <Link className="btn  py-2 px-4 bg-slate-400 text-md text-white inline-block rounded-lg" href='/products'>GO TO SHOP</Link>
            </Layout>
        </>
    )
}
export default Home;