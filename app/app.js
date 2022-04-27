const ExplorerService = require("../lib/services/ExplorerService")
const Reader = require("../lib/utils/reader.js")
const explorers = Reader.readJsonFile("../explorers.json")
const FizzbuzzService = require('../lib/services/FizzbuzzService')

const filter0 = ExplorerService.filterByMission(explorers, "node")
ExplorerService.getAmountOfExplorersByMission(explorers, "node")
ExplorerService.getExplorersUsernamesByMission(explorers, "node")

const alert = filter0.map((e) => FizzbuzzService.applyValidationInExplorer(e));
console.log(alert)

