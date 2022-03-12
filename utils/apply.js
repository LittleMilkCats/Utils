Function.prototype.apply = function(origin,arguments){
    origin == null || undefined ? origin = window : origin
    origin.fn = this;
    var result = origin.fn(...arguments)
    delete origin.fn
    return result
}