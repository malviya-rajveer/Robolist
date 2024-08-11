 
import Link from "next/link";
import Container from "./global/container";

const Navbar = async () => {

    return (
        <header className="sticky top-0 z-50 border-b border-slate-600 transition-colors border-fd-foreground/10 bg-fd-background/60 backdrop-blur-md h-14">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-lg font-medium">
                                Robolist
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#" className="hover:text-foreground/80 text-sm">Models</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Parts</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Blog</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                          <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          signin
        </span>
      </button>

      <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          signout
        </span>
      </button>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar