import { TicTacToe, Square, Status } from './Game';

function RenderSquare(game: TicTacToe, square: Square): HTMLDivElement {
  const elem = document.createElement('div');
  elem.className = 'square';
  elem.innerText = square.getStatusName();

  elem.onclick = () => {
    game.changeStatus(square);
    RenderGame(game);
  };

  return elem;
}

export function RenderGame(game: TicTacToe): void {
  const app = document.getElementById('app');
  app.innerHTML = '';

  game.getSquares().map((square: Square) => {
    const elem = RenderSquare(game, square);

    app.appendChild(elem);
  });
  const reset = document.createElement('button');
  reset.innerText = "reset";
  reset.onclick = () => {
    RenderGame(new TicTacToe())
  }

  app.appendChild(reset);
}
