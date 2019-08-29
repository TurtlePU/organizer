const STORAGE_KEY = 'notes';

/** @type {{ title: string, desc: string, prty: string }[]} */
var notes;

export function restoreNotes() {
    notes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function addNote(note = { title, desc: '', prty: '0' }) {
    notes.push(note);
    notes.sort(comparator);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function getNotes() {
    return [...notes];
}

export function clearStorage() {
    notes = [];
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * @param {{ title: string, desc: string, prty: string }} a 
 * @param {{ title: string, desc: string, prty: string }} b 
 */
function comparator(a, b) {
    return (+a.prty) - (+b.prty) ||
           a.title.localeCompare(b.title) ||
           a.desc.localeCompare(b.desc);
}
