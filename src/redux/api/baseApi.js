import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1/",
    baseUrl: "https://light-jobs-backend.vercel.app/api/v1/",
  }),
  tagTypes: ["data"],
  endpoints: () => ({}),
});
