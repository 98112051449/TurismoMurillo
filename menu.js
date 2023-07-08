window.addEventListener("scroll", function(){  /*detecta el movimiento del scroll*/
        let header = document.querySelector("header"); /*capturamos el header*/
        header.classList.toggle("active", this.scrollY >0) /*toogle quiere decir que se activa si se hace el scroll*/
})