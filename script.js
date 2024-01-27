<script>
    function enviarDados() {
        // Obter os dados do formulário
        var formData = new FormData(document.getElementById('cadastroForm'));

        // Criar um objeto com os dados do FormData
        var formDataObject = {};
        formData.forEach(function(value, key){
            formDataObject[key] = value;
        });

        // Enviar os dados para a API do SheetDB usando Fetch
        fetch('https://sheetdb.io/api/v1/02ipcqrt0jjl7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Dados enviados com sucesso:', data);
            alert('Dados enviados com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados. Por favor, tente novamente.');
        });
    }
</script>
