import { Link } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-10">
            <img src={img} alt="" />
          </div>
          <div className="card ml-10 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center my-8">Already have an account? <Link className="text-orange-500" to='/login'>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;