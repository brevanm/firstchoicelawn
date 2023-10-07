import { useState } from "react";
import TextField from "./TextField";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone);
  };

  const handlePhoneChange = (number: string) => {
    // if (number.length > 10) return;
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
    <div className="flex flex-col gap-y-4 bg-white rounded shadow-lg">
      <h3>Request a Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-4">
          <TextField placeholder="Name" value={name} setValue={setName} />
          <TextField placeholder="Email" value={email} setValue={setEmail} />
        </div>
        <div className="flex gap-x-4">
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
      </form>
    </div>
  );
};

export default Form;
