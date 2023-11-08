import { Resend } from "resend";

const resend = new Resend("re_T4qnykUf_E5euR62pfWneV8yNGueB2MnT");

export const sendEmail = () => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "brevanm@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
};
