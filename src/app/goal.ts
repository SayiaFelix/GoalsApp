export class Goal {
  showDescription: boolean;
//         id: number | undefined;
//         name: string | undefined;
//        description!: string;
//         showDescription: boolean;

  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}

