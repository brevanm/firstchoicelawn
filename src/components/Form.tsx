import { useState } from "react";
import TextField from "./TextField";
import type { Service } from "../utils/types";

const SERVICES: Service[] = ["Mowing", "Mulching", "Other"];

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone);
  };

  const handlePhoneChange = (number: string) => {
    number = number.replace(/\D/g, "");

    let newPhoneNumber = number;

    if (number.length >= 7) {
      newPhoneNumber = `(${number.slice(0, 3)}) ${number.slice(
        3,
        6
      )}-${number.slice(6, 10)}`;
    } else if (number.length >= 4) {
      newPhoneNumber = `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }

    setPhone(newPhoneNumber);
  };

  const handleCheckboxChange = (service: Service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded shadow-lg p-4">
      <h3 className="mt-1 mb-3">Request a Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField placeholder="Name" value={name} setValue={setName} />
          <TextField placeholder="Email" value={email} setValue={setEmail} />
          <TextField
            placeholder="Phone"
            value={phone}
            setValue={handlePhoneChange}
          />
          <TextField
            placeholder="Street Address"
            value={address}
            setValue={setAddress}
          />
        </div>
        <div className="flex gap-x-4 my-2 mt-4">
          {SERVICES.map((service) => (
            <div key={`checkbox-${service}`} className="flex gap-x-2">
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <label>{service}</label>
            </div>
          ))}
        </div>
        <textarea
          className="w-full h-32 p-2 my-2 rounded border border-gray-300"
          placeholder="Describe your needs..."
        />
        <button className="btn btn-primary m-2 float-right">Submit</button>
      </form>
    </div>
  );
};

export default Form;
