const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 },
];

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const youngestUserMsg = (users) => {
  const youngestUser = users
    .filter((user) => user.age >= 18)
    .reduce((currUser, nexUser) =>
      currUser.age < nexUser.age ? currUser : nexUser
    );
  return youngestUser.sex === "male"
    ? `${youngestUser.name} самый молодой и ему ${youngestUser.age} лет`
    : `${youngestUser.name} самая молодая и ей ${youngestUser.age} лет`;
};
// console.log(youngestUserMsg(users));

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/
const filtredUsersBySex = (users, sex) =>
  users.filter((user) => user.sex === sex);
// console.log(filtredUsersBySex(users, "male"));

const filtredMaleUsers = (users) => users.filter(({ sex }) => sex === "male");
// console.log(filtredMaleUsers(users));

const filtredFemaleUsers = (users) =>
  users.filter(({ sex }) => sex === "female");
// console.log(filtredFemaleUsers(users));

/* 
  3. В массиве users найти пользователя по имени Марина
*/
const findUserByName = (users, name) =>
  users.find((user) => user.name === name);
// console.log(findUserByName(users, "Марина"));

const checkUserByName = (users, name) =>
  users.some((user) => user.name === name);
// console.log(checkUserByName(users, "Марина"));

/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

// вот тут не нравится решения
const changeUserAge = (users) => {
  return users.map((user) => {
    if (user.sex === "male" && user.age > 0) {
      user.age = user.age + 10;
      return user;
    }
    if (user.sex === "female" && user.age > 0) {
      user.age = user.age - 5;
      return user;
    }
  });
};
// console.log(changeUserAge(users));

const changeUsersAge = (users) => {
  return users
    .filter((user) => user.age > 0)
    .map((user) => {
      if (user.sex === "male") {
        user.age = user.age + 10;
        return user;
      }
      user.age = user.age - 5;
      return user;
    });
};
// console.log(changeUsersAge(users));
