import { useState } from "react";
// import api from "../utils/api";
import TextField from "./TextField";
import Button from "./Button";
import Select from "./Select";
import { useSnackBarContext } from "../utils/hooks";
// import type { PostCareerEmailPayload } from "../utils/types";
import { ScaleLoader } from "react-spinners";

const CAREERS = [
  "Mowing & Grounds Maintenance",
  "Spring & Fall Cleanups",
  "Landscape Maintenance & Enhancements",
];

const CareersContactForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [career, setCareer] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showSnackbar = useSnackBarContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    showSnackbar({
      title: "Error",
      message: 'Not yet implemented',
      level: "error",
    });
    setIsLoading(false); // temp here for type checking

    // const payload: PostCareerEmailPayload = {
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   career,
    //   comments,
    // };

    // setIsLoading(true);

    // api
    //   .postContact(payload)
    //   .then((res) => {
    //     if (res.status !== 200) {
    //       throw new Error("Something went wrong");
    //     }

    //     showSnackbar({
    //       title: "Success",
    //       message: "Your message has been received!",
    //       level: "success",
    //     });
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPhone("");
    //     setCareer("");
    //     setComments("");
    //   })
    //   .catch(() => {
    //     showSnackbar({
    //       title: "Error",
    //       message: "Something went wrong. Please try again later.",
    //       level: "error",
    //     });
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
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
    <div className="flex flex-col bg-white rounded shadow-lg p-4 my-12 w-full">
      <h3 className="mt-1 mb-3 font-bold text-3xl">Join Us Today!</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <TextField placeholder="First Name" value={firstName} setValue={setFirstName} />
          <TextField placeholder="Last Name" value={lastName} setValue={setLastName} />
          <TextField placeholder="Email" value={email} setValue={setEmail} />
          <TextField
            placeholder="Phone"
            value={phone}
            setValue={handlePhoneChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 my-4">
          <Select
            placeholder="Career of Interest"
            value={career}
            setValue={(selectedOption) => setCareer(selectedOption)}
            options={CAREERS}
          />
        </div>
        <textarea
          className="w-full h-32 p-2 rounded border border-gray-300 focus:border-green-800 focus:outline-none"
          placeholder="Message"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <div className="flex justify-end">
          <Button highlight disabled={isLoading}>
            {isLoading ? (
              <div className="h-6 w-16 flex items-center justify-center">
                <ScaleLoader height="1.5rem" width=".25rem" />
              </div>
            ) : (
              <p className="h-6 w-16">Submit</p>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CareersContactForm;
