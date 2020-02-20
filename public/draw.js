// function connect(div1, div2, color, thickness) {
//     var off1 = getOffset(div1);
//     var off2 = getOffset(div2);
//     // bottom right
//     var x1 = off1.left + 0.5 * off1.width;
//     var y1 = off1.top + 0.5 * off1.height;
//     // top right
//     var x2 = off2.left + 0.5 * off2.width;
//     var y2 = off2.top + 0.5 * off2.height;
//     // distance
//     var length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
//     // center
//     var cx = ((x1 + x2) / 2) - (length / 2);
//     var cy = ((y1 + y2) / 2) - (thickness / 2);
//     // angle
//     var angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
//     // make hr
//     var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
//     //

//     let div = document.createElement("div");
//     div.className = "line"
//     div.style.cssText = "padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);"
//     document.body.appendChild(div)
//     // document.body.innerHTML += htmlLine;
// }

// function getOffset(el) {
//     var rect = el.getBoundingClientRect();
//     return {
//         left: rect.left + window.pageXOffset,
//         top: rect.top + window.pageYOffset,
//         width: rect.width || el.offsetWidth,
//         height: rect.height || el.offsetHeight
//     };
// }

// var div1 = document.getElementById('trash');
// var div2 = document.querySelector('#testing')
// console.log(div2)
// console.log(div2.length)
// connect(div1, div2, "#0F0", 5);

// var test = document.getElementById("test")
// test.className = "node-visited"
// console.log("yo", test)

// setTimeout(() => test.className = "", 1000)

// let TESTER = document.getElementById('tester');
// Plotly.newPlot(TESTER, [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16]
// }], {
//     margin: {
//         t: 0
//     }
// });

function changemode() {
    let button = document.getElementById('dropdown');
    console.log("fuck")
}