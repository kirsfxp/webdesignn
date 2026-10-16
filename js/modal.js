const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (form.checkValidity()) {

        const modal =
            new bootstrap.Modal(
                document.getElementById("successModal")
            );

        modal.show();

    } else {

        form.reportValidity();

    }

});