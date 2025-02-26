interface Point{
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
console.log(`x: ${point.x},y:${point.y}`);
};

drawPoint({
    x:1,
    y:2
});
