const mainData = () => {
    fetch('https://anime-glo-js-c19a9-default-rtdb.firebaseio.com/anime.json')
        .then((res) => {
            console.log(res)
            return res.json() // получаем данные, в виде респонс
        })
        .then((data) => {
            console.log(data.anime) // затем, then отображает данные
        })
}

mainData()