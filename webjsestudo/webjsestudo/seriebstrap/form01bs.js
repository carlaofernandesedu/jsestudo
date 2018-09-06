function bindBotoesEtapa() {
    $('#btnetapa1').off('click');
    $('#btnetapa1').on('click', function () { alterarEtapa(1); });
    $('#dicaetapa1').off('mouseover', 'mouseout');
    $('#dicaetapa1').on('mouseover', function () { exibirDica('dicaetapa1'); });
    $('#dicaetapa1').on('mouseout', function () { esconderDica('dicaetapa1'); });
    $('#btnetapa2').off('click');
    $('#btnetapa2').on('click', function () { alterarEtapa(2); });
    $('#btnetapa3').off('click');
    $('#btnetapa3').on('click', function () { validarCampos(); });
}

function alterarEtapa(indiceTab) {
    let identificador = '#tabEtapas li:eq(' + indiceTab + ') a';
    $(identificador).tab('show');
}
function exibirDica(idDica) {
    executarAcaoPopover(idDica, 'show');
}
function esconderDica(idDica) {
    executarAcaoPopover(idDica, 'hide');

}
function executarAcaoPopover(idDica, acao) {
    let identificador = '#' + idDica;
    $(identificador).popover(acao);

}

function validarCampos() {
    let campos = [{ id: "#nome", etapa: 0, msg: '' },
        { id: "#email", etapa: 0, msg: '' },
        { id: "#cidade", etapa: 1, msg: '' },
        { id: "#estado", etapa: 1, msg: '' },
        { id: "#facebook", etapa: 2, msg: '' },
        { id: "#twitter", etapa: 2, msg: '' }
    ]; 
    for (var indice in campos) {
        let campo = campos[indice];
        let controle = $(campo.id);
        if (controle.val() === '' || controle.val() === undefined) {
            if (campo.etapa < 2)
                alterarEtapa(campo.etapa);

            controle.focus();
            controle.tooltip('show');
            return;
        }
        else {
            console.log(campo.id + ":" + controle.val());
        }
    }
    
}

