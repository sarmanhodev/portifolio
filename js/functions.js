//ANIMAÇÃO IMG HTML
$(document).ready(function () {
    $("#div_html").mouseenter(function () {
        $("#html").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_html").mouseleave(function () {
        $("#html").animate({
            height: '100px',
            width: '100px'
        });
    });
});

//ANIMAÇÃO IMG CSS
$(document).ready(function () {
    $("#div_css").mouseenter(function () {
        $("#css").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_css").mouseleave(function () {
        $("#css").animate({
            height: '100px',
            width: '100px'
        });
    });
});

//ANIMAÇÃO IMG JAVASCRIPT
$(document).ready(function () {
    $("#div_javascript").mouseenter(function () {
        $("#javascript").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_javascript").mouseleave(function () {
        $("#javascript").animate({
            height: '100px',
            width: '100px'
        });
    });
});

//ANIMAÇÃO IMG BOOTSTRAP
$(document).ready(function () {
    $("#div_bootstrap").mouseenter(function () {
        $("#bootstrap").animate({
            height: '75px',
            width: '90px'
        });
    });
});

$(document).ready(function () {
    $("#div_bootstrap").mouseleave(function () {
        $("#bootstrap").animate({
            height: '100px',
            width: '110px'
        });
    });
});


//ANIMAÇÃO IMG PYTHON
$(document).ready(function () {
    $("#div_python").mouseenter(function () {
        $("#python").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_python").mouseleave(function () {
        $("#python").animate({
            height: '100px',
            width: '100px'
        });
    });
});

//ANIMAÇÃO IMG FLASK
$(document).ready(function () {
    $("#div_flask").mouseenter(function () {
        $("#flask").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_flask").mouseleave(function () {
        $("#flask").animate({
            height: '100px',
            width: '100px'
        });
    });
});

//ANIMAÇÃO IMG FLUTTER
$(document).ready(function () {
    $("#div_flutter").mouseenter(function () {
        $("#flutter").animate({
            height: '70px',
            width: '70px'
        });
    });
});

$(document).ready(function () {
    $("#div_flutter").mouseleave(function () {
        $("#flutter").animate({
            height: '100px',
            width: '90px'
        });
    });
});

//ANIMAÇÃO IMG RASA
$(document).ready(function () {
    $("#div_rasa").mouseenter(function () {
        $("#rasa").animate({
            height: '80px',
            width: '170px'
        });
    });
});

$(document).ready(function () {
    $("#div_rasa").mouseleave(function () {
        $("#rasa").animate({
            height: '100px',
            width: '190px'
        });
    });
});

//ANIMAÇÃO IMG POSTGRESQL
$(document).ready(function () {
    $("#div_postgre").mouseenter(function () {
        $("#postgre").animate({
            height: '85px',
            width: '150px'
        });
    });
});

$(document).ready(function () {
    $("#div_postgre").mouseleave(function () {
        $("#postgre").animate({
            height: '100px',
            width: '100px'
        });
    });
});


//GET REPOSITÓRIOS GITHUB
async function getRepositorios() {
    const url = "https://api.github.com/users/sarmanhodev/repos";
    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            nome_repositorios = '';
            descricao = '';
            for (i = 0; i < data.length; i++) {

                if (data[i].description === null) {
                    card = `<div class="card glass_morfism" style="width: 300px; height: 350px;margin-right:15px; margin-top:15px;">
                        <div class="card-body">
                        <h4 class="card-title text-center text-white">${data[i].name}</h4>
                        <div class='col-auto'><p class="card-text text-start text-white lh-sm">Acesse o repositório para mais informações</p></div>
                        
                        </div>
                        <div class='row centralizar'>
                        <div class='col-auto'>
                        <a href="${data[i].html_url}" target='_blank' class="btn_repositorio">Acessar Repositório</a>
                        </div>
                        </div><br>
                    </div>`

                    nome_repositorios += card;
                    let container = document.querySelector('#projetos_github');
                    container.innerHTML = nome_repositorios;
                } else {
                    card = `<div class="card glass_morfism" style="width: 300px; height: 350px;margin-right:15px; margin-top:15px;">
                        <div class="card-body">
                        <h4 class="card-title text-center text-white">${data[i].name}</h4>
                        <div class='col-auto'><p class="card-text text-white text-start lh-sm">${data[i].description}</p></div>
                        
                        </div>
                        <div class='row centralizar'>
                        <div class='col-auto'>
                        <a href="${data[i].html_url}" target='_blank' class="btn_repositorio">Acessar Repositório</a>
                        </div>
                        </div><br>
                    </div>`

                    nome_repositorios += card;
                    let container = document.querySelector('#projetos_github');
                    container.innerHTML = nome_repositorios;
                }

            }

        });
};
getRepositorios();