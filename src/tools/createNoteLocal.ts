export const createNoteLocal = (data: {title:string, description:string}) => {
    if(window.localStorage.getItem("notes")) {
        const notes = JSON.parse(window.localStorage.getItem("notes"));
        notes.push(data);
        const stringNotes = JSON.stringify(notes)
        window.localStorage.setItem('notes', stringNotes);
        return;
    }
    const note = [data];
    const stringNotes = JSON.stringify(note);
    window.localStorage.setItem('notes', stringNotes);
}