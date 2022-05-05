import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = []
        /*
        const firstMoveN = location.row + 2;
        const firstMoveS = location.row - 2;
        const firstMoveE = location.col + 2;
        const firstMoveW = location.col - 2;

        const secondMoveN = location.row + 1;
        const secondMoveS = location.row - 1;
        const secondMoveE = location.col + 1;
        const secondMoveW = location.col - 1;
        
        if (board.isValidSquare(firstMoveN, secondMoveE)) availableMoves.push(Square.at(firstMoveN, secondMoveE));
        if (board.isValidSquare(firstMoveN, secondMoveW)) availableMoves.push(Square.at(firstMoveN, secondMoveW));
        if (board.isValidSquare(firstMoveS, secondMoveE)) availableMoves.push(Square.at(firstMoveS, secondMoveE));
        if (board.isValidSquare(firstMoveS, secondMoveW)) availableMoves.push(Square.at(firstMoveS, secondMoveW));
        
        if (board.isValidSquare(firstMoveE, secondMoveN)) availableMoves.push(Square.at(firstMoveE, secondMoveN));
        if (board.isValidSquare(firstMoveE, secondMoveS)) availableMoves.push(Square.at(firstMoveE, secondMoveS));
        if (board.isValidSquare(firstMoveW, secondMoveN)) availableMoves.push(Square.at(firstMoveW, secondMoveN));
        if (board.isValidSquare(firstMoveW, secondMoveS)) availableMoves.push(Square.at(firstMoveW, secondMoveS));
        */

        availableMoves.push(Square.at(location.row + 2, location.col + 1));
        availableMoves.push(Square.at(location.row + 2, location.col - 1));
        availableMoves.push(Square.at(location.row - 2, location.col + 1));
        availableMoves.push(Square.at(location.row - 2, location.col - 1));

        availableMoves.push(Square.at(location.row + 1, location.col + 2));
        availableMoves.push(Square.at(location.row - 1, location.col + 2));
        availableMoves.push(Square.at(location.row + 1, location.col - 2));
        availableMoves.push(Square.at(location.row - 1, location.col - 2));
    
        
        return availableMoves;
    }
}
