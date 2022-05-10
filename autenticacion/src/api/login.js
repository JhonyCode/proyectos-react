export const postLogin = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        email: "text@text.com",
        displayName: "Juanito",
      });
    }, 3000);
  });
};
