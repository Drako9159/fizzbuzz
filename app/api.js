const ExplorerService = require("../lib/services/ExplorerService");
const Reader = require("../lib/utils/reader.js");
const express = require("express");
const FizzbuzzService = require("../lib/services/FizzbuzzService.js");

const explorers = Reader.readJsonFile("../explorers.json");
const filter0 = ExplorerService.filterByMission(explorers, "node");
const filter1 = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const filter2 = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

const fizzBuzz = filter0.map((e) => FizzbuzzService.applyValidationInExplorer(e));

const app = express()
app.use(express.json())
const port = 3000
app.listen(port, () => {
    console.log(`Servidor is arrived ${port}`)
    console.log("Lista completa de explorers en localhost:3000/v1/explorers")
    console.log("Lista de explorers en node localhost:3000/v1/explorers/node")
    console.log("Cantidad de explorers en node localhost:3000/v1/explorers/amount/node")
    console.log("Usernames en node localhost:3000/v1/explorers/usernames/node")
    console.log("Operación fizzbuzz:3000/v1/explorers/node/fizzbuzz")
})
//GET
app.get("/v1/explorers", (req, res) => {
    console.log(`Explorers arrived ${new Date()}`)
    res.status(201).json(explorers)
})
app.get("/v1/explorers/node", (req, res) => {
    console.log(`Explorers in node ${new Date()}`)
    res.status(200).json(filter0)
})
app.get("/v1/explorers/amount/node", (req, res) => {
    console.log(`Amount explorers node ${new Date()}`)
    res.status(200).json(filter1)
})
app.get("/v1/explorers/usernames/node", (req, res) => {
    console.log(`Usernames node explorers ${new Date()}`)
    res.status(200).json(filter2)
})
app.get("/v1/explorers/node/fizzbuzz", (req, res) => {
    console.log(`Operation fizzbuzz ${new Date()}`)
    res.status(200).json(fizzBuzz)
})
