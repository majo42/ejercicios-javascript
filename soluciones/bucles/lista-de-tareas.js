const tareas = [];
let programaFinalizado = false;

while(!programaFinalizado) {
  let opcion = prompt(`Ingrese una opción:
    - AGREGAR TAREA
    - MODIFICAR TAREA
    - ELIMINAR TAREA
    - VER TAREAS
    - SALIR
  `);
  
  switch(opcion) {
    case 'AGREGAR TAREA':
      let tarea = prompt('Ingrese una tarea');
      tareas.push(tarea);
      break;
    case 'MODIFICAR TAREA':
      let tareaAModificar = Number(prompt('Ingrese número de tarea a modficar');
      if (tareas[tareaAModificar]) {
        let modificacion = prompt('La tarea actual es: "${tareas[tareaAModificar]}". Ingrese la modificación:');
        tareas[tareaAModificar] = modificacion;
      } else {
        alert('Tarea no encontrada');
      }
      break;
    case 'ELIMINAR TAREA':
      let tareaAEliminar = Number(prompt('Ingrese número de tarea a eliminar');
      if (tareas[tareaAEliminar]) {
        const elimina = confirm('La tarea a eliminar es: "${tareas[tareaAModificar]}". Realmente desea eliminarla?');
        if (elimina) {
          elimina.splice(tareaAEliminar, 1);
        }
      } else {
        alert('Tarea no encontrada');
      }
      break;
    case 'VER TAREAS':
      let listaDeTareas = 'TAREAS:\n';
      for (let i = 0; i < tareas.length; i++) {
        listaDeTareas = `[${i}] "tareas[i]" \n`;
      }
      alert(listaDeTareas);
      break;
    case 'SALIR':
      const finaliza = confirm('Realmente desea finalizar el programa?');
      if (finaliza) {
        programaFinalizado = true;
      }
      alert('Gracias por usar nuestro programa');
      break;
    default:
      alert('Ingrese una opción correcta');
  } 
}
