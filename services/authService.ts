export const registerNewUser = async (body: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  const res = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
