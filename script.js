console.log("Javascript is working");

var displayDiv = document.querySelector("#display");
var op = "",
	num = "",
	tempNum = "";

function press(num) {
	this.num += num;
	displayDiv.innerText = this.num;
}

function setOP(op) {
	this.op = op;
	tempNum = num;
	num = "";
}

function calculate() {
	var total;
	switch (op) {
		case "+":
			total = parseFloat(tempNum) + parseFloat(num);
			num = total;
			break;
		case "-":
			total = parseFloat(tempNum) - parseFloat(num);
			num = total;
			break;
		case "*":
			total = parseFloat(tempNum) * parseFloat(num);
			num = total;
			break;
		case "/":
			total = parseFloat(tempNum) / parseFloat(num);
			num = total;
			break;
	}
	displayDiv.innerText = total;
}

function clr() {
	displayDiv.innerText = 0;
	op = "";
	num = "";
	tempNum = "";
}

function add() {}
