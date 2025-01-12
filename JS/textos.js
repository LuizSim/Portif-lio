document.addEventListener('DOMContentLoaded', () => {
    const homeDescription = document.getElementById('homeDC');
    const homeFEDescription = document.getElementById('homeFE');
    const baixoDescription = document.getElementById('baixoHM');
    const TC1Description = document.getElementById('TC1');
    const TC2Description = document.getElementById('TC2');
    const CCDescription = document.getElementById('CC?');
    const CC2Description = document.getElementById('CC2');
    const FDTDescription = document.getElementById('FDT');

    // homeDC
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/home.txt', homeDescription);

    // homeFE
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/home2.txt', homeFEDescription);

    // baixoHM
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/baixohome.txt', baixoDescription)

    // textoC1
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/textoc1.txt', TC1Description);



    // textoC1
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/textoc2.txt', TC2Description);



    // CC?
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/comocomecei.txt', CCDescription);

    // CC2
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/ccfoto.txt', CC2Description);

    // FDT
    function loadTextFromFile(filePath, element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                element.textContent = text;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo:', error);
            });
    }

    loadTextFromFile('./TXT/textofinal.txt', FDTDescription);

});