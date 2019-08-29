import { addNote, clearStorage } from './NoteStorage.js';
import { noteHeaderInput,
         noteDescInput,
         notePrtyInput,
         addNoteOverlay } from './ViewHandler.js';
import { showNotes } from './ViewModel.js';

export function initControls() {
    document.getElementById('add-note').onclick = () => {
        noteHeaderInput().value = '';
        noteDescInput().value = '';
        notePrtyInput().value = notePrtyInput().min;
        addNoteOverlay().hidden = false;
    };
    document.getElementById('delete-all').onclick = () => {
        clearStorage();
        showNotes();
    };
    document.getElementById('cancel-add').onclick = () => {
        addNoteOverlay().hidden = true;
    };
    document.getElementById('apply-add').onclick = () => {
        addNote({
            title: noteHeaderInput().value,
            desc: noteDescInput().value,
            prty: notePrtyInput().value
        });
        showNotes();
        addNoteOverlay().hidden = true;
    };
}
