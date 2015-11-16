function validate_c23a() {
    document.getElementById("opt").innerHTML = '<div class="col-lg-12 field">\r\n' +
        '<p><strong>Q1a. </strong>Quantos quilos aproximadamente?</p>\r\n' +
        '<input type="float" name="Q1a" id="C23b" value=""/>\r\n' +
        '<hr>\r\n' +
        '</div>\r\n';
}

function refresh_c23a() {
    document.getElementById("opt").innerHTML = '';
}

function fragilityCalculator() {
    var result = 0;
    var frag;
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
    for(var i = 0; i < Q5.length; i++) {
        if(Q5[i].checked)
            result += Number(Q5[i].value);
    }
    for(var i = 0; i < Q6.length; i++) {
        if(Q6[i].checked)
            result += Number(Q6[i].value);
    }

    if(result == 0)
        frag = 'Não frágil';
    else if(result == 1 || result == 2)
        frag = 'Pré-frágil';
    else frag = 'Frágil';

    window.alert(frag);
}