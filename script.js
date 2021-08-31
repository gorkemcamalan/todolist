let ekleButton = document.getElementById('ekle');
let paragraf = document.getElementById('paragraf');
let metin = document.getElementById('metin');
let sil = document.getElementById('sil');

ekleButton.addEventListener('click', function()
{
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraf.appendChild(paragraph);
    paragraph.innerHTML = metin.value;
    metin.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        paragraf.removeChild(paragraph);
    });


})