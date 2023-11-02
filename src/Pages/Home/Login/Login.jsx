import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()
    const handleLogin= e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            
            const user = {email};
            axios.post('https://car-doctors-server-eight.vercel.app/jwt', user)
            .then(data => {
              console.log(data.data)
              if(data.data.success){
                navigate(location?.state ? location?.state : '/')
              }
            })
        })
        .catch(error => {
            console.log(error)
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
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <button href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center my-8">New to car doctors <Link className="text-orange-500" to='/signup'>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
