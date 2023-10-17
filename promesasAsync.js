 //const process = require("process")

 //const operacion = process.argv[2]
 
 async function consulta (patch) {

    let response = await fetch("https://dummyjson.com/" + patch)

    let result = await response.json()

    const mujeres = result.users
                  .filter((mujer) => {
                      return  mujer.gender == "female"
                  })
                  

    const hombres = result.users
                  .filter((hombre) => {
                    return  hombre.gender == "male"
                  })
                  



    try {
      if (patch == "products") {
      console.log("PRODUCTOS");

      for (let i = 0; i < result.products.length; i++) {
        
        console.log(`(${i + 1}) ${result.products[i].title} - ${result.products[i].category} - ${result.products[i].price}`)
    }
    }if (patch == "users") {
      console.log("USUARIOS MUJERES");

      for (let i = 0; i < mujeres.length; i++) {
        
        console.log(`(${i + 1}) ${mujeres[i].firstName} - ${mujeres[i].lastName}`)
    }

    console.log("USUARIOS HOMBRES");

      for (let i = 0; i < hombres.length; i++) {
          
        console.log(`(${i + 1}) ${hombres[i].firstName} - ${hombres[i].lastName}`)
    }
    }if (patch == "comments") {
      console.log("COMENTARIOS");

      for (let i = 0; i < result.comments.length; i++) {
        
        console.log(`(${i + 1}) - ${result.comments[i].user.username} - ${result.comments[i].body} - ${result.comments[i].postId}`)
    }
    }if (patch == "products/categories") {
      console.log("CATEGORIAS");
      for (let i = 0; i < result.length; i++) {
        console.log(`(${i + 1}) ${result[i]}`)
    }
    }
    } catch (error) {
      console.log(error);
    }

    
}
 consulta("users")