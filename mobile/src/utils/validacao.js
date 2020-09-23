const valida = function (data) {
    if ((data.name.length == 0) || (data.email .length == 0) ||
        (data.password.length <= 5) || (data.dtnasc .length == 0) ||
        (data.sexo == 0) || (data.peso.length == 0) ||
        (data.altura.length == 0) || (data.peso == 0) ||
        (data.altura == 0)
    ) {
        return false
    }
    
    if ((data.peso.search(' ') != -1) || (data.peso.search('-') != -1) ||
        (data.peso.search(',') != -1) || (data.altura.search(' ') != -1) || 
        (data.altura.search('-') != -1) || (data.altura.search(',') != -1)
    ) {
        return false 
    } else return true
    
}

module.exports = valida