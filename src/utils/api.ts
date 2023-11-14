import axois, { AxiosResponse } from "axios";
import { PostEmailPayload } from "./types";

type ApiData = PostEmailPayload;

const baseUrl = "https://us-central1-first-choice-lawn.cloudfunctions.net/api";

const doCall = async (
  url: string,
  method: string,
  data: ApiData
): Promise<AxiosResponse> => {
  const response = axois({
    url: `${baseUrl}${url}`,
    method,
    data,
  });

  return response;
};

export default {
  postContact: (data: PostEmailPayload) =>
    doCall("/contact/email", "POST", data),
};
