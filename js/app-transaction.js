let sorElements = document.querySelector(".sort");
let filterElement = document.querySelector(".filter");
let txtSearch = document.querySelector(".txtsearch");
let menumobile= document.querySelector(".menu-mobile");
let menupc= document.querySelector(".menu-pc");

const cardByData = (persoana) => {

    let card = document.createElement("div");
    card.classList = "card";
    card.id = persoana.id;
    if(persoana.price[0]=='-'){
        card.innerHTML = `
   
        <div class="card-img-info">
             <img class="card-img" src=${persoana.img} alt="">
             <div class="card-info">
                <h2 class="info-title">${persoana.name}</h2>
                <p class="info-category">${persoana.category}</p>
            </div>
        </div>
       
        <div class="price-date">
            <h2 class="info-price">${persoana.price}</h2>
            <p class="info-date">${persoana.date}</p>
        </div>

`;
    }else{
        card.innerHTML = `
   
        <div class="card-img-info">
             <img class="card-img" src=${persoana.img} alt="">
             <div class="card-info">
                <h2 class="info-title">${persoana.name}</h2>
                <p class="info-category">${persoana.category}</p>
            </div>
        </div>
       
        <div class="price-date">
            <h2 class="info-price2">${persoana.price}</h2>
            <p class="info-date">${persoana.date}</p>
        </div>

`;
    }
   
    return card;
}

const load = (arr) => {

    let main = document.querySelector(".cards");

    main.innerHTML = "";

    for (i = 0; i < arr.length; i++) {
        let item = cardByData(arr[i]);
        main.appendChild(item);
    }
}

const filter = (category) => {

    let datacateg = [];

    if(category == "All Transactions") return data;

    for (i = 0; i < data.length; i++) {
        if (data[i].category == category)
            datacateg.push(data[i]);
    }

    return datacateg;
}

const search = (title) => {

    let datacateg = [];

    for (i = 0; i < data.length; i++) {
        if (data[i].name.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
            datacateg.push(data[i]);
    }

    return datacateg;
}


load(data);

function parsePrice(price) {
    const semn = price[0] == '-' ? -1 : 1;

    const val = parseFloat(price.slice(2));

    return semn * val;
}

sorElements.addEventListener("click", (e) => {

    if (sorElements.value == "A to Z") {
        let sort = data.sort(function (a, b) {
            var nameA = a.name.toLocaleLowerCase();
            var nameB = b.name.toLocaleLowerCase();
            if (nameA < nameB) return -1;
            else return 1;
        });

        load(sort);
    } else if (sorElements.value == "Z to A") {
        let sort = data.sort(function (a, b) {
            var nameA = a.name.toLocaleLowerCase();
            var nameB = b.name.toLocaleLowerCase();
            if (nameA > nameB) return -1;
            else return 1;
        });

        load(sort);
    }
    else if (sorElements.value == "Latest") {
        let sort = data.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });

        load(sort);
    } else if (sorElements.value == "Oldest") {
        let sort = data.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });

        load(sort);
    } else if (sorElements.value == "Highest") {
        let sort = data.sort(function (a, b) {
            const pricea = parsePrice(a.price)
            const priceb = parsePrice(b.price)
            return priceb - pricea;
        });

        load(sort);
    } else if (sorElements.value == "Lowest") {
        let sort = data.sort(function (a, b) {
            const pricea = parsePrice(a.price)
            const priceb = parsePrice(b.price)
            return pricea - priceb;
        });

        load(sort);
    }


});

filterElement.addEventListener("click",(e)=>{

load(filter(e.target.value));

});

txtSearch.addEventListener("input",(e)=>{
    console.log("Asd");
    load(search(e.target.value));

});

menumobile.addEventListener("click",(e)=>{

    let elem = e.target;
    if(elem.tagName == "IMG")
    window.location.href = elem.classList+".html";
});

menupc.addEventListener("click",(e)=>{

    let elem = e.target;
    if(elem.tagName == "DIV")
    window.location.href = elem.classList+".html";
});