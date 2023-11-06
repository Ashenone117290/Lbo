document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    const messageDiv = document.getElementById("message");

    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(uploadForm);

        fetch("upload.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    messageDiv.innerHTML = "Reseña de libro subida con éxito.";
                    uploadForm.reset();
                } else {
                    messageDiv.innerHTML = "Error: " + data.message;
                }
            })
            .catch((error) => {
                messageDiv.innerHTML = "Error: " + error.message;
            });
    });
});
