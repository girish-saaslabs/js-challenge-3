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

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }, { colors: 'violet' } ];        
let colors = []
let pick = (paints, col) => {
    colors = []
    let newPaint = paints.map((paint) => paint[col])
    let paintFilter = newPaint.filter((fil) => fil)
    return paintFilter
}

// pick([{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }, { colors: 'violet' }], 'color')