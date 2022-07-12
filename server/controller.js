//set up module with function signatures: getHouses, deleteHouses, createHouses, updateHouses

const houses = require("./db.json");
let globalId = 4;

module.exports = {
    getHouses: (req,res) => res.status(200).send(houses),
    deleteHouses: (req,res) => {
        let {id} = req.params
        let index = houses.findIndex(elem => elem.id === +id)
        if(index === -1) {
            res.status(400).send('not found')
        } else {
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
    }, 
    createHouses: (req,res) => {
        const {address, price, imageURL} = req.body;
        const newHouse = {
            id: globalId,
            address,
            price: +price,
            imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses)
        globalId++;
    },
    updateHouses: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price  < 10000 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        }
        else if (type === 'plus'){
        houses[index].price+= 10000
        res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price-= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}

// updateHouse:(req,res) => {
//     let {id} = req.params
//     let {type} = req.body
//     let index = houses.findIndex(elem => +elem.id === +id)

//     if (houses[index].price <= 10000 && type === minus){
//       houses[index].price = 0 
//       res.status(200).send(houses)
//     }else if (type === plus) {
//       house[index].price += 10000
//       res.status(200).send(houses)
//     }else if (type === 'minus') {
//       houses[index].price -= 10000
//       res.status(200).send(houses)
//     }else {
//       res.status(200).send(houses);
//     }
//   }
// }