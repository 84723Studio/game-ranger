import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section id="landing-section-1">
        <div className="relative flex flex-col text-center">
          {/* landing bg-video */}

          {/* <video
            className="top-0 h-[50vh] w-full md:h-[100vh] opacity-100 object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sega.co.uk/humankind-game/public/content/media/bg/video/cosmonaut-loop.mp4?VersionId=blKvqbesH7C6EnEjD32tdzXdKvKfrSo9"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video> */}
          <img
            className="top-0 h-[50vh] blur-[4px]  overflow-hidden w-full md:h-[100vh] opacity-100 object-cover"
            src="/imgs/hero_bg2.jpg"
            alt="hero"
          />

          {/* landing bg-video text*/}
          <div className="absolute z-10 w-full top-0 lg:top-[10%] xl:top-1/6">
            <div className="pt-8 font-semibold md:pt-12 text-center mx-auto my-auto text-[3rem] md:text-[6rem] text-white/90 ">
              Civil and Slay
            </div>
            <p className="pt-2 pb-4 md:pt-8 lg:pt-10 text-white/90 text-[1.5rem] lg:text-[3rem] ">
              Discovery, Collect and Battle with web3 collectable cards
            </p>

            <Link
              href="/Game"
              className="rounded-full glass border-zinc-600 border-double border-4 text-zinc-600 font-black item-center mt-6 px-12 py-3 mx-12 text-[1rem] md:text-[3rem]  "
            >
              Game Start
            </Link>
            <span className="block pt-4 text-white text-lg font-bold md:mt-6">
              Learn More →
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
