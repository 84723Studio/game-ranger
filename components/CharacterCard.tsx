import Image from "next/image";

const CharacterCard = (props: any) => {
  return (
    <>
      {/* <div className="card card-bordered border-pink-400  border-r-8 border-t-8">
        <div className="card card-bordered border-green-600 border-r-8 border-t-8">
          
        </div>
      </div> */}
      <div className="scale-75 md:scale-100  md:hover:scale-110 ease-in-out duration-300">
        <div className="card h-[420px] w-[288px] shadow-lg shadow-slate-700  bg-gradient-to-br from-blue-300 to-teal-300 ">
          <figure>
            <Image
              src={props.src}
              alt={props.alt}
              layout="auto"
              height={200}
              width={288}
            />
          </figure>

          <div className="card-body mt-0 pt-4">
            <div className="card-title text-black">
              {props.title}
              <div className="badge badge-secondary">NEW</div>
            </div>
            <p className="text-green-900 text-xs md:text-base ">{props.desc}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary text-2xs md:text-base">
                Fight!
              </button>
            </div>
          </div>
          {/* Character stat */}
          <div className="grid grid-cols-4 w-full gap-1">
            <div className="badge badge-info gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {props.attack}
            </div>
            <div className="badge badge-success gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {props.defense}
            </div>
            <div className="badge badge-warning gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {props.resource}
            </div>
            <div className="badge badge-error gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {props.health}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
