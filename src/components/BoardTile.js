import { useEffect, useState } from "react";

const BoardTile = (props) => {

    const {value, blackTileCoor, updateGame} = props;

    // Cell value
    const rowNum = value[0];
    const columnNum = value[1];
    const color = value[2];

    // Black cell value
    const blackRow = blackTileCoor[0];
    const blackColumn = blackTileCoor[1];

    // Slide-able state
    const [canslide, setSlideable] = useState(false);

    // Check if next to black tile -> Can slide
    useEffect(() => {
        if ((Math.abs(rowNum - blackRow) === 1 && (columnNum === blackColumn)) 
            || 
            (Math.abs(columnNum - blackColumn) === 1 && (rowNum === blackRow))){
                setSlideable(true)
        }
        else{
            setSlideable(false)
        }
    }, [value, blackTileCoor])


    // Onclick
    const handleClick = () => {
        if (canslide){
            updateGame(rowNum, columnNum, color);
        }
    }

    return(
        <div className={canslide ? "board-tile can-slide" : "board-tile"} style={{backgroundColor : color}} onClick={handleClick}>
            {rowNum} - {columnNum}
        </div>
    );
}

export default BoardTile;