/*
En este ejercicio, completarás la función store para que retorne un objeto, el cuál contendrá los items de una tienda. Este objeto debe tener los siguientes métodos:

addProduct(product): se encargará de añadir un producto a la tienda. El producto vendrá por parámetros, y será de tipo string

removeProduct(product): debe eliminar el primer producto con el nombre que reciba por parámetros que encuentre.

listProducts(): debe retornar un arreglo con la lista de productos que hayan almacenados

const myStore = store();

myStore.addProduct("phones");
myStore.addProduct("cereal");
myStore.removeProduct("phones");
myStore.addProduct("flour");
myStore.listProducts();
*/

const store = () => {
    let array = []
    
    return {
      addProduct(product) {
        array.push(product)
      },
      removeProduct(product) {
        for(let i = 0; i < array.length; i++){
            if(product == array[i]){
                array.splice(i,1)
                break
            }
        }

      },
      listProducts() {
        return array
      }
    }
  }

const myStore = store()

myStore.addProduct("cereal")
myStore.addProduct("pera")
myStore.addProduct("banano")
myStore.removeProduct("cocacola")



console.log(myStore.listProducts())