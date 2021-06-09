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
        maze[start.y][start.x] = 0

        let siblings = getValidSib(start)
        console.log(siblings)

        if(siblings.length > 0) {
            for(let i = 0; i < siblings.length; i++) {

                let directions = []

                let current = siblings[i]

                let isSolved = current.x === end.x && current.y === end.y
                let notVisited = maze[current.y][current.x] !==0

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

        if(maze[y-1] !== undefined) {
            cords.push({ x:x, y:y-1, val: maze[y-1][x] })
        }
        if(maze[y+1] !== undefined) {
            cords.push({ x:x, y:y+1, val: maze[y+1][x] }) 
        }
        if(maze[y][x-1] !== undefined) {
            cords.push({ x:x-1, y:y, val: maze[y][x-1] }) 
        }
        if(maze[y][x+1] !== undefined ) {
            cords.push({ x:x+1, y:y, val: maze[y][x+1] }) 
        }

        return cords.filter(el => el.val === '+')
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