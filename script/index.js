const STORAGE_KEY = 'notes';

/** @type {HTMLOListElement} */
var note_list;
/** @type {HTMLTemplateElement} */
var note_template;

/** @type {HTMLDivElement} */
var add_note_overlay;

/** @type {HTMLInputElement} */
var note_header_input;
/** @type {HTMLInputElement} */
var note_desc_input;
/** @type {HTMLInputElement} */
var note_prty_input;

/** @type {{ title: string, desc: string, prty: string }[]} */
var notes;

window.onload = () => {
    init_vars();
    init_controls();
    show_notes();
};

function init_vars() {
    note_list = document.getElementById('note-list');
    note_template = document.getElementById('note-template');

    add_note_overlay = document.getElementById('add-note-overlay');

    note_header_input = document.getElementById('note-header');
    note_desc_input = document.getElementById('note-desc');
    note_prty_input = document.getElementById('note-prty');

    notes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function init_controls() {
    document.getElementById('add-note').onclick = () => {
        reset_input();
        add_note_overlay.hidden = false;
    };
    document.getElementById('delete-all').onclick = () => {
        notes = [];
        localStorage.removeItem(STORAGE_KEY);
        show_notes();
    };
    document.getElementById('cancel-add').onclick = () => {
        add_note_overlay.hidden = true;
    };
    document.getElementById('apply-add').onclick = () => {
        add_note();
        show_notes();
        add_note_overlay.hidden = true;
    };
}

function add_note() {
    notes.push({
        title: note_header_input.value,
        desc: note_desc_input.value || '',
        prty: note_prty_input.value || '0'
    });
    notes.sort(comparator);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function reset_input() {
    note_header_input.value = '';
    note_desc_input.value = '';
    note_prty_input.value = note_prty_input.min;
}

function show_notes() {
    note_list.innerHTML =
        notes.map(note => `
            <li>
                <p><strong>${note.title}</strong> ${note.desc} <em>${note.prty}</em></p>
            </li>
        `)
        .reduce((acc, curr) => acc + curr, '');
}

/**
 * Compares two notes.
 * @param {{ title: string, desc: string, prty: string }} a 
 * @param {{ title: string, desc: string, prty: string }} b 
 * @returns {number}
 */
function comparator(a, b) {
    return (+a.prty) - (+b.prty) ||
           a.title.localeCompare(b.title) ||
           a.desc.localeCompare(b.desc);
}
