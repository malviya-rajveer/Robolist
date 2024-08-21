
import Link from "next/link";
import Container from "./global/container";
import { AppBar } from "./objects/Appbar";

const Navbar = async () => {

    return (
        <header className="sticky top-0 z-50 border-b border-slate-600 transition-colors border-fd-foreground/10 bg-fd-background/60 backdrop-blur-md h-14">
            <Container reverse>
                <div className="flex items-center h-full mx-auto md:max-w-screen-2xl gap-[55rem] sm:gap-[7rem] ">
                    <div className="flex items-start pl-16">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-lg font-medium">
                                Robolist
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-9">
                            <Link href="" className="hover:text-foreground/80 text-sm">Models</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Parts</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Blog</Link>
                        </ul>
                    </nav>
                    <AppBar></AppBar>       
                </div>
            </Container>
        </header>
    )
};

export default Navbar