import Link from "next/link"
const Button = ({text , link , btnClass})=>{
    const ButtonClasses  =  btnClass ? btnClass : `btn py-2 px-4 bg-slate-600 text-md text-white inline-block`
    const ButtonText = text ? text : 'click here' ; 
    return(
        <>
        <button className="btn  py-2 px-4 bg-slate-400 text-md text-white block rounded-lg">
            {link  ? <Link   href={link}>GO TO SHOP</Link>
            :
            {ButtonText}}
        </button>
        </>
    )
}
export default Button;