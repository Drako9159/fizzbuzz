const ExplorerService = require("../lib/services/ExplorerService");
describe("Tets fizzbuzz", () => {
    test("Test1: filterByMission", () => {
        const fizzbuzzObjet = [{mission: "node"},{mission: "java"}] 
        const ExplorersInNode = ExplorerService.filterByMission(fizzbuzzObjet, "node");
        expect(ExplorersInNode).toEqual([{mission: "node"}]);
    });
    test("Test2: getAmountOfExplorersByMission", () => {
        const fizzbuzzObjet = [{mission: "node"},{mission: "java"}] 
        const totalExplorersInNode = ExplorerService.getAmountOfExplorersByMission(fizzbuzzObjet, "node");
        expect(totalExplorersInNode).toBe(1);
    });
    test("Test3: getExplorersUsernamesByMission", () => {
        const fizzbuzzObjet = [{mission: "node", githubUsername: "aline"},{mission: "java", githubUsername: "bestie"}] 
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(fizzbuzzObjet, "node");
        expect(usernamesInNode).toEqual(["aline"]);
    });
    test("Test4: getExplorersNamesByMission", () => {
        const fizzbuzzObjet = [{name: "Elis", mission: "node", githubUsername: "aline"},{name: "Ferrys", mission: "java", githubUsername: "bestie"}] 
        const usernamesInNode = ExplorerService.getNamesByMission(fizzbuzzObjet, "node");
        expect(usernamesInNode).toEqual(["Elis"]);
    });
});