// Import stylesheets
import { TicTacToe } from './Game';
import { RenderGame } from './Renderer';
import './style.css';

// Write TypeScript code!
const game = new TicTacToe();
RenderGame(game);