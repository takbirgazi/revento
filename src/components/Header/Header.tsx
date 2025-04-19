import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-white.png";
import CustomButton from "../ShareComp/CustomButton/CustomButton";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
    const links = [
        {
            id: 1,
            title: "About",
            slag: "/about"
        },
        {
            id: 2,
            title: "Service",
            slag: "/service"
        },
        {
            id: 3,
            title: "Pricing Plan",
            slag: "/pricing"
        },
        {
            id: 4,
            title: "Contact Us",
            slag: "/contact"
        },
    ]

    return (
        <div className="bg-primaryBg sticky top-0 z-40">
            <nav className="container mx-auto max-w-[1280px] lg:py-7 py-3 px-5 flex items-center justify-between gap-16">
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <figure>
                            <Image className="" src={logo} height={20} width={130} alt="Logo" />
                        </figure>
                    </Link>
                    <div className="hidden md:flex justify-center items-center gap-2">
                        {
                            links.map(menu => <div key={menu.id}>
                                {
                                    <Link className="hover:bg-[#fb8d27] px-5 py-1.5 rounded-2xl transition-all duration-500 text-xs text-white whitespace-nowrap uppercase" href={menu.slag}>{menu.title}</Link>
                                }
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <CustomButton link="/contact" title="Get in touch" />
                </div>
                <MobileMenu links={links} />
            </nav>
        </div>
    );
};

export default Header;