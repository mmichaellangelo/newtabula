import type { ToDoType } from "./localStorage";

const DBOpenRequest = window.indexedDB.open("todo");

DBOpenRequest.onerror = (event) => {
    console.error("Error loading database.");
}

DBOpenRequest.onsuccess = (event) => {
    console.info("Database initialized.");
    const db = DBOpenRequest.result;
}

export function saveState(data: ToDoType[]) {

}

export function loadState(): ToDoType[] {

}
