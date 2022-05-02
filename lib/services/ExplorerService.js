
class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const exploresInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = exploresInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getNamesByMission(explorers, mission){
        const explorersName = explorers.filter((e) => e.mission == mission);
        const explorersNameByMission = explorersName.map((e) => e.name)
        return explorersNameByMission;
    }
}
module.exports = ExplorerService;