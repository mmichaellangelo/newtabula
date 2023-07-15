import { writable } from "svelte/store";

export function persistable(key, defaultValue) {
    let currentValue = defaultValue;
    const { subscribe, set, update } = writable(defaultValue);
    try {
        getTodoList(key).then(persisted => {
            if (persisted && persisted.value !== undefined) {
                currentValue = persisted.value;
                set(persisted.value);
            }
        })
    } catch (error) {
        console.error(error);
    }
}