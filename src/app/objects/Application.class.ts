/*Class for applications*/
export class App {
  idProgram: number;
  nameProgram?: string;
  idDoor: number;

  constructor(parameterId: number, parameterName: string, parameterIdDoor: number) {
    this.idProgram = parameterId;
    this.nameProgram = parameterName;
    this.idDoor = parameterIdDoor;
  }

}
