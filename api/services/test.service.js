import jwt from "jsonwebtoken";

export const verifyUserService = (token) => {
  if (!token) throw new Error("Not Authenticated!");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return payload;
  } catch (err) {
    throw new Error("Token is not Valid!");
  }
};

export const verifyAdminService = (token) => {
  const payload = verifyUserService(token);
  if (!payload.isAdmin) {
    throw new Error("Not authorized!");
  }
  return payload;
};
