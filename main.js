let div1 = document.createElement('div');
div1.className = 'demo'
document.body.appendChild(div1)


var dragging = false
var lastX
var lastY
div1.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}
document.body.onmousemove = function (e) {/*document是指整个文档*/
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        div1.style.top = top + deltaY + 'px'
        div1.style.left = left + deltaX + 'px'/*top和left取的都是js里面的  取不到css里的  所以需要定义*/
        lastX = e.clientX
        lastY = e.clientY
    }
}
document.onmouseup = function () {
    dragging = false
}/*优化怎样让div不划出这个界面
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultX=left+deltaX
        var resultY=top+deltaY
        if(resultX <0){
           resultX=0
        }
        if(resultY<0){
            resultY=0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'*/
