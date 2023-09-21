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

// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];        
let colors = []
let pick = (paints, col) => {
    colors = []
    paints.map((a) => {
        if (a[col]) {
            // console.log(a[col])
            colors.push(a[col])
        }
    })
    return colors
}

// pick([{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }, { colors: 'violet' }], 'color')