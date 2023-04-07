function Obj(input) {
    this.input = input;

    var methods = [
        {
            name: "xss",
            value: function() {
                return this.input;
            }
        }
    ]
    
    Obj.prototype[methods[0].name] = methods[0].value;
}


function print(message) {
    var source = document.getElementById("formElement1").value; // source

    var obj = new Obj(source);
    var payload = obj.xss();

    document.body.innerHTML = payload // sink
}