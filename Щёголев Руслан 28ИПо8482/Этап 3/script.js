function applyStyles(element, styles) {
    Object.assign(element.style, styles);
}

function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Добро пожаловать!</h1>";
    applyStyles(header, {
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        width: "100%"
    });
    document.body.appendChild(header);
}

function createImgBlock(text, imgSrc) {
    const block = document.createElement("div");
    applyStyles(block, {
        textAlign: "center",
        padding: "10px"
    });
    block.innerHTML = `<p>${text}</p>`;
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Пример";
    applyStyles(img, {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px"
    });
    block.appendChild(img);
    return block;
}

function createForm() {
    const formContainer = document.createElement("div");
    applyStyles(formContainer, {
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    });

    formContainer.innerHTML = `
        <h3>Скажи Привет</h3>
        <form>
            <input type="text" placeholder="От кого">
            <input type="text" placeholder="Кому">
            <button type="submit">Отправить</button>
        </form>
    `;

    formContainer.querySelectorAll("input, button").forEach(el => {
        applyStyles(el, {
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px"
        });
    });

    applyStyles(formContainer.querySelector("button"), {
        backgroundColor: "#333",
        color: "white",
        cursor: "pointer"
    });

    return formContainer;
}

function createMain() {
    const main = document.createElement("main");
    applyStyles(main, {
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        background: "white",
        boxShadow: "0 0 10px rgba (0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
    });
    main.appendChild(createImgBlock("Этот кот крайне серьезен", "./Photo/Кот.png"));
    main.appendChild(createImgBlock("Этот кот Упорот", "./Photo/Упоротый кот.png"));
    main.appendChild(createForm());
    document.body.appendChild(main);
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "Все Права защищены";
    applyStyles(footer, {
        textAlign: "center",
        padding: "1rem",
        background: "#333",
        color: "white",
        width: "100%",
        marginTop: "auto"
    });
    document.body.appendChild(footer);
}


createHeader();
createMain();
createFooter();