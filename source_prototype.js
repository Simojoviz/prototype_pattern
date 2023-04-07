function Obj() {
    var methods = [
        {
            name: "source",
            value: function() {
                return document.getElementById("formElement1");
            }
        }
    ]
    
    Obj.prototype[methods[0].name] = methods[0].value;
}


function print(message) {
    var obj = new Obj();

    var source = obj.source().value; // source

    

    document.body.innerHTML = source // sink
}