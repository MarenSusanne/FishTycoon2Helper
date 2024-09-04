updateView()

function updateView() {
    app.innerHTML = /*HTML*/`
    <div class="container">
            <div id="fish-container">
                ${createFishDiv()}
            </div>
        </div>
    </div>
    <div class="container">
            <div id="fin-container">
                ${createFinDiv()}
            </div>
        </div>
    </div>
    `
    giveClass()
}

function createFishDiv(){
    let divs = '';
    for(let i = 1; i <= 484; i++){
        if (i >= 2 && i <= 22) {
            divs += `<div id=${i} class="fish-boxes fish">
                ${model.data.all_fish[i-2]}
            </div>`
        }else{
            divs += `<div id=${i} class="fish-boxes">
                ${i}
                </div>`
        }
        
    }
    return divs;
}
function createFinDiv(){
    let divs = '';
    for(let i = 1; i <= 484; i++){
        if (i >= 2 && i <= 22) {
            divs += `<div id=${i} class="fin-boxes fish">
                ${model.data.all_fins[i-2]}
            </div>`
        }else{
        divs += `<div id=${i} class="fin-boxes">
        ${i}
                </div>`
        }
    }
    return divs;
}
