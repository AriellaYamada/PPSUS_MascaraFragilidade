function validate_c23a() {
    document.getElementById("opt").innerHTML = '<div class="col-lg-12 field">\r\n' +
        '<p><strong>Q1a. </strong>Quantos quilos aproximadamente?</p>\r\n' +
        '<input type="float" name="Q1a" id="C23b" value="" required/>\r\n' +
        '<hr>\r\n' +
        '</div>\r\n';
}

function refresh_c23a() {
    document.getElementById("opt").innerHTML = '';
}

function refresh() {

}

function validateRadio(quest) {
    var result = 0;
    for(var i = 0; i < quest.length; i++) {
        if(quest[i].checked)
            result++;
    }
    return result;
}
function formValidation() {
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var Q1 = document.getElementsByName('Q1');
    var Q2 = document.getElementsByName('Q2');
    var Q3 = document.getElementsByName('Q3');
    var Q4 = document.getElementsByName('Q4');
    var Q5 = document.getElementsByName('Q5');
    var Q6 = document.getElementsByName('Q6');
    var error = 0;
    error += Number(validateRadio(Q1));
    error += Number(validateRadio(Q2));
    error += Number(validateRadio(Q3));
    error += Number(validateRadio(Q4));
    error += Number(validateRadio(Q5));
    error += Number(validateRadio(Q6));

    if(nome.value() == '')
        window.alert('Por favor preencha o nome');
    if(Q1[0].checked)
        if(document.getElementById("C23b").value == "") {
            window.alert('Por favor preencha o campo Q1a.');
            exit();
        }
    if(error < 6)
        window.alert('Por favor preencha todos os campos!');
    else
        fragilityCalculator();
}

function fragilityCalculator() {
    var result = 0;
    var Q1 = document.getElementsByName('Q1');
    var Q2 = document.getElementsByName('Q2');
    var Q3 = document.getElementsByName('Q3');
    var Q4 = document.getElementsByName('Q4');
    var Q5 = document.getElementsByName('Q5');
    var Q6 = document.getElementsByName('Q6');

    if(Q1[0].checked) {
        if(document.getElementById('C23b').value >= 3)
            result++;
    }
    for(var i = 0; i < Q2.length; i++) {
        if(Q2[i].checked)
            result += Number(Q2[i].value);
    }
    for(var i = 0; i < Q3.length; i++) {
        if(Q3[i].checked)
            result += Number(Q3[i].value);
    }
    for(var i = 0; i < Q4.length; i++) {
        if(Q4[i].checked)
            result += Number(Q4[i].value);
    }
    var result5 = 0;
    for(var i = 0; i < Q5.length; i++) {
        if(Q5[i].checked)
            result5 += Number(Q5[i].value);
    }
    var result6 = 0;
    for(var i = 0; i < Q6.length; i++) {
        if(Q6[i].checked)
            result6 += Number(Q6[i].value);
    }
    if(result5 || result6)
        result ++;

    if(result == 0)
        document.getElementById('result').innerHTML = '<div class="alert-success">Idoso <strong> Não frágil.</strong></div>';
    else if(result == 1 || result == 2) {
        document.getElementById('result').innerHTML = '<div class="alert-warning">Idoso <strong> Pré-frágil.</strong></div>\r\n' +
            '<h4> Score de Testes </h4>\r\n' +
            '<ol>\r\n' +
            '<li>MOS</li>\r\n' +
            '<li>Caminhada</li>\r\n' +
            '<li>Circunferência cintura</li>\r\n' +
            '<li>Idade</li>\r\n' +
            '<li>MAN</li>\r\n' +
            '<li>Circunferência panturrilha</li>\r\n' +
            '<li>BERG</li>\r\n' +
            '<li>Fraqueza muscular</li>\r\n' +
            '<li>Tempo sentado</li>\r\n' +
            '<li>Atividade física total</li>\r\n' +
            '<li>Circunferência quadril</li>\r\n' +
            '<li>Circunferência braço</li>\r\n' +
            '<li>GDS</li>\r\n' +
            '<li>FES</li>\r\n' +
            '<li>Findrisc</li>\r\n' +
            '<li>KATZ</li>\r\n' +
            '<li>Relógio</li>\r\n' +
            '<li>Lawton</li>\r\n' +
            '<li>TUG</li>\r\n' +
            '<li>CAAVD</li>\r\n' +
            '<li>MEEM</li>\r\n' +
            '<li>Quedas</li>\r\n' +
            '<li>SCORED</li>\r\n' +
            '</ol>';
    } else {
        document.getElementById('result').innerHTML = '<div class="alert-danger">Idoso <strong> Frágil.</strong></div>\r\n' +
            '<h4> Score de Testes </h4>\r\n' +
            '<ol>\r\n' +
            '<li>MOS</li>\r\n' +
            '<li>Caminhada</li>\r\n' +
            '<li>Circunferência panturrilha</li>\r\n' +
            '<li>BERG</li>\r\n' +
            '<li>GDS</li>\r\n' +
            '<li>Tempo sentado</li>\r\n' +
            '<li>Atividade física total</li>\r\n' +
            '<li>MAN</li>\r\n' +
            '<li>Idade</li>\r\n' +
            '<li>Relógio</li>\r\n' +
            '<li>Circunferência braço</li>\r\n' +
            '<li>Circunferência cintura</li>\r\n' +
            '<li>Circunferência quadril</li>\r\n' +
            '<li>FES</li>\r\n' +
            '<li>Fraqueza muscular</li>\r\n' +
            '<li>Findrisc</li>\r\n' +
            '<li>Lawton</li>\r\n' +
            '<li>Quedas</li>\r\n' +
            '<li>TUG</li>\r\n' +
            '<li>CAAVD</li>\r\n' +
            '<li>KATZ</li>\r\n' +
            '<li>SCORED</li>\r\n' +
            '<li>MEEM</li>\r\n' +
            '</ol>';
    }
}