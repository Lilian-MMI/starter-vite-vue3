import ky from "ky";
import { Input } from "ky/distribution/types/options";
import { API_URI } from "~/config";

const hooks = {
  beforeRequest: [
    (_request: any, options: any) => {
      console.log("before request");
      options.headers.set("x-api-key", "1111");
    },
  ],

  afterResponse: [
    (
      request: Input,
      options: any,
      response: { status: number; ok: boolean }
    ) => {
      if (response.status === 401) {
        console.log("UNATHORIZED");
      }
    },
  ],
};

export const kyApi = ky
  .create({
    prefixUrl: API_URI,
    headers: {
      "content-type": "application/json",
    },
  })
  .extend({
    hooks,
  });
