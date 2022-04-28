const ExplorerService = require("../lib/services/ExplorerService");

const FizzbuzzService = require("../lib/services/FizzbuzzService.js");

const filter0 = ExplorerService.filterByMission(explorers, "node");
const filter1 = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const filter2 = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

const fizzBuzz = filter0.map((e) => FizzbuzzService.applyValidationInExplorer(e));
