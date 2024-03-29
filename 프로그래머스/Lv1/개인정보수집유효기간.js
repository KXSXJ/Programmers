function solution(today, terms, privacies) {
    let termsMap= new Map();
    let expiration = new Date(today.replaceAll('.','-'));
    let answer =[];

    terms.map((value)=>{
        let list =value.split(' ');
        termsMap.set(list[0], list[1]);
    })
    
    privacies.forEach((pri,index)=>{
        let priList = pri.split(' ');
        //날짜, 약관
        let date = new Date(priList[0].replaceAll('.','-'));
        let term = termsMap.get(priList[1]);
        date.setMonth(date.getMonth()+Number(term));
        date.setDate(date.getDate()-1);
        if(date.getDate()>28){
            date.setDate(28)
        }
        
   
        if(expiration>date){
            answer.push(index+1)
        }
        
    })
    
    return answer
    
}
