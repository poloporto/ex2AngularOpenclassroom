export class Post {

  constructor(public title: string, public content: string, public loveIts: number) {

  }

  getLoveIts() {
    return this.loveIts;
  }
  setLoveIts(loveIts: number){
    this.loveIts = loveIts;
  }

}
