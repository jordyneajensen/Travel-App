import Image from "next/image";
import { SetStateAction } from "react";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
    onClick?: () => void;
}

const Button = ({type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
        onClick={onClick}
    >
        {icon && <Image src={icon} alt={'title'} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}
  
export default Button