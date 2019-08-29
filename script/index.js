import { initControls } from './Controller.js';
import { restoreNotes } from './NoteStorage.js';
import { initViewHandler } from './ViewHandler.js';
import { showNotes } from './ViewModel.js';

window.onload = () => {
    initViewHandler();
    restoreNotes();
    initControls();
    showNotes();
};
