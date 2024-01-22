import { getFromLocalStorage } from "@/Helpers/utils/saveData";
import { baseApi } from "../api/baseApi";

const COMPANY_URL = "/company";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`,
};

export const companyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCompany: build.mutation({
      query: ({ data }) => ({
        url: COMPANY_URL,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["data"],
    }),
    companies: build.query({
      query: (arg) => ({
        url: COMPANY_URL,
        method: "GET",
        params: arg,
      }),
    }),
    company: build.query({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateCompany: build.mutation({
      query: (data) => ({
        url: `${COMPANY_URL}/${data.id}`,
        method: "PATCH",
        data,
        headers: headers,
      }),
      invalidatesTags: ["data"],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["data"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddCompanyMutation,
  useCompaniesQuery,
  useCompanyQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
