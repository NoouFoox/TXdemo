'unsafe-inline'
let json = "./data/data.json"
let tizu = []
const buttons = document.querySelector('.serc')
let textinput = document.querySelector('.input_main')
textinput.focus();
buttons.onclick = () => {
    HexRun()
}
let kemu = "PY"
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        HexRun()
    }
    if (e.key == "Escape") {
        window.close()
    }
})

function HexRun() {
    HeX(textinput.value, kemu)
}

function RegFun(text) {
    return new RegExp(text)
}

function HeX(tm, kemu) {
    tizu = []
    textinput.focus();
    if (textinput.value == "") {
        console.log("空")
    } else {
        tm = RegFun(tm)
        let request = new XMLHttpRequest()
        request.open("get", json)
        request.send(null)
        request.onload = function() {
            let reg = new RegExp(tm)
            let json = JSON.parse(request.responseText)
            if (kemu == "PY") {
                jt = json.python.type
            } else if (kemu == "丁") {
                jt = json.linux.type
            } else if (kemu == "虚") {
                jt = json.xnh.type
            } else if (kemu == "网") {
                jt = json.wang.type
            } else if (kemu = "J") {
                jt = json.javaweb.type
            }
            jt.forEach((item) => {
                if (item.match(reg)) {
                    tizu.push(item)
                }
            });
            // console.log(tizu)
            xuanr()
        }
    }

}

function xuanr() {
    document.getElementById("list").innerHTML = ""
    console.log(tizu);
    let xuanrarr = []
    tizu.forEach(item => {
        xuanrarr += `<li>${item}</li><hr>`
    })
    document.getElementById("list").innerHTML = xuanrarr
}
let xuanze = document.querySelector('.xuanze')