import Image from "next/image"
import partner1 from "@/public/assets/partner1.png"
import partner2 from "@/public/assets/partner2.png"
import partner3 from "@/public/assets/partner3.png"
import partner4 from "@/public/assets/partner4.png"
import partner5 from "@/public/assets/partner5.png"
import partner6 from "@/public/assets/partner6.png"

export default function Partners() {
    return (
        <div className="py-[64px] md:pb-[20px] md:mt-[0] flex flex-col justify-center items-center flex-nowrap">
            <p className="text-slate-600 dark:text-slate-200 mb-8">OUR PARTNERS</p>
            <div className="flex-wrap w-full flex md:inline-flex md:flex-nowrap md:overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex-wrap md:flex-nowrap gap-8 md:gap-0 flex items-center justify-center md:justify-start md:[&_li]:mx-8 [&_img]:max-w-none md:animate-infinite-scroll">
                    <li>
                        <Image src={partner1} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner2} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner3} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner4} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner5} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner6} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                </ul>
                <ul className="hidden md:flex md:items-center justify-center md:justify-start md:[&_li]:mx-8 md:[&_img]:max-w-none md:animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <Image src={partner1} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner2} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner3} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner4} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner5} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                    <li>
                        <Image src={partner6} alt="partner1" className="w-[170px] h-[48px]"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}