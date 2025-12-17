/*Class for applications*/
export class Application {
  idProgram: number;
  nameProgram?: string;
  statusProgram: boolean;

  constructor(parameterId: number, parameterName: string, parameterStatus: boolean) {
    this.idProgram = parameterId;
    this.nameProgram = parameterName;
    this.statusProgram = parameterStatus;
  }

}
