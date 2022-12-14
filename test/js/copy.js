document.querySelectorAll(".copy-text").forEach(copyLinkContainer =>{
    const input = copyLinkContainer.querySelector(".text");
    const btn = copyLinkContainer.querySelector(".copyBtn");
    const copid = copyLinkContainer.querySelector(".copid")
    const text = input.value;

    input.addEventListener("focus", () => input.select());

    btn.addEventListener("click", () => {
        input.select();
        navigator.clipboard.writeText(text);

        copid.classList.add("active");
    })
});