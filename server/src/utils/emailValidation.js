const emailV = function validacaoEmail(field) {
    usuario = field.substring(0, field.indexOf("@"));
    dominio = field.substring(field.indexOf("@") + 1, field.length);

    if ((usuario.length >= 1) && (dominio.length >= 3) &&
        (usuario.search("@") == -1) && (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true
    }
    else {
        return false
    }
}

module.exports = emailV