import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <nav className="bg-kramer_bg text-white flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="text-white bg-kramer_bg">
          <SheetHeader>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <h1 className=" text-lg font-bold">Logo</h1>
            </Link>
            <div className="grid gap-4 py-6 ">
           
          </div>
          </SheetHeader>
          <SheetDescription>
            <h2>example1</h2>
            <h2>example2</h2>
            <h2>example3</h2>
            <h2>example4</h2>

          </SheetDescription>
         
        </SheetContent>
      </Sheet>
      <Link
        href="#"
        className=" items-center gap-2 hidden lg:flex"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <h1 className="text-white text-lg font-bold">Logo</h1>
      </Link>
      <div className="ml-auto">
        <Link href="" target="_blank" className=" rounded-[10px] px-16 py-2 text-md font-bold duration-300 hover:shadow-[0px_0px_30px_#38bdf8] outline outline-sky-400 hover:bg-sky-400 ">
          JOGAR AGORA!
        </Link>
      </div>
    </nav>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
