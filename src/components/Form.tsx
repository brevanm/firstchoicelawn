import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import Select from "./Select";
import { sendEmail } from "../utils/email";
// import type { Service } from "../utils/types";

const PIPELINES = [
  "Customer Referral",
  "Internet",
  "Lawn Signs",
  "Truck/Trailer",
  "Advertisement",
  "Family/Friends",
  "Mailings/Letters",
  "Other",
];

const SERVICES = [
  "Mowing & Grounds Maintenance",
  "Spring & Fall Cleanups",
  "Landscape Maintenance & Enhancements",
];

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [pipeline, setPipeline] = useState<string>("");

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

  return (
    <div className="flex flex-col bg-white rounded shadow-lg p-4">
      <h3 className="mt-1 mb-3 font-bold text-3xl">Get A Free Quote Today!</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <Select
            placeholder="Services Requested"
            value={service}
            setValue={(selectedOption) => setService(selectedOption)}
            options={SERVICES}
          />
          <Select
            placeholder="How did you hear about us?"
            value={pipeline}
            setValue={(selectedOption) => setPipeline(selectedOption)}
            options={PIPELINES}
          />
        </div>
        <textarea
          className="w-full h-32 p-2 rounded border border-gray-300 focus:border-green-800 focus:outline-none"
          placeholder="Describe your needs..."
        />
        <div className="flex justify-end">
          <Button
            highlight
            onClick={() => {
              sendEmail();
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
