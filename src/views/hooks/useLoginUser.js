import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthentication } from "layouts/Auth/auth-context/useAuthentication";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { usePostService } from "service/usePostService";
import { loginSchema } from "views/forms/schema/loginSchema";
import { showNotification } from "views/forms/utils/ExtendedErrorAlert";

export const useLoginUser = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const notificationAlertRef = useRef(null);

  const { setAuthToken } = useAuthentication();

  const { data, sendRequest } = usePostService({
    route: "accounts/users/token/",
  });

  const onSubmit = async (formFields) => {
    const { username, password } = formFields;
    try {
      await sendRequest({
        data: {
          username,
          password,
        },
      });
    } catch (error) {
      console.log("error", error);

      showNotification({
        notificationAlertRef,
        message: <div>Username or Password not Found</div>,
        place: "tr",
        type: "danger",
        icon: "tim-icons icon-bell-55",
      });
    }
  };

  if (data?.code === 200) {
    setAuthToken(data?.data?.access);
  }

  const registerRs = (fieldName, options) => {
    const registeredField = register(fieldName, options);
    const ref = registeredField.ref;
    delete registeredField.ref;
    return { ...registeredField, innerRef: ref };
  };

  return {
    onSubmit,
    register: registerRs,
    handleSubmit,
    errors,
    control,
    notificationAlertRef,
  };
};
