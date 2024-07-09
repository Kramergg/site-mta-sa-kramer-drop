export  function VideoComponent() {
  return (
    <section className="text-white flex items-center justify-center">
      <div className="flex flex-col pt-10 items-center justify-center gap-10">
        <div className="flex flex-col flex-wrap  items-center justify-center">
          <h1 className="text-3xl font-black">VIDEO DE SUA CIDADE</h1> <br />
          <p className="text-2xl text-justify w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            error facere voluptatibus non laudantium praesentium expedita, aut
          </p>
        </div>
        <div className="flex">
        <iframe className="w-full aspect-video" src="https://youtu.be/NyD7Yjt39CI?si=kzN-kueNhTgQV-kE"></iframe>
        </div>
      </div>
    </section>
  );
}
