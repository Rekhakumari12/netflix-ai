const Home = () => {
  return (
    <div className="z-1 text-lg">
      <div className="flex-col -z-10">
        <iframe
          className="w-screen aspect-video hover:cursor-default"
          src="https://www.youtube-nocookie.com/embed/hXzcyx9V0xw?si=_1wAsRxjIz1PaIgr&controls=0&autoplay=1&mute=1&showinfo=0&rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
