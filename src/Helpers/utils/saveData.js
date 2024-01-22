export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  try {
    localStorage.setItem(key, token);
  } catch (error) {
    console.error("Error setting item in localStorage:", error);
  }
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting item from localStorage:", error);
    return "";
  }
};
