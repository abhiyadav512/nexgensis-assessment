import axiosClient from "../utils/axiosClient";

export const LoginUser = async (username, password) => {
  const response = await axiosClient.post(
    "/auth/login",
    { username, password },
    //  { withCredentials: true } if using cookie
  );
  return response.data;
};
