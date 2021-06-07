let data = [''];
let done = [''] ;

function tambahkan(e) {
    e.preventDefault()
    let input = document.getElementById("input-field").value
    data.push(input)
    let list = document.getElementById("shop-list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        list.innerHTML += ` <li>
        <p>
            <button class="transition duration-150 ease-in-out text-white rounded-lg bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick="doneList(event, ${i})"><i class="fas fa-check"></i></button>
            <span>${data[i]}</span>
        </p>
        </li>`
    }
}

function doneList(event, idx) {
    event.preventDefault()
    done.push(data[idx])
    let list = document.getElementById("done-list")
    list.innerHTML = ""
    for (let i = 0; i < done.length; i++){
        list.innerHTML += `<li>
                            <p>
                                ${done[i]}
                            </p>
                            </li>
        `
    }
    list = document.getElementById("shop-list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        list.innerHTML += `<li>
                            <p>
                            <button onClick="doneList(event, ${i})">X</button>
                            <span>${data[i]}</span>
                            </p>
        </li>
        `
    }
}

