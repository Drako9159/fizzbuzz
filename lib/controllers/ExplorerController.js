const ExplorerService = require("../services/ExplorerService.js");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader.js");
const explorers = Reader.readJsonFile("./explorers.json");


class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);

    }
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);

    }
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getNumberExplorer(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}
module.exports = ExplorerController;