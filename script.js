document.getElementById("alertString").onclick = function () {
    alert('Ali Zohaib')
    let statement = "alert('Ali Zohaib')"
    document.getElementById('statement').innerHTML = statement;
}
document.getElementById("alertNumbers").onclick = function () {
    alert('0123456789');
    let statement = "alert('0123456789')"
    document.getElementById("statement").innerHTML = statement;

}
document.getElementById("variableNames").onclick = function () {
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name only contains letter, numbers, dollar signs and underscores.</li><li>Though a variable can't be of any JavaScript's keywords, it only contains keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful, beacuse variable names are case sensitive. A <code>rose</code> is not a <code>Rose.</code> If you assign the string 'Floribundas' to the variable <code>rose,</code> and then ask JavaScript for the value assigned to <code>Rose,</code> you'll come up empty.</li></ul>"
    document.getElementById("output").innerHTML = html;
}
document.getElementById("camelCaseExamples").onclick = function () {

    let examples = "<ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponsetime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("output").innerHTML = examples;
}
document.getElementById("sum2Numbers").onclick = function () {
    let num1 = 20
    let num2 = 10
    let sum = num1 + num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>";
    let statement = "let num1 =" + num1 + "<br>let num2 =" + num2 + "<br>let sum = num1 + num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("subtract2Numbers").onclick = function () {
    let num1 = 20
    let num2 = 10
    let subtract = num1 - num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + subtract + "</p>";
    let statement = "let num1 =" + num1 + "<br>let num2 =" + num2 + "<br>let subtract = num1 - num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("multiply2Numbers").onclick = function () {
    let num1 = 20
    let num2 = 10
    let multiply = num1 * num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply + "</p>";
    let statement = "let num1 =" + num1 + "<br>let num2 =" + num2 + "<br>let multiply = num1 - num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("divide2Numbers").onclick = function () {
    let num1 = 20
    let num2 = 10
    let divide = num1 / num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + divide + "</p>";
    let statement = "let num1 =" + num1 + "<br>let num2 =" + num2 + "<br>let divide = num1 / num2;"
    document.getElementById("statement").innerHTML = statement;
}
document.getElementById("calculateSomeNumbers").onclick = function () {

    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("output").innerHTML = "<p class='text-center'>" + someCalculation + "</p>";
    document.getElementById("statement").innerHTML = "36 / 6 * 3 + 2 ** 4 - (3 + 5)";
}
document.getElementById("clearStatementButton").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clearOutputButton").onclick = function () {
    document.getElementById("output").innerHTML = ""
}