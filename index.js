
let mode = "black"
let board = []

function changeMode(m){
    mode = m
}

for(let j=0; j<19; j++){
    board.push([])
    $(".board").append("<div class='row' id='row-"+j+"'></div>")
    for(let i=0; i<19; i++){
        board[j].push("0")
        
        $("#row-"+j).append("<div class='grid' data-x='"+i+"' data-y='"+j+"'></div>")
    }
}

console.log(board)

$(".grid").click(function(){

    let x = $(this).data("x")
    let y = $(this).data("y")

    console.log(x + " " + y)

    

    if(mode == "remove"){
        $(this).removeClass("b-stone")
        $(this).removeClass("w-stone")

        board[x][y] = "0"

    }else if(mode == "black"){
        $(this).removeClass("w-stone")
        $(this).addClass("b-stone")

        board[x][y] = "B"

    }else{
        $(this).removeClass("b-stone")
        $(this).addClass("w-stone")

        board[x][y] = "W"
    }

    // console.log(board)
})


