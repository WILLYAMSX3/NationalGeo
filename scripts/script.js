function initTabList(){
    const js_tabAnimais = document.querySelectorAll('.js_tabAnimais li');
    const js_tabDescricao = document.querySelectorAll('.js_tabDescricao section');
    
    js_tabAnimais.forEach((itemLi, indice)=>{
        itemLi.addEventListener('click', ()=>{
            activeTab(indice);
        })
    })
    
    function activeTab(indice){
        js_tabDescricao.forEach(itemSection=>{
            itemSection.classList.remove('ativo')
        })

        const animation = js_tabDescricao[indice].dataset.anima;
        js_tabDescricao[indice].classList.add('ativo', animation);
    }

    js_tabDescricao[0].classList.add('ativo');
}
initTabList();

function initAccordion(){
    const js_accordion = document.querySelectorAll('.js_accordion dt');
    js_accordion.forEach(itemDt =>{
        itemDt.addEventListener('click', activeAccordion)
    })

    function activeAccordion(){
    //É usado para referenciar um elemento ou seja o objeto que está sendo manipulado
    this.classList.toggle('ativo');
    //Esse metodo retorna o conteudo ou o elemento HTML do proximo irmão, ou seja, o proximo elemento
    this.nextElementSibling.classList.toggle('ativo')
    }
    //
    js_accordion[0].classList.add('ativo');
    js_accordion[0].nextElementSibling.classList.add('ativo')
}
initAccordion();

function modal(){
    const modalConatiner = document.querySelector('[data-modal="js_containerModal"]')
    const btnFechaModal = document.querySelector('[data-modal="js_btnFechaModal"]')
    const abrirModal = document.querySelector('[data-modal="abrir"]')

    abrirModal.addEventListener('click', modalAbrir);
    function modalAbrir(event){
        modalConatiner.classList.add('ativo')
    }

    btnFechaModal.addEventListener('click', fecharModal)
    function fecharModal(){
        modalConatiner.classList.remove('ativo')
    }
}
modal()

function dropMenu(){
    const dropDown = document.querySelectorAll('[data-dropMenu]')
    const clickFora = document.querySelector('body')

    dropDown.forEach(item =>{
        //Passando dois eventos ou mais para o mesmo comando
        ['click', 'touchstart'].forEach(itemEvent=>{
            item.addEventListener(itemEvent, clickDrop);
        })
    })

    function clickDrop(event){
        event.preventDefault();
        this.classList.toggle('ativo')

        clickFora.addEventListener('mousedown', ()=>{
            this.classList.remove('ativo');
        })
    }
}
dropMenu()

function menuMobile(){
    const buttonMobile = document.querySelector('[data-menu="buttonMobile"]')
    const menuList = document.querySelector('[data-menu="list"]')

    buttonMobile.addEventListener('click', abrirMenuMobile)
    function abrirMenuMobile(){
        menuList.classList.toggle('ativo')
        buttonMobile.classList.toggle('ativo')
    }
}
menuMobile()