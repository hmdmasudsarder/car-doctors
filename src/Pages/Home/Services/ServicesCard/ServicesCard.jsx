const ServicesCard = ({ service }) => {
    const {img, title, price} = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Title: {title}</h2>
          <p className="text-xl text-orange-400">Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
