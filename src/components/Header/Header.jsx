import HeadStorino from "../Head/Head";
import Link from "next/link";
const Header = () =>{
    return(
        <>
           <header className="sticky top-0 shadow-sm shadow-slate-200">
             <div className="container mx-auto p-3 flex items-center">
                <div className="logo w-1/3"><span className="font-bold text-md text-slate-800"><Link href="/">Parsino</Link></span></div>
                <div className="nav-menu w-2/3">
                    <nav>
                        <ul>
                            <li className="mx-2 inline-block"><Link className="p-2 inline-block" href="/">Home</Link></li>
                            <li className="mx-2 inline-block"><Link className="p-2 inline-block" href="/products">products</Link></li>
                            <li className="mx-2 inline-block"><Link className="p-2 inline-block" href="/product/1">products1</Link></li>
                            <li className="mx-2 inline-block"><Link className="p-2 inline-block" href="/contact">contact</Link></li>
                            <li className="mx-2 inline-block"><Link className="p-2 inline-block" href="/about">about</Link></li>
                        </ul>
                    </nav>
                </div>
             </div>
           </header>
        </>
    )
}
export default Header;