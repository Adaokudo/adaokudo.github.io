function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

const d = "Last Updated"+":" + new Date();
            document.getElementById("demo").innerHTML = d;