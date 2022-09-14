let saveFile = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    

    let data =
        '\r Name: ' + name.value + '\r\n' +
        '\r Email: ' + email.value + '\r\n'

    const textToBLOB = new Blob([data], {type: 'text/plain'});
    const sFileName = 'formData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if(window.webkitURL != null){
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}

//Thanks to Arun Banik for his tutorial on creating file structures from forms
//https://www.encodedna.com/javascript/how-to-save-form-data-in-a-text-file-using-javascript.htm