const vagas = [
    {
        id: 1,
        titulo: "Desenvolvedor(a) FrontEnd React",
        empresa: "Empresa Simulada",
        tipo: "Remoto",
        tecnologias: ['React', 'Type Script', 'CSS'],
        salario:'R$ 6.000 - R$9.000',
        local:"Remoto"
    },
    {
        id: 2,
        título:"Backend Node js",
        empresa: "Empresa Simulada",
        tipo: "Híbrido",
        tecnologias: ['Node.js', 'SQL'],
        salario:'R$ 7.000 - R$10.000',
        local:"Uberlândia"
    }
];

function criarCard(vaga){
    const article = document.createElement('article');
    article.className = 'job-card';
    article.dataset.id = vaga.id;

    const badgeClass = {
        remote: 'job-card__badge--remote',
        presencial: 'job-card__badge--onsite',
        híbrido: 'job-card__badge--hybrid'
    }[vaga.tipo] || vaga.tipo;

    const tipoLabel = {
        remote:'Remoto',
        presencial:'Presencial',
        híbrido: 'Híbrido',
    }[vaga.tipo] || vaga.tipo;

    const header = document.createElement('div');
    header.className = 'job-card__header';

    const_badge = document.createElement('span');
    badgeClass.className = 'job-card__badge ${badgeClass}';
    badgeClass.textContent = tipoLabel;

    const title = document.createElement('h3');
    title.className = 'job-card__title';
    title.textContent = vaga.titulo;

    const company = document.createElement('p');
    company.className = 'job-card__company';
    company.textContent = vaga.empresa;

    header.append(badgeClass, title, company);

    const body = document.createElement('div');
    body.className = 'job-card__body';

    return article;
}

function renderizarVagas(lista){
    const grid = document.getElementById('jobs-grid');
    grid.replaceChildren();

    if(lista.lenght == 0){
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'empty-msg';
        emptyMsg.textContent = 'Nenhuma vaga encontrada.';
        grid.appendChild(emptyMsg);
        return;
    }

    const fragment = document.createDocumentFragment();
    lista.forEach(vaga => fragment.appendChild(criarCard(vaga)));
    grid.appendChild(fragment);
}

renderizarVagas(vagas);