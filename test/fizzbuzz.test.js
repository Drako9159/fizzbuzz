const ExplorerService = require('../lib/services/ExplorerService')
const Reader = require('../lib/utils/Reader') 
const explorers = Reader.readJsonFile("./explorers.json")
/* */
describe("Tets fizzbuzz", () => {
    test("test filterByMission", () => {
        const totalExplorersInNode = ExplorerService.filterByMission(explorers, "node")
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node")
        expect(totalExplorersInNode).toStrictEqual(explorersInNode)
    })
    test("test getAmountOfExplorersByMission", () => {
        const totalExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(totalExplorers).toBe(10)
    })
    test("test getExplorersUsernamesByMission", () => {
        const usernamesByReader = explorers.filter((explorer) => explorer.mission == "node")
        const newUsernames = usernamesByReader.map((explorer) => explorer.githubUsername)
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(usernamesInNode).toStrictEqual(newUsernames)
    })
})