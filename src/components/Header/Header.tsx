import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import CustomButton from "../ShareComp/CustomButton/CustomButton";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
    const links = [
        {
            id: 1,
            title: "All Pages",
            slag: "/",
            subMenu: [
                {
                    id: 1,
                    title: "Home",
                    slag: "/"
                },
                {
                    id: 2,
                    title: "Blog details",
                    slag: "/blog-details"
                },
                {
                    id: 3,
                    title: "Service Details",
                    slag: "/service-details"
                },
                {
                    id: 4,
                    title: "Pricing Plan",
                    slag: "/pricing"
                },
                {
                    id: 5,
                    title: "Our Team",
                    slag: "/our-team"
                },
                {
                    id: 6,
                    title: "Privacy Policy",
                    slag: "/privacy-policy"
                },
                {
                    id: 7,
                    title: "Work",
                    slag: "/work"
                },
                {
                    id: 8,
                    title: "Service",
                    slag: "/service"
                },
            ]
        },
        {
            id: 2,
            title: "About",
            slag: "/about"
        },
        {
            id: 3,
            title: "Reviews",
            slag: "/testimonial"
        }
    ]

    return (
        <div className="bg-primaryBg md:relative sticky top-0 z-40">
            <nav className="container mx-auto max-w-3xl lg:py-7 py-3 lg:px-0 px-5 flex items-center justify-between gap-16">
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
                                    menu?.subMenu ?
                                        <div className="relative group">
                                            <p className="hover:bg-[#fb8d27] px-5 py-1.5 rounded-2xl transition-all duration-500 text-xs text-white whitespace-nowrap uppercase cursor-pointer">{menu.title}</p>
                                            <div className="py-5 absolute">
                                                <div className="group-hover:grid hidden group-open:grid min-w-[450px] bg-white rounded-2xl grid-cols-3 gap-2 p-4">
                                                    {
                                                        menu?.subMenu.map(submenu => <Link key={submenu.id} className="hover:text-[#fb8d27] px-2 py-1.5 transition-all duration-500 text-xs text-black whitespace-nowrap uppercase" href={submenu.slag}>{submenu.title}</Link>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <Link className="hover:bg-[#fb8d27] px-5 py-1.5 rounded-2xl transition-all duration-500 text-xs text-white whitespace-nowrap uppercase" href={menu.slag}>{menu.title}</Link>
                                }
                            </div>
                            )
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