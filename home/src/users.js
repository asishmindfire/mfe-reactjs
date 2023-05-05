const BASE_URL = "https://reqres.in/";

export const getUsers = () => {
  return [
    {
      id: 1,
      name: "asish",
    },
    {
      id: 2,
      name: "marvel",
    },
  ];
  // fetch(`${BASE_URL}api/users/`).then((res) => res.json());
};
