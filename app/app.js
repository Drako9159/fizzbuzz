const ExplorerService = require("../lib/services/ExplorerService")
const Reader = require("../lib/utils/Reader")
const explorers = Reader.readJsonFile("../explorers.json")

ExplorerService.filterByMission(explorers, "node")

ExplorerService.getAmountOfExplorersByMission(explorers, "node")

ExplorerService.getExplorersUsernamesByMission(explorers, "node")
