Array.prototype.concat = function(...args){
    var arr =[...this];
    args.forEach(item => {
        if(Array.isArray(item)){
            arr.push(...item)
        }else{
            arr.push(item)
        }
    })
    return arr
}