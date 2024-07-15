import { toast } from "react-toastify";

export const useToastNotification = () => {
  const showSuccessToast = () => {
    return (
      <div>
        {toast.success("Operation Successful", {
          theme: "colored",
        })}
      </div>
    );
  };

  const showErrorToast = () => {
    return (
      <div>
        {toast.error("An Unknown Error Occurred", {
          theme: "colored",
        })}
      </div>
    );
  };

  const showWarningToast = () => {
    return (
      <div>
        {toast.warn("Warning", {
          theme: "colored",
        })}
      </div>
    );
  };

  return { showSuccessToast, showErrorToast, showWarningToast };
};
