// Obtener los elementos de la clase close

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link) {
    
    // Agregar un evento click a cada uno de ellos 
    link.addEventListener("click", function(ev){
        
        // Previniendo los eventos por Default
        ev.preventDefault();
        
        // Obtener el elemento con la clase .content
        let content = document.querySelector('.content');

        // Quitandole las clases al elemento con la clase .content
        content.classList.remove("animate__fadeInLeft");
        content.classList.remove("animate__animated");

        // Agregandole las clases al elemento con la clase .content
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");
        
        // Indicando el tiempo de redireccion
        setTimeout(function(){
            location.href = "../index.html";
        }, 800);
        

        return false;
    });
});