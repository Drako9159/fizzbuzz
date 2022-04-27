const ExplorerService = require("../lib/services/ExplorerService");
const Reader = require("../lib/utils/reader.js"); 
const explorers = Reader.readJsonFile("./explorers.json");

describe("Tets fizzbuzz", () => {
    test("test filterByMission", () => {
        const totalExplorersInNode = ExplorerService.filterByMission(explorers, "node");
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        expect(explorersInNode).toStrictEqual(totalExplorersInNode);
    });
    test("test getAmountOfExplorersByMission", () => {
        const totalExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(totalExplorers).toBe(10);
    });
    test("test getExplorersUsernamesByMission", () => {
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const usernamesByReader = explorers.filter((explorer) => explorer.mission == "node");
        const newUsernames = usernamesByReader.map((explorer) => explorer.githubUsername);
        expect(newUsernames).toStrictEqual(usernamesInNode);
    });
});