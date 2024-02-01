tinymce.init({
    selector: "textares#text-editor",
    pluggins: "lists link image table code help wordcount",
    setup:
    function(editor){
        editor.on('click', function() {
            document.getElementById("preview").innerHTML = edit.getContent();
        });
        editor.on('keyup', function() {
            document.getElementById("preview").innerHTML = edit.getContent();
        });
    }
    // editoriaus konfiguraccija
})