import React from "react";
import NotificationAlert from "react-notification-alert";

export const showNotification = ({
  notificationAlertRef,
  message,
  place,
  type,
  icon,
  autoDismiss = 5,
}) => {
  notificationAlertRef?.current?.notificationAlert({
    place: place,
    message: message,
    type: type,
    icon: icon,
    autoDismiss: autoDismiss,
  });
};

export const ExtendedErrorAlert = (props) => {
  const { notificationAlertRef } = props;

  return <NotificationAlert ref={notificationAlertRef} />;
};
