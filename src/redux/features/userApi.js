import { baseApi } from "../api/baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query({
      query: (authToken) => ({
        url: `${USER_URL}/my-profile`,
        method: "GET",
        headers: {
          Authorization: authToken,
          // Add other headers if needed
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserProfileQuery } = userApi;
