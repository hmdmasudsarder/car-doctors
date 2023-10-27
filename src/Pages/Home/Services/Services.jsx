import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {setServices(data)})
    },[])
    return (
        <div className="mt-8">
            <div className="text-center">
                <p className="text-2xl text-orange-400 font-bold">Service</p>
                <p className="text-5xl font-bold">Our Service Area</p>
                <p className="text-muted">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;