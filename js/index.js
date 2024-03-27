async function getDataFromPython() {
    document.getElementById('myeel').innerText = await eel.send_result()();
};

document.getElementById("mybtn").addEventListener('click', () => {
    getDataFromPython();
});

document.getElementById('sendbtn').addEventListener('click', async() => {
    myDropzone.removeAllFiles();
    myDropzone2.removeAllFiles();
});

document.querySelectorAll('.dropzone').forEach(function(dropzone) {
    dropzone.addEventListener('dragover', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
});


// Initialize Dropzone
Dropzone.autoDiscover = false;

var dropzoneConfig = {
    url: "/upload",
    uploadMultiple: false,
    maxFiles: 1,
    addRemoveLinks: true,
};
var myDropzone = new Dropzone("#before-upload", dropzoneConfig);

var myDropzone2 = new Dropzone("#after-upload", dropzoneConfig);

document.getElementById("CheckPathsButton").addEventListener("click", function() {
    myDropzone.files.forEach(function(file) {
        eel.send_data(file.name)
    });
    myDropzone2.files.forEach(function(file) {
        eel.send_data(file.name)
    });
});
