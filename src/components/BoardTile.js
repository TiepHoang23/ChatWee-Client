const BoardTile = (props) => {

    const {value} = props;
    const rowNum = value[0];
    const columnNum = value[1];
    const color = value[2];

    return(
        <div className="board-tile" style={{backgroundColor : color}}>
            {rowNum} - {columnNum}
        </div>
    );
}

export default BoardTile;