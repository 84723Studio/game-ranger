const LandCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl scale-75 md:scale-100  md:hover:scale-110 ease-in-out duration-300">
      <figure>
        <img className="h-full" src="/imgs/bridge.jpg" alt="Album" />
      </figure>
      <div className="card-body bg-slate-200 rounded-r-2xl ">
        <h2 className="card-title">Abandoned City </h2>
        <p>
          Location: The city is located far away from any major population
          centers
        </p>
        <div className="card-actions  justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
