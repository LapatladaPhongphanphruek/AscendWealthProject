var submit = document.getElementById("submit");
var fButton = document.getElementById("f");
var lButton = document.getElementById("l");
var rButton = document.getElementById("r");
var done = document.getElementById("done");
var size = document.getElementById("size");
var isSubmit = false;
var direction = "N";
var x = 0;
var y = 0;
var result;
var isOut = false;
/** check size */
submit.addEventListener("click", function () {
    console.log(checkInput(+size.value));
});
/** check submit */
fButton.addEventListener("click", function () {
    result = checkSubmit(isSubmit, "f", direction, x, y);
    direction = result['direction'];
    x = result['x'];
    y = result['y'];
    if (typeof result != "string") {
        console.log(checkArea(+size.value, result));
    }
    else
        console.log(result);
});
function checkArea(size, result) {
    var x = result['x'];
    var y = result['y'];
    if (y >= size || y < 0 || x >= size || x < 0) {
        isOut = true;
        return "you are out of area";
    }
    else if (y < size || y >= 0 || x < size || x > 0) {
        return result;
    }
}
lButton.addEventListener("click", function () {
    result = checkSubmit(isSubmit, "l", direction, x, y);
    direction = result['direction'];
    console.log(result);
});
rButton.addEventListener("click", function () {
    result = checkSubmit(isSubmit, "r", direction, x, y);
    direction = result['direction'];
    console.log(result);
});
done.addEventListener("click", function () {
    console.log(checkSubmit(isSubmit, "done", direction, x, y));
    direction = "N";
    x = 0;
    y = 0;
    isSubmit = false;
});
function checkInput(size) {
    console.clear();
    if (size == 0) {
        return "please input the size first";
    }
    else if (size < 0) {
        return "the size can't be negative";
    }
    else if (size > 0) {
        isSubmit = true;
        return "okay ready to move size = " + size + " start { direction: " + direction + "; x: " + x + "; y: " + y + " }";
    }
}
function checkSubmit(isSubmit, operations, direction, x, y) {
    if (isSubmit == false) {
        console.clear();
        return "submit the size first";
    }
    else if (isSubmit == true) {
        switch (operations) {
            case "f":
                return movingForward(direction, x, y);
            case "l":
                return movingLeft(direction, x, y);
            case "r":
                return movingRight(direction, x, y);
            case "done":
                return "we're arrived";
        }
    }
}
function movingForward(direction, x, y) {
    switch (direction) {
        case "N":
            return {
                direction: direction,
                x: x,
                y: y + 1
            };
        case "E":
            return {
                direction: direction,
                x: x + 1,
                y: y
            };
        case "S":
            return {
                direction: direction,
                x: x,
                y: y - 1
            };
        case "W":
            return {
                direction: direction,
                x: x - 1,
                y: y
            };
    }
}
function movingLeft(direction, x, y) {
    if (isOut = false) {
        switch (direction) {
            case "N":
                return {
                    direction: "W",
                    x: x,
                    y: y
                };
            case "E":
                return {
                    direction: "N",
                    x: x,
                    y: y
                };
            case "S":
                return {
                    direction: "E",
                    x: x,
                    y: y
                };
            case "W":
                return {
                    direction: "S",
                    x: x,
                    y: y
                };
        }
    }
    else
        return "you are out of area";
}
function movingRight(direction, x, y) {
    if (isOut = false) {
        switch (direction) {
            case "N":
                return {
                    direction: "E",
                    x: x,
                    y: y
                };
            case "E":
                return {
                    direction: "S",
                    x: x,
                    y: y
                };
            case "S":
                return {
                    direction: "W",
                    x: x,
                    y: y
                };
            case "W":
                return {
                    direction: "N",
                    x: x,
                    y: y
                };
        }
    }
    else
        return "you are out of area";
}
