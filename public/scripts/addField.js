document.querySelector('#add-time')
.addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);//Duplica toda a div com a classe schedule-item.
    const fields =  newFieldContainer.querySelectorAll('input') // Coloca todas as tags inputs e coloca em lista na variável fields.

    //Pega cada item da lista de fields, e limpa seus valores:
    fields.forEach(function(field) {
     field.value='';
    });
    
    document.querySelector('#schedule-items').appendChild(newFieldContainer); //Coloca o elemento duplicado como filho do id schedule-items.
}