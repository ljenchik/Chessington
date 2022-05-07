import Piece from './piece';
import Square from '../square';


export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = []

        board.validateAndPush(location.row + 1, location.col, availableMoves);
        board.validateAndPush(location.row - 1, location.col, availableMoves);
        board.validateAndPush(location.row, location.col + 1, availableMoves);
        board.validateAndPush(location.row, location.col - 1, availableMoves);

        board.validateAndPush(location.row + 1, location.col + 1, availableMoves);
        board.validateAndPush(location.row - 1, location.col - 1, availableMoves);
        board.validateAndPush(location.row + 1, location.col - 1, availableMoves);
        board.validateAndPush(location.row - 1, location.col + 1, availableMoves);
        
        return availableMoves;
    }
}
        
        
    
