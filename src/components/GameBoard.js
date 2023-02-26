import { useState } from "react";
import { Stack } from "react-bootstrap";
import BoardTile from "./BoardTile";

const GameBoard = () => {

    // Board state
    const [boardState, setBoard] = useState([
        [[0, 0, 'red'], [0, 1, 'red'], [0, 2, 'white'], [0, 3, 'blue'], [0, 4, 'blue']],
        [[1, 0, 'red'], [1, 1, 'red'], [1, 2, 'white'], [1, 3, 'blue'], [1, 4, 'blue']],
        [[2, 0, 'yellow'], [2, 1, 'yellow'], [2, 2, 'black'], [2, 3, 'yellow'], [2, 4, 'yellow']],
        [[3, 0, 'green'], [3, 1, 'green'], [3, 2, 'white'], [3, 3, 'orange'], [3, 4, 'orange']],
        [[4, 0, 'green'], [4, 1, 'green'], [4, 2, 'white'], [4, 3, 'orange'], [4, 4, 'orange']]
    ])

    // Empty tile state
    const [blackTile, setBlackTile] = useState([2, 2])

    // To update, swap the selected tile with the empty tile
    const updateGame = (row, col, color) => {
        // Update the map
        let map = boardState;
        map[row][col][2] = 'black';
        map[blackTile[0]][blackTile[1]][2] = color;
        setBoard(map);
        // Update the black tile
        setBlackTile([row, col])
    }

    return (
        <div className="game-board">
            {boardState.map(row => (
                <Stack direction="horizontal">
                    {row.map(cell => (
                        <BoardTile value={cell} blackTileCoor={blackTile} updateGame={updateGame} />
                    ))}
                </Stack>
            ))
            }
        </div>
    );
}

export default GameBoard;