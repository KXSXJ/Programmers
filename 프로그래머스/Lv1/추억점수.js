function solution(name, yearning, photo) {
    let map = new Map();
    let result=[];
    name.forEach((value,index)=>{
        map.set(value,yearning[index])
    })
    
    photo.forEach((value)=>{
        let cnt=0;
        console.log(value)
        for(i=0;i<value.length; i++){
            if(typeof map.get(value[i]) ==='number'){
                cnt+=map.get(value[i]);
            }
        }
        result.push(cnt);
    })
    return result;
}