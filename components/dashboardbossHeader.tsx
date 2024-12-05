import Image from "next/image";

interface Props{
    className?: string;
}
export const DashboardBossHeader: React.FC<Props> = ({className}) =>{
    return(
        <header>
            <Image src="./Group.png" alt="logo" />
        </header>
    )
}