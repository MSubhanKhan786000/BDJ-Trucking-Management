export const useAuthConfig = () => {
  const getToken = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

  const setToken = (value) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 1 * 60 * 60 * 1000);
    document.cookie = `token=${value};expires=${expires.toUTCString()};path=/`;
  };

  const deleteToken = () => {
    document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  };

  return { deleteToken, getToken, setToken };
};
