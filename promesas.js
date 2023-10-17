fetch("https://dummyjson.com/products/categories")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        data.sort()
        for (let i = 0; i < data.length; i++) {
            console.log(`(${i + 1}) ${data[i]}`)
        }
        

    })
    .catch(function (error) {
        console.error(error)
    })

