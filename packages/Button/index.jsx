import Link from "next/link"
const Button = ({text , link , btnClass})=>{
    const ButtonClasses  =  btnClass ? btnClass : 'btn py-2 px-4 text-slate-600 text-md text-white'
    const ButtonText = text ? text : 'click here' ; 
    return(
        <>
        <button className={ButtonClasses}>
            {link ? <Link href={link}>{ButtonText}</Link>
            :
            {ButtonText}}
        </button>
        </>
    )
}
export default Button;