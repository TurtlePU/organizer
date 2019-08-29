var ViewHandler = {
    /** @type {HTMLOListElement} */
    noteList: undefined,
    /** @type {HTMLTemplateElement} */
    noteTemplate: undefined,
    /** @type {HTMLDivElement} */
    addNoteOverlay: undefined,
    /** @type {HTMLInputElement} */
    noteHeaderInput: undefined,
    /** @type {HTMLInputElement} */
    noteDescInput: undefined,
    /** @type {HTMLInputElement} */
    notePrtyInput: undefined,
};

export function initViewHandler() {
    let $ = id => document.getElementById(id);
    ViewHandler = Object.freeze({
        noteList: $('note-list'),
        noteTemplate: $('note-template'),
        addNoteOverlay: $('add-note-overlay'),
        noteHeaderInput: $('note-header'),
        noteDescInput: $('note-desc'),
        notePrtyInput: $('note-prty')
    });
}

export function noteList() {
    return ViewHandler.noteList;
}

export function noteTemplate() {
    return ViewHandler.noteTemplate;
}

export function addNoteOverlay() {
    return ViewHandler.addNoteOverlay;
}

export function noteHeaderInput() {
    return ViewHandler.noteHeaderInput;
}

export function noteDescInput() {
    return ViewHandler.noteDescInput;
}

export function notePrtyInput() {
    return ViewHandler.notePrtyInput;
}
