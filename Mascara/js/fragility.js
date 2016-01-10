function refresh_c23a() {
    document.getElementById("opt").innerHTML = '';
}

function refresh() {
    document.getElementById('fragilityform').reset();
    document.getElementById('warning').innerHTML = '';
    document.getElementById('identification').innerHTML = '';
    document.getElementById('result').innerHTML = '';
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

    if(nome.value == '' || nome.value == ' ')
        document.getElementById('warning').innerHTML = '<div class="alert-danger"><strong>Por favor preencha o nome.</strong></div>';
    else if(Q1[0].checked && document.getElementById('C23b').value == ''){
        document.getElementById('warning').innerHTML = '<div class="alert-danger"><strong>Por favor preencha o campo Q1a.</stro></div>';
    }
    else if(error < 6)
        document.getElementById('warning').innerHTML = '<div class="alert-danger"><strong>Por favor preencha todos os campos!</stro></div>';
    else {
        fragilityCalculator();
    }
}

function fragilityCalculator() {
    var result = 0;
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var Q1 = document.getElementsByName('Q1');
    var Q2 = document.getElementsByName('Q2');
    var Q3 = document.getElementsByName('Q3');
    var Q4 = document.getElementsByName('Q4');
    var Q5 = document.getElementsByName('Q5');
    var Q6 = document.getElementsByName('Q6');

    document.getElementById('warning').innerHTML = '';
    document.getElementById('identification').innerHTML = '<h4>Nome: </h4><p id="result_nome"></p>\r\n' +
        '<h4>CPF: </h4><p id="result_cpf"></p>\r\n' +
        '<hr>';
    document.getElementById('result_nome').innerHTML = nome.value;
    document.getElementById('result_cpf').innerHTML = cpf.value;

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

    if(result == 0) {
        document.getElementById('result').innerHTML = '<div class="alert-success">Idoso <strong> Não frágil.</strong></div>';
    }
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