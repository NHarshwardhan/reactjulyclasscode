// map()

const users = [
      {id: 1 , name: 'Alice'},
      {id: 2 , name: 'Rose'},
      {id: 3 , name: 'Jasmine'},
      {id: 4 , name: 'Kerry'},
]

const usersNameInUpperCase = users.map(u=>u.name.toUpperCase())

console.log(usersNameInUpperCase)


// filer()

const products = [
    {id: 1, name: 'Laptop', inStock: true},
    {id: 2, name: 'Phone', inStock: false},
    {id: 3, name: 'Tablet', inStock: true},
]

const inStockProducts = products.filter(p=> p.inStock)

console.log(inStockProducts)


// Example: get the names of in-stock products in uppercase

const inStockProductsWithUppercase = products.filter(p=> p.inStock).map(p=>p.name.toUpperCase())

console.log(inStockProductsWithUppercase)


// find()

const foundProduct = products.find((p)=>p.id===1)
console.log(foundProduct)