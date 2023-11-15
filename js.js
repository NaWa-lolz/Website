document.getElementById("open").addEventListener("click", func);
document.getElementById("close").addEventListener("click", func);

function func() {
    document.querySelector('.block').classList.toggle('active');
    document.querySelector('.button').classList.toggle('active');
}