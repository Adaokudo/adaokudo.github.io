function toggleMenu(){
    document.getElementsByClassName("navigatio").classList.toggle("responsive");
}

const d = "Last Updated"+":" + new Date();
            document.getElementById("demo").innerHTML = d;