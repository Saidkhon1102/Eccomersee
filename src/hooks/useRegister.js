export function useRegister() {
  const register = async (firstName, lastName, email, password) => {
    console.log(firstName, lastName, email, password);
  };

  return { register };
}
