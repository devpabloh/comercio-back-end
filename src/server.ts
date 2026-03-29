interface TypeSomar{
    a: number,
    b: number
}

function somar({a,b}:TypeSomar){
    return a + b
}

console.log(somar({a: 2, b: 3}))