function artistasSolistas(artistasArray){
    return artistasArray.filter(a => a.solista)
}

console.log(artistasSolistas(artistas))

function artistasPorEdad(artistasArray, edad){
    return artistasArray.filter(a => a.edad == edad)
}

console.log(artistasPorEdad(artistas, 23))

function cantidadDeArtistasPorIntrumento(artistasArray){
    let map = new Map()
    artistasArray.forEach(element => {
        map.set(element.instrumento, (map.get(element.instrumento) || 0) + 1)
    })
    return map
}

console.log(cantidadDeArtistasPorIntrumento(artistas))

