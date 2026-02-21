export const loginUser = async (email, password) => {

  if (email === "admin@gmail.com" && password === "123456") {
    return {
      user: { name: "Admin", email, role: "admin" },
      token: "admin-token"
    };
  }

  if (email === "user@gmail.com" && password === "123456") {
    return {
      user: { name: "User", email, role: "user" },
      token: "user-token"
    };
  }

  throw new Error("Invalid credentials");
};
