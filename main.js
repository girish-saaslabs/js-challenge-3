// var polygon = [
// { height: 10, width: 30 },
// { height: 20, width: 90 },
// { height: 54, width: 32 }
// ];
var areas = []
let polygonFn = (polygon) => {
    areas = []
    polygon.forEach((element) => {
        let calcArea = element.height * element.width
        // console.log(calcArea)
        areas.push(calcArea)
    });
    return areas
}
// polygonFn([{ height: 10, width: 30 }, { height: 20, width: 90 }, { height: 54, width: 32 }])

let colors = []
let pick = (paints, col) => {
    colors = []
    let newPaint = paints.map(a => a[col])
    return newPaint
}

// let colArray = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }, 'color'];

// pick([{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }], 'color')