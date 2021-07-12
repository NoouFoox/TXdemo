let tizuArr = []
let tizu = document.querySelectorAll('.e-q')
tizu.forEach(item => {
    let str1 = item.children[0].textContent
    let str2 = item.children[1].textContent
    tizuArr.push(str1.replace(/\s*/g, "") + "答案:" + str2.replace(/\s*/g, ""))
})
console.log(tizuArr);