interface Point{
    x: number,
    y: number,
    draw:()=>void
}

let drawPoint = (point: Point) => {
    console.log(`x: ${point.x},y:${point.y}`);
    point.draw();
};

let someFunction = () => {
    console.log("draw function")
}
drawPoint({
    x:1,
    y:2,
    draw:someFunction
});
