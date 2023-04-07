function Obj() {
    var methods = [
        {
            name: "sink",
            value: function() {
                return document.body;
            }
        }
    ]
    
    Obj.prototype[methods[0].name] = methods[0].value;
}


function print(message) {
    var source = document.getElementById("formElement1").value; // source

    var obj = new Obj();
    var sink = obj.sink();

    sink.innerHTML = source // sink
}