import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = []
        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                board.validateAndPush(location.row + 1, location.col, availableMoves) && board.validateAndPush(location.row + 2, location.col, availableMoves) 
            }
            else {
                board.validateAndPush(location.row + 1, location.col, availableMoves)
            }
        }
        else {
            if (location.row === 6) {
                board.validateAndPush(location.row - 1, location.col, availableMoves) && board.validateAndPush(location.row - 2, location.col, availableMoves) 
            }
            else {
                board.validateAndPush(location.row - 1, location.col, availableMoves)
            }
        }
        return availableMoves;
    }
}
