import CharacterCard from "./CharacterCard";
import LandCard from "./LandCard";
import StatInfo from "./StatInfo";

const CardSection = () => {
  const imgList = [
    {
      src: "/imgs/ae.jpg",
      alt: "Einstein",
      title: "Einstein",
      desc: "The Queen of the United Kingdom of Great Britain and Ireland",
      stat: {
        attack: "100",
        defense: "122",
        resource: "342",
        health: "560",
      },
    },
  ];
  return (
    <div className="relative bg-gray-700">
      {/* BG image */}
      <picture className="">
        <img
          className="absolute  brightness-[.85] blur-lg px-4 py-8 w-[100%] h-[100%] object-fill"
          src="/imgs/bg1.jpg"
          alt="card section pattern"
        />
      </picture>

      <div className=" px-12 py-12 md:py-24  grid grid-cols-1 md:grid-cols-2 ">
        {/* upper left */}

        <div className="mx-auto  md:my-4 ">
          {imgList.map((img, index) => (
            <CharacterCard
              src={img.src}
              alt={img.alt}
              key={index}
              title={img.title}
              desc={img.desc}
              attack={img.stat.attack}
              defense={img.stat.defense}
              resource={img.stat.resource}
              health={img.stat.health}
            />
          ))}
        </div>

        {/* upper right */}
        <div className="pt-12 pl-4 z-10 md:border-l-4 border-double border-lime-100">
          <h3 className="text-center text-3xl font-extrabold text-black ">
            With wisdom and randomness
          </h3>
          <p className="text-gray-900 pt-8 font-semibold ">
            some description about the game Create beautiful apps and scalable
            cloud services, faster and easier with the free, open-source
            platform that&apos;s loved by developers and trusted by
            organizations.it is a game that is based on the randomness of the
            dice and the wisdom of the player.some description about the game
            Create beautiful apps and scalable cloud services, faster and easier
            with the free, open-source platform that&apos;s loved by developers
            and trusted by organizations.it is a game that is based on the
            randomness of the dice and the wisdom of the player
          </p>
        </div>

        <div className="z-10 m-auto pt-10 md:px-20 md:mt-24 order-last md:order-none ">
          <h3 className="text-center text-3xl text-black font-bold ">
            Civilization and Culture grows in this land
          </h3>
          <p className="pt-8 text-black ">
            you will be placed on this vast world map you are the first explorer
            to explore the new lands but it seems that the old cities have been
            abandoned by their people there must be some explanation for this,
            but you&apos;ll never know unless you find out what&apos;s really
            going on the main purpose of the game is to try to discover
          </p>
        </div>

        <div className="my-auto z-10 md:pt-24">
          <LandCard />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
