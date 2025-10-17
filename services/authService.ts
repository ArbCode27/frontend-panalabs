export const registerNewUser = async (body: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  const res = await fetch("https://api.example.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
