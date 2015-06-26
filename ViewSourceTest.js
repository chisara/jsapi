<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the array values after the split.</p>

<button onclick="myFunction()">Try it</button>
<button onclick="mySource()">source</button>
<p id="demo"></p>
<p id="source"></p>

<script>
var options = "cat, bear";

function myFunction() {
    var str = options;
    var res = str.split(" ");
    document.getElementById("demo").innerHTML = res;

}

function mySource() {
    var src = myFunction.toString();
    var rep = src.replace("options","\"" + options + "\"");
    document.getElementById("demo").innerHTML = rep;
}

</script>

</body>
</html>