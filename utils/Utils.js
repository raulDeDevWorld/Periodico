
function getDate (setUserDate) {

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date();
    
    return setUserDate(`${date.getDate()}-${months[date.getMonth()]}-${date.getUTCFullYear()}`)
    
}

export {getDate}