var drawPoint = function (point) {
    console.log("x: ".concat(point.x, ",y:").concat(point.y));
    point.draw();
};
var someFunction = function () {
    console.log("draw function");
};
drawPoint({
    x: 1,
    y: 2,
    draw: someFunction
});
