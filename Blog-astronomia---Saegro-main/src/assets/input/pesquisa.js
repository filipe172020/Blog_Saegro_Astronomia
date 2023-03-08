function search_artigos() {
    let input = document.getElementById('pesquisar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('artigos');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}