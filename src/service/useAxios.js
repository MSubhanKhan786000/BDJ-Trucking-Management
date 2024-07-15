import { makeUseAxios as useAxiosFactory } from "axios-hooks";
import axios from "axios";
import { useAuthentication } from "layouts/Auth/auth-context/useAuthentication";

export const useAxios = (config, options) => {
  const axiosInstance = axios.create();

  const { token } = useAuthentication();

  axiosInstance.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return useAxiosFactory({
    axios: axiosInstance,
  })(config, options);
};
