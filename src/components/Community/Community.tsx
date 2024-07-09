import Link from "next/link";

export function CommunityComponent() {
  return (
    <section className="text-white h-[500px] bg-[url('/assets/hero.svg')] bg-cover bg-center">
      <div className="flex flex-col gap-5 px-8 md:px-2 pt-24 items-start lg:pl-14 ">
        <h1 className="text-3xl font-black md:text-center">SUA CIDADE ROLEPLAY</h1>
        <p className="text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Reiciendis error facere voluptatibus non laudantium praesentium expedita, aut
        </p>
        <div className="flex gap-5">  
            <Link  href="" className=" font-bold hover:shadow-[0px_0px_30px_#38bdf8] outline rounded-[10px] outline-sky-400 hover:bg-sky-400 duration-200 px-8 py-3 text-lg">Discord</Link>
            <Link  href="" className=" font-bold hover:shadow-[0px_0px_30px_#38bdf8] rounded-[10px] bg-sky-400  duration-200 px-8 py-3 text-lg">Entrar na cidade</Link>
        </div>
      </div>
    </section>
  );
}
