Function.prototype.call = function(origin,...arguments){
    if(origin == null || origin == undefined){
        origin = window;
    }
    origin.fn = this;
    console.log(this);
    let result = origin.fn(...arguments);
    delete origin.fn;
    return result
}