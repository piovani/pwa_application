if ('clipboard' in navigator) {
    // SET valor no copy
    // navigator.clipboard.writeText('Conteúdo gerado com sucesso');

    // GET valor no copy (necessario permissão do navegador)
    navigator.clipboard.readText()
        .then((result) => {
            console.log(result)
        })
}