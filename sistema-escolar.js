let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function salvarStorage() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function adicionarAluno() {
    const nome = document.getElementById("nome").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const media = ((nota1 + nota2) / 2).toFixed(1);

    alunos.push({
        nome,
        nota1,
        nota2,
        media
    });

    salvarStorage();
    limparCampos();
    renderizarAlunos();
}

function renderizarAlunos() {
    const tabela = document.getElementById("tabelaAlunos");
    tabela.innerHTML = "";

    alunos.forEach((aluno, index) => {
        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.media}</td>
                <td>
                    <button class="delete" onclick="removerAluno(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

function removerAluno(index) {
    alunos.splice(index, 1);
    salvarStorage();
    renderizarAlunos();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}

renderizarAlunos();