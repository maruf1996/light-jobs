import { jwtDecode } from "jwt-decode";

export const decodedToken = (token) => {
  if (token) {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  }
};
