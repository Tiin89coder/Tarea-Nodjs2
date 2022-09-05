import mysql  from 'mysql'
var conectar = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Gettherefast89',
    database : 'db_estudiantes_umg',
    port : '3307'
});
conectar.connect( function (err) {
    if(err) {
        console.error('Error en la conexion ' + err.stack);
        return;
    }
    console.log('Conexion exitosa ID:' + conectar.threadId);

});
export {conectar}