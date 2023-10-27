import parson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
          <img
            src={parson}
            className=" rounded-lg shadow-2xl w-3/4"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2  rounded-lg border-8 border-white shadow-2xl"
          />
          </div>
          <div className="w-1/2">
            <p className="text-3xl font-bold text-orange-500 mb-2">About Us</p>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
