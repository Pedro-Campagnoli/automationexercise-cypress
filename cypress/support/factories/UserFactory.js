export function createUser() {
  const UserData = {
    name: "Pedro Campagnoli",
    email: `user_${Date.now()}@gmail.com`,
    title: "Mr.",
    password: "Teste0101@",
    birthDay: "28",
    birthMonth: "June",
    birthYear: "2003",
    newsletter: true,
    specialOffers: true,
    firstName: "Pedro",
    lastName: "Campagnoli",
    company: "DBM Group",
    address: "Rua Pedro Alvares, 71",
    address2: "Rua Maceió, 203",
    country: "India",
    state: "Paraná",
    city: "Curitiba",
    zipcode: "86200-109",
    mobilleNumber: "(44)94231-5123",
  };

  return UserData;
}
