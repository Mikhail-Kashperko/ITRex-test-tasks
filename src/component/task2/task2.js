import React from 'react'

function Task2 () {

    let maze = [
        ['#','#','#','#','#','#','#','#','#'],
        ['#','+','+','+','#','+','+','+','#'],
        ['#','+','#','+','#','+','#','+','#'],
        ['+','+','#','+','0','+','#','+','#'],
        ['#','#','#','+','#','#','#','#','#'],
        ['#','#','+','+','#','#','#','#','#'],
        ['#','#','+','#','#','#','#','#','#'],
        ['#','#','#','#','#','#','#','#','#'],
    ]

    console.log(maze)

    function checkPath (start, end) {
        maze[start.y][start.x] = 1

        let siblings = getValidSib(start)
        console.log(siblings)

        if(siblings.length > 0) {
            for(let i = 0; i < siblings.length; i++) {
                let current = siblings[i]

                let isSolved = current.x === end.x && current.y === end.y
                let notVisited = maze[current.y][current.x] !==1

                if(isSolved || (notVisited && checkPath(current,end))) {
                    return true
                }
            }
        }
        return false
    }

    function getValidSib(cord) {
        let {x, y} = cord

        let cords = []

        let directions = []

        if(maze[y-1] !== undefined && maze[y-1] === '+') {
            cords.push({ x:x, y:y-1, val: maze[y-1][x] })
            directions.push("top") 
        }
        if(maze[y+1] !== undefined && maze[y+1] === '+') {
            cords.push({ x:x, y:y+1, val: maze[y+1][x] })
            directions.push("bottom") 
 
        }
        if(maze[y][x-1] !== undefined && maze[y][x-1] === '+' ) {
            cords.push({ x:x-1, y:y, val: maze[y][x-1] })
            directions.push('left') 
        }
        if(maze[y][x+1] !== undefined && maze[y][x+1] === '+' ) {
            cords.push({ x:x+1, y:y, val: maze[y][x+1] })
            directions.push('right')  
        }

        console.log(directions)
        return cords
    }


    if(checkPath( {x:4, y:3}, {x:0, y:3})) {
        console.log('The way is founded')
    } else {
        console.log('The way is not founded')
    }    

    return (
        <div style = {{textAlign: 'center', fontSize: '20px'}}>
            task2 - in consol
        </div>
    )
}

export default Task2