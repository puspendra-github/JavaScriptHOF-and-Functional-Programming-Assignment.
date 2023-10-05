const items=[
    {
    name:"Iphone 15",
    category:"Mobile",
    priceInUSD:999
},
{
    name: "Macbook Air",
    category: "Laptops",
    priceInUSD: 1499,
},
{
    name: "Apple Watch",
    category: "Watches",
    priceInUSD: 499,
}

]

const exchangeRate = 80;

function convertToINR(priceInUSD){
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item)=>({
    ...item,
    priceINR: convertToINR(item.priceInUSD)
}))

console.log(itemsInINR)