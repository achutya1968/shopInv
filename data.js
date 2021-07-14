
const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/farmTable', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   console.log("mongo connection open!!!")
})
.catch(err=>{console.log('Error')
      console.log(err)
})

/*const p = new Product({
    name:"Oranges",
    price:1.49,
    category:"fruit"
})
p.save()
.then(p =>{
    console.log(p)
})
.catch(err =>{
  console.log(err)
})*/

const myProducts = [
  {
      name:"Potatoes",
      price:1.00,
      category:"vegetable"
  },
  {
    name:"Melon",
      price:4.99,
      category:"fruit"
  },
  {
    name:'Watermelon',
    price:3.99,
    category:'fruit'
  },
  {
    name:"eggplant",
    price:1.99,
    category:"vegetable"
  },
  {
    name:"Whole milk",
    price:4.99,
    category:"dairy"
  },{
  name:"Cheddar",
      price:3.99,
      category:"dairy"
  }
]

Product.insertMany(myProducts)
.then(data =>{
  console.log(data)
})
.catch(err=>{
  console.log(err)
})