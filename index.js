
function superbowlWin(arr) {
    const bowl = arr.find(function(season) {return season.result === "W"});
    if (bowl){
        return bowl.year;
    } else {
        return undefined;
    }
    
}
