function Obj(input) {
    this.input = input;
    
    Obj.prototype["xss"] = function() {
        return this.input;
    }
}


function print(message) {
    var source = document.getElementById("formElement1").value; // source

    var obj = new Obj(source);
    var payload = obj.xss();

    document.body.innerHTML = payload // sink
}