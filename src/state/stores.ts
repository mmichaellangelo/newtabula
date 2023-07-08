import { writable } from "svelte/store";
import type { ToDoType } from "./localStorage";

function createToDoStore() {
    const { subscribe, set, update } = writable<ToDoType[]>([]);

    let id = -1;

    return {
        subscribe,
        check: (index: number) => update((values) => {
            const newValues = [...values];
            newValues[index].checked = !newValues[index].checked;
            return newValues;
        }),
        add: (item: ToDoType) => {
            const newItem = { name: item.name, id: ++id, checked: false };
            update((items) => [...items, newItem]);
        }
    }

}

export const ToDoStore = createToDoStore();