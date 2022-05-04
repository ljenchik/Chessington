import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = []
       
        availableMoves.push(Square.at(location.row + 2, location.col + 1))
        availableMoves.push(Square.at(location.row + 2, location.col - 1))
        availableMoves.push(Square.at(location.row - 2, location.col + 1))
        availableMoves.push(Square.at(location.row - 2, location.col - 1))

        availableMoves.push(Square.at(location.row + 1, location.col + 2))
        availableMoves.push(Square.at(location.row - 1, location.col + 2))
        availableMoves.push(Square.at(location.row + 1, location.col - 2))
        availableMoves.push(Square.at(location.row - 1, location.col - 2))
        
        console.log(availableMoves);
        return availableMoves;
    }
}
