function solution(id_list, report, k) {
    let duplicate = new Set();
    let reportMap = new Map();
    let userMap = new Map();
    let answer=[];
    let duplicateReport=[]
    
    //중복제거
    report.map((value)=>{
        if(!duplicate.has(value)){ //중복되지 않으면
            let list = value.split(' ')
            let user=list[0];
            let reported = list[1];
            
            if(reportMap.get(reported)===undefined){ //존재하지 않을 때 생성
                reportMap.set(reported,1);
                if(userMap.get(reported)===undefined){
                    userMap.set(reported,[user]); //신고한 사람을 배열형태로 저장
                }
            }else{
                reportMap.set(reported,reportMap.get(reported)+1);
                userMap.set(reported, [...userMap.get(reported),user])//기존 배열을 불러와 재정의
                
            }
        }
        duplicate.add(value)
    })

    id_list.map((id,index)=>{
        answer[index]=0;
        for(let key of userMap){
             //key[0]은 신고당한사람, key[1]은 신고한사람
            if(key[1].indexOf(id)>=0&&reportMap.get (key[0])>=k){
                answer[index] = answer[index]+1
            }
        }
    })
    
    return answer
}

/*다른사람 풀이*/

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}