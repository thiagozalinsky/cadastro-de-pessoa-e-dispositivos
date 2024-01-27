<script>
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData);

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
    });
</script>
