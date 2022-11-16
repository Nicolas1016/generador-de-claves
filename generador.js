


var contraseña = document.getElementById('contraseña')
    function GenerarContraseña() {
        var caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var contraseñaLenght = 12 
        var contraseña = ''
        for (var i = 0; i <= contraseñaLenght; i++ ) {
            var randomNumber = Math.floor(Math.random() * caracteres.length )
            contraseña += caracteres.substring(randomNumber, randomNumber +1)
        }
        document.getElementById('contraseña').value = contraseña
    }

    function CopiarContraseña(){
        var copiarTexto = document.getElementById('contraseña')
        copiarTexto.select()
        copiarTexto.setSelectionRange(0,999)
        document.execCommand('copy')
    }