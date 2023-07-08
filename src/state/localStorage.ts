export interface ToDoType {
    id?: number,
    name: string,
    checked?: boolean,
}

export function getTodoList(storage: string): ToDoType[] {
    const data = localStorage.getItem(storage);
    let returnData: ToDoType[];
    if (data == null) {
        return null;
    } else {
        // parse data
        const dataArray = data.split('~');
        let j = 1;
        for (let i = 0; i < (dataArray.length / 2); i++) {
            returnData[i] = {
                id: i,
                name: dataArray[j],
            }
        }
        j += 2;
    }
    return returnData;
}

export function saveToDoList(storage: string, list: ToDoType[]) {
    let output: string;
    for (let i = 0; i < list.length; i++) {
        output.concat(list[i].name + ',');
        output.concat(list[i].checked ? '1' : '0');
        if (i != list.length - 1) { output.concat(','); }
    }
}