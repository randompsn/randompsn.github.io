function writeNav(){
    document.write(`<header class="header">
        <nav class="nav-bar">
            <p>Randompsn</p>
            <div class="nav-links">`)
            if (location.pathname.split(`/`).pop() === `index.html`){
                document.write(`<a>Home</a>
                <span>/</span>
                <a href="writings.html">Writings</a>
                <span>/</span>
                <a href="works.html">Works</a>`)
            }else if (location.pathname.split(`/`).pop() === `writings.html`){
                document.write(`<a href="index.html">Home</a>
                <span>/</span>
                <a>Writings</a>
                <span>/</span>
                <a href="works.html">Works</a>`)
            }else if (location.pathname.split(`/`).pop() === `works.html`){
                document.write(`<a href="index.html">Home</a>
                <span>/</span>
                <a href="writings.html">Writings</a>
                <span>/</span>
                <a>Works</a>`)
            }else{
                document.write(`<a href="../index.html">Home</a>
                <span>/</span>
                <a href="../writings.html">Writings</a>
                <span>/</span>
                <a href="../works.html">Works</a>`)
            }
            document.write(` </div>
        </nav>
        </header>`)
}
writeNav()