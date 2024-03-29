function solution(wallpaper) {
    var answer = [];
    let min_X = wallpaper.length;
    let min_Y = wallpaper[0].length;
    let [max_X ,max_Y]=[0,0];
    
    wallpaper.map((value,index)=>{
        let position = value.indexOf('#')
        let lastpostion=value.lastIndexOf('#')
        if(position>=0){
            min_X = Math.min(min_X,index);
            max_X = Math.max(max_X,index+1);
            min_Y = Math.min(min_Y,position);
            max_Y = Math.max(max_Y,lastpostion+1);
        }
                       
    })
    answer =[min_X,min_Y,max_X,max_Y];
    
    return answer;
}