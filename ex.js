function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'pessoas/criancaM.jpg')
            }
            else if (idade >= 13 && idade < 18) {
                img.setAttribute('src', 'pessoas/adolecenteM.jpg')

            }
            else if (idade >= 18 && idade < 67) {
                img.setAttribute('src', 'pessoas/adulto.jpg')
            }

            else {
                img.setAttribute('src', 'pessoas/idoso.jpg')
            }
        }


        else if (fsex[1].checked) {
            genero = 'Mulher'


            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'pessoas/criancaF.jpg')
            }

            else if (idade >= 13 && idade < 18) {
                img.setAttribute('src', 'pessoas/adolecenteF.jpg')
            }

            else if (idade >= 18 && idade < 67) {
                img.setAttribute('src', 'pessoas/adulta.jpg')
            }

            else {
                img.setAttribute('src', 'pessoas/idosa.jpg')
            }
        }
        // img.style.boxShadow = '-5px 10px 10px 10px  rgb(127, 139, 206)'
        img.style.borderRadius = '100px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos.<br>`
        res.appendChild(img)
    }
}