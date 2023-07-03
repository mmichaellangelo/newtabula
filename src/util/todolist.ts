/*--- exports ----------------*/

export function getToDo(): string[] {
    const decoded = decodeToDo(localStorage.getItem("todo"));
    return decoded;
}

export function setToDo(todo) {
    if (localStorage.getItem("todo") == todo) {
        return;
    } else {
        let encodedToDo = encodeToDo(todo);
        localStorage.setItem("todo", encodedToDo);
    }
  }

  /*--- util fn ----------------*/
  
  function encodeToDo(todo) {
    let encoded = "";
  
    for (let i = 0; i < todo.length; i++) {
      encoded.concat(todo[i][0] + ':' + todo[i][1]);
      if (i != todo.length - 1) {
        encoded.concat(":");
      }
    }
  
    return encoded;
  }
  
  function decodeToDo(todo) {
    if (todo == null || todo == undefined) {
        return;
    } else {
        const todoArray = todo.split(":")
        let formattedArray
        for (let i = 0; i < todoArray.length; i+=2) {
        formattedArray[i][i+1] = [todoArray[i]][todoArray[i+1]]
        }
        return formattedArray;
    }
    
  }