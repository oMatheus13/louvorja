export default {
  db(path) {
    if (!path) return "";
    const url = import.meta.env.VITE_URL_DATABASE;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return url + cleanPath;
  },
  file(path) {
    if (!path) return "";
    const url = import.meta.env.VITE_URL_FILES;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    try {
      return url + encodeURI(decodeURI(cleanPath));
    } catch {
      return url + encodeURI(cleanPath);
    }
  },
};
