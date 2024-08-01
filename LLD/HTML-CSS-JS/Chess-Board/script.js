(function(){
    const rookNextCells = [{row:-1,column: 0,cell : -8},{row:0,column: 1,cell : 1},{row:1,column: 0,cell : 8},{row: 0,column: -1,cell : -1}];    
    const bishopNextCells = [{row:-1,column: -1,cell : -9},{row:-1,column: 1,cell : -7},{row:1,column: 1,cell : 9},{row: 1,column: -1,cell : 7}];

    const board = document.querySelector('.board');
    const squares = document.querySelectorAll('.checkbox');
    const chessPiece = document.querySelector("#chess-piece");
    let revertCellsArray = [];
    let nextCells = rookNextCells;
    
    function revertCells(){
        if(revertCellsArray.length){
            revertCellsArray.forEach(function(revertCell){
                squares[revertCell.cellId-1].style.backgroundColor = revertCell.revertBackgroundColor;
            });
            revertCellsArray = [];
        }
    }

    
    function fillValidCells(row,column,cellId,nextCells){
        const elem = squares[cellId-1];
        revertCellsArray.push({cellId,revertBackgroundColor:elem.style.backgroundColor});
        elem.style.backgroundColor = "red";
        nextCells.forEach(nextCell => {
            let tempRow = row + nextCell.row;
            let tempColumn = column + nextCell.column;
            let tempCellId = cellId + nextCell.cell;
            while(tempRow > 0 && tempRow < 9 && tempColumn > 0 && tempColumn < 9){
                const tempCellElement = squares[tempCellId-1];
                revertCellsArray.push({cellId : tempCellId, revertBackgroundColor : tempCellElement.style.backgroundColor});
                tempCellElement.style.backgroundColor = "red";
                tempRow += nextCell.row;
                tempColumn += nextCell.column;
                tempCellId += nextCell.cell;
            }
        });
    }

    chessPiece.addEventListener("change",(e) =>{
        switch(e.target.value){
            case "rook": nextCells = rookNextCells;
                        break;
            case "bishop": nextCells = bishopNextCells;
                        break;
            case "queen": nextCells = [...rookNextCells,...bishopNextCells];
                        break;
        }
    });

    
    board.addEventListener('click',(e)=>{
        const elem = e.target;
        if(elem.className === "checkbox"){
            const checkboxId = parseInt(elem.getAttribute('id'));
            const parentRowId = elem.parentElement.getAttribute('id');
            const rowNumber = parseInt(parentRowId);
            const columnNumber = parseInt(checkboxId) % 8 || 8;
            revertCells();
            fillValidCells(rowNumber,columnNumber,checkboxId,nextCells);
        }
    });
})();