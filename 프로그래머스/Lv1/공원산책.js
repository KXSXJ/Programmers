function solution(park, routes) {
    let pet =[];
    //펫위치 초기화
    park.map((route,row_position)=>{
        let column_position =route.indexOf('S');
        if(column_position>=0){
            pet=[row_position,column_position]
        }
    })
    let map = new Map(); //위치에 따른 계산을 편리하게 하기위한 셋팅
    map.set("E",1);
    map.set('W',-1);
    map.set('S',1);
    map.set('N',-1);
   
    routes.map((route)=>{ //이동할 경로 list들의 map
        let list = route.split(' ')
        let direction = list[0];//route에서 뽑아낸 방향
        let move = list[1]  //route에서 뽑아낸 이동 블록
        let load =[]    //이동 예상되는 경로 동,서 => 열 / 남,북 =>행
        let petPosition; //현재 pet의 위치
        let able=true; //조건에 벗어나는지 체크하기 위한 필드
        
        if(direction==='E'|| direction==='W'){ //동 서
            load =park[pet[0]].split('') // 전체 park에서 필요한 열만 가져옴(현재 pet의 위치기준이 되는 열)
            petPosition = pet[1]//현재 펫의 위치에서 열을 가져옴(열간의 이동만 일어나서)

        }else{
             park.map((value)=>{
                let rowList =value.split('');
                load.push(rowList[pet[1]]);
            })
            petPosition = pet[0]//현재 펫의 위치에서 행을 가져옴(행간의 이동만 일어나서)
        }
        let petMove = petPosition+(map.get(direction)*move)
       
                           
        if(!(petMove>=load.length || petMove<0)){ //이동 시 경로를 벗어나나 체크 아니면 통과
            for(let i =1; i<=move; i++){//이동 경로에 X가 있는지 체크 있으면 able=false
                if(load[petPosition+(map.get(direction)*i)]==='X'){
                    able= false;   
                }
            }
        }else{
            able=false;
        }
        
        
        if(able){ //이동이 가능한지 체크 후 이동
            if(direction ==='E'|| direction==='W'){
               pet[1] = petMove
            }else{
                pet[0] = petMove
            }
        }
    })

    return pet

}