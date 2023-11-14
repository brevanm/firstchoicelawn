export type Service =
  | "Mowing"
  | "Trimming"
  | "Edging"
  | "Blowing"
  | "Weeding"
  | "Mulching"
  | "Fertilizing"
  | "Aerating"
  | "Seeding"
  | "Sodding"
  | "Leaf Removal"
  | "Gutter Cleaning"
  | "Power Washing"
  | "Snow Removal"
  | "Other";

export type PostEmailPayload = {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  pipeline: string;
  comments: string;
};

export type level = "success" | "error";

export type Alert = {
  title: string;
  message: string;
  level: level;
};
