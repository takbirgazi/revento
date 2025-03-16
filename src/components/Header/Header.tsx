import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import CustomButton from "../ShareComp/CustomButton/CustomButton";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            slag: "/"
        },
        {
            id: 2,
            title: "About",
            slag: "/about"
        },
        {
            id: 3,
            title: "Reviews",
            slag: "/reviews"
        }
    ]

    return (
        <div className="bg-primaryBg md:relative sticky top-0 z-40">
            <nav className="container mx-auto max-w-3xl lg:py-7 py-3 lg:px-0 px-5 flex items-center justify-between gap-16">
                <div className="flex items-center gap-16">
                    <Link href="/">
                        <figure>
                            <Image className="" src={logo} height={20} width={130} alt="Logo" />
                        </figure>
                    </Link>
                    <div className="hidden md:flex justify-center items-center gap-2">
                        {
                            links.map(menu => <Link className="hover:bg-[#fb8d27] px-5 py-1.5 rounded-2xl transition-all duration-500 text-xs text-white uppercase" href={menu.slag} key={menu.id}>{menu.title}</Link>)
                        }
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <CustomButton link="/" title="Get in touch" />
                </div>
                <MobileMenu links={links} />
            </nav>
        </div>
    );
};

export default Header;