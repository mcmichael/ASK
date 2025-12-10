//Class User

export class User {
  idUser: number;
  firstNameUser: string;
  lastNameUser: string;
  statusUser: boolean;

  constructor(parameterIdUser: number, parameterFirstNameUser: string, parameterLastNameUser: string, parameterStatutUser: boolean) {
    this.idUser = parameterIdUser;
    this.firstNameUser = parameterFirstNameUser;
    this.lastNameUser = parameterLastNameUser;
    this.statusUser = parameterStatutUser;
  }
}
  function showUSer(user:User, date:Date) {
    console.log(`Hello ${user}, today is ${date.toDateString()}!`)
}
 

