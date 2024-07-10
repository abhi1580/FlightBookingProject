import signup from "./database/signup_data"

const checkUserFromData = (email, password) => {
  console.log(email, password);
  const result = signup.some(user => user.email === email && user.password === password);
  console.log(result);
  return result;
};

export default checkUserFromData;