import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassowrd = "Hunter123";
const passwordHash = "$2b$14$cJI3ehRV.XxwJbyHzgF0O.Hc7Uf0zKYSus5IAlxncXSpF.VAbpNze"

const hashedPassword = await bcrypt.hash(plaintextPassowrd, saltRounds);

console.log(hashedPassword);

const isSame = await bcrypt.compare(plaintextPassowrd, passwordHash);

console.log(isSame);