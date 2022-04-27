const fs = require("fs");
class Reader {
    static readJsonFile(fileJson){
        const listExplorers = fs.readFileSync(fileJson);
        const explorers = JSON.parse(listExplorers);
        return explorers;
    }
}
module.exports = Reader;