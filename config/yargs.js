const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        },
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('borrar', 'Borra una tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripción de la tarea por hacer'
            }
        }

    )
    .help()
    .argv;

module.exports = {
    argv
}