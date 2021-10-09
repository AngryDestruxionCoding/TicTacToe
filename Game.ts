export enum Status {
  x,
  o,
  empty,
}

export class Square {
  public status = Status.empty;

  public getStatusName(): string {
    switch (this.status) {
      case Status.empty:
        return '';
      case Status.o:
        return 'O';
      case Status.x:
        return 'X';
    }
  }

  public changeStatus(status: Status) {
    this.status = status;
  }
}

export class TicTacToe {
  private squares: Array<Square> = [];

  private turnPlayer: Status;

  constructor() {
    this.squares = Array(9)
      .fill(undefined)
      .map(() => new Square());
    this.turnPlayer = Status.x;
  }

  public changeStatus(square: Square): void {
    if (square.status !== Status.empty) {
      return;
    }

    square.changeStatus(this.turnPlayer);
    this.checkForAWin(this.turnPlayer);
    this.turnPlayer = this.turnPlayer === Status.x ? Status.o : Status.x;
  }

  // @todo Implement the logic to check if there is a winner or not.
  private checkForAWin(status: Status) {}

  public getSquares(): Array<Square> {
    return this.squares;
  }
}
