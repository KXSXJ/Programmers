
function solution(players, callings) {
    let playerMap = new Map();
    let rankMap = new Map();
    
    players.forEach((player,rank)=>{
        playerMap.set(player,rank);
        rankMap.set(rank,player);
    })
    
    callings.forEach((value)=>{
        let player1, player2, rank1, rank2
        rank1 = playerMap.get(value);
        rank2 =  rank1-1;
        player1 = rankMap.get(rank1);
        player2 = rankMap.get(rank2); //front player
        
        rankMap.set(rank1,player2);
        rankMap.set(rank2,player1);
        
        playerMap.set(player1,rank2);
        playerMap.set(player2,rank1);
        
        players[rank2] = player1;
        players[rank1] = player2;
    })
    
    return players;
}