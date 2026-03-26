
function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Добро пожаловать!</h1>";
    document.body.appendChild(header);
}
function createMain() {   
    const main = document.createElement("main");
    main.className = "container";
    main.appendChild(createImgBlock("Этот кот крайне серьезен", "./Photo/Кот.png"));
    main.appendChild(createImgBlock("Этот кот Упорот", "./Photo/Упоротый кот.png"));
    main.appendChild(createForm());
    document.body.appendChild(main);
}
function createForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `
        <h3>Скажи Привет</h3>
        <form>
            <input type="text" placeholder="Ваше имя" required>
            <input type="email" placeholder="Ваш Email" required>
            <button type="submit">Отправить</button>
        </form>
    `;
    return formContainer;
}
function createImgBlock(text, imgSrc) {
    const block = document.createElement("div");
    block.className = "text-block";
    block.innerHTML = `<p>${text}</p>
    <img class='image' src='${imgSrc}' alt='Пример'>`;
    return block;
}

function createFooter() {  
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Все Права защищены</h1>";
    document.body.appendChild(footer); 
}


createHeader();
createMain();
createFooter();