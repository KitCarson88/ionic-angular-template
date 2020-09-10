var fs = require('fs');

function switchSyncing()
{
    if (fs.existsSync("./angular_WITH_LINK_FLAG.json")) //an angular.json file without syncing exists
    {
        console.log("Enabling syncing");
        fs.renameSync("./angular.json", "./angular_WITHOUT_LINK_FLAG.json");
        fs.renameSync("./angular_WITH_LINK_FLAG.json", "./angular.json");
    }
    else if (fs.existsSync("./angular_WITHOUT_LINK_FLAG.json")) //an angular.json file with syncing exists
    {
        console.log("Disable syncing");
        fs.renameSync("./angular.json", "./angular_WITH_LINK_FLAG.json");
        fs.renameSync("./angular_WITHOUT_LINK_FLAG.json", "./angular.json");
    }
};

switchSyncing();