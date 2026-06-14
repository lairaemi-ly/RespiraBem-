let sintomasSelecionados = [];
let causaSelecionada = "";
let intensidadeSelecionada = "";

document.querySelectorAll(".card-sintoma").forEach(card => {

    card.addEventListener("click", () => {

        const sintoma = card.dataset.sintoma;

        card.classList.toggle("selecionado");

        if (sintomasSelecionados.includes(sintoma)) {

            sintomasSelecionados =
                sintomasSelecionados.filter(s => s !== sintoma);

        } else {

            sintomasSelecionados.push(sintoma);

        }

    });

});

document.querySelectorAll(".card-causa").forEach(card => {

    card.addEventListener("click", () => {

        document.querySelectorAll(".card-causa")
            .forEach(c => c.classList.remove("selecionado"));

        card.classList.add("selecionado");

        causaSelecionada = card.dataset.causa;

    });

});

document.querySelectorAll(".card-intensidade").forEach(card => {

    card.addEventListener("click", () => {

        document.querySelectorAll(".card-intensidade")
            .forEach(c => c.classList.remove("selecionado"));

        card.classList.add("selecionado");

        intensidadeSelecionada = card.dataset.intensidade;

    });

});

const btnOrientacao = document.querySelector(".btn-orientacao");

if(btnOrientacao){

    btnOrientacao.addEventListener("click", function(event){

    event.preventDefault();

    let resultado = intensidadeSelecionada;

    if (
        sintomasSelecionados.includes("falta-ar") ||
        sintomasSelecionados.includes("inchaco")
    ) {

        resultado = "grave";

    }

    localStorage.setItem("resultado", resultado);
    localStorage.setItem(
        "sintomas",
        JSON.stringify(sintomasSelecionados)
    );
    localStorage.setItem("causa", causaSelecionada);

    window.location.href = "orientacao.html";

});
}
if(document.getElementById("titulo-resultado"))
{

const resultado = localStorage.getItem("resultado");

const titulo = document.getElementById("titulo-resultado");
const texto = document.getElementById("texto-resultado");

const fazer = document.getElementById("lista-fazer");
const evitar = document.getElementById("lista-evitar");
const atendimento = document.getElementById("lista-atendimento");

const cardResultado = document.getElementById("resultado-card");
const botaoFinal = document.getElementById("botao-final");

if(resultado === "grave"){

    titulo.textContent = "Sintomas Graves";

    texto.textContent =
    "Os sintomas podem indicar uma reação alérgica grave. Procure atendimento médico imediatamente.";

    fazer.innerHTML = `
        <li>Procure atendimento médico imediatamente.</li>
        <li>Acione serviços de emergência se necessário.</li>
        <li>Mantenha-se acompanhado.</li>
        <li>Permaneça em posição confortável para respirar.</li>
        <li>Informe aos profissionais de saúde a possível causa da reação.</li>
        <li>Mantenha a calma enquanto busca ajuda.</li>
    `;

    evitar.innerHTML = `
        <li>Não ignore os sintomas.</li>
        <li>Não permaneça sozinho.</li>
        <li>Não realize esforço físico.</li>
        <li>Não espere os sintomas desaparecerem sozinhos.</li>
    `;

    atendimento.innerHTML = `
        <li>Procure atendimento imediatamente.</li>
        <li>Principalmente se houver falta de ar.</li>
        <li>Principalmente se houver inchaço no rosto, língua ou garganta.</li>
        <li>Em qualquer situação de agravamento rápido.</li>
    `;

    cardResultado.classList.add("resultado-grave");

    botaoFinal.innerHTML = `
        <a href="emergencia.html">
            <button class="btn-final">
                Ir para emergência
            </button>
        </a>
    `;

}else if(resultado === "moderada"){

    titulo.textContent = "Sintomas Moderados";

    texto.textContent =
    "Os sintomas merecem atenção. É importante seguir as orientações e acompanhar qualquer mudança no seu estado.";

    fazer.innerHTML = `
        <li>Afaste-se imediatamente do possível causador.</li>
        <li>Mantenha-se em local ventilado.</li>
        <li>Permaneça em repouso.</li>
        <li>Peça ajuda a alguém de confiança se necessário.</li>
        <li>Monitore a evolução dos sintomas.</li>
        <li>Considere buscar avaliação médica.</li>
    `;

    evitar.innerHTML = `
        <li>Não continue exposto ao causador da reação.</li>
        <li>Evite exercícios físicos.</li>
        <li>Não utilize medicamentos sem orientação adequada.</li>
        <li>Não ignore pioras dos sintomas.</li>
    `;

    atendimento.innerHTML = `
        <li>Se os sintomas aumentarem.</li>
        <li>Se houver dificuldade para realizar atividades normais.</li>
        <li>Se surgirem sinais de inchaço.</li>
        <li>Se ocorrer qualquer dificuldade respiratória.</li>
    `;

    cardResultado.classList.add("resultado-moderada");

    botaoFinal.innerHTML = `
        <a href="atendimento.html">
            <button class="btn-final">
                Ver atendimento próximo
            </button>
        </a>
    `;

}else{

    titulo.textContent = "Sintomas Leves";

    texto.textContent =
    "Os sintomas indicam uma reação leve. Siga as orientações abaixo e monitore sua condição.";

    fazer.innerHTML = `
        <li>Afaste-se do possível causador da reação.</li>
        <li>Mantenha-se em ambiente limpo e arejado.</li>
        <li>Beba água regularmente.</li>
        <li>Observe a evolução dos sintomas.</li>
        <li>Descanse e evite esforço excessivo.</li>
        <li>Mantenha a pele e os olhos limpos caso haja irritação.</li>
    `;

    evitar.innerHTML = `
        <li>Evite contato com o agente que causou a reação.</li>
        <li>Não utilize produtos irritantes na pele.</li>
        <li>Evite exposição prolongada à poeira ou fumaça.</li>
        <li>Não ignore pioras nos sintomas.</li>
    `;

    atendimento.innerHTML = `
        <li>Se os sintomas persistirem por muitas horas.</li>
        <li>Se surgirem novos sintomas.</li>
        <li>Se houver aumento da intensidade da reação.</li>
        <li>Se você tiver dúvidas sobre sua condição.</li>
    `;

    cardResultado.classList.add("resultado-leve");

    botaoFinal.innerHTML = `
        <a href="atendimento.html">
            <button class="btn-final">
                Ver atendimento próximo
            </button>
        </a>
    `;
}
}
document.addEventListener("DOMContentLoaded", () => {
    
    initCardHighlighter();
    initSymptomTogglable();
});


function initCardHighlighter() {
    const cards = document.querySelectorAll(".card-alergia");

    cards.forEach(card => {
        card.addEventListener("click", (event) => {

            if (event.target.tagName === 'BUTTON') return;

           
            const isActive = card.classList.contains("is-active");

            
            cards.forEach(c => c.classList.remove("is-active"));

           
            if (!isActive) {
                card.classList.add("is-active");
            }
        });
    });
}


function initSymptomTogglable() {
    const cards = document.querySelectorAll(".card-alergia");

    cards.forEach(card => {
        
        const paragraphs = card.querySelectorAll("p");
        let labelSintomas = null;

        
        paragraphs.forEach(p => {
            if (p.textContent.toLowerCase().includes("sintomas")) {
                labelSintomas = p;
            }
        });

        if (labelSintomas) {
            const listaSintomas = labelSintomas.nextElementSibling;

            if (listaSintomas && listaSintomas.tagName === "UL") {

                listaSintomas.classList.add("is-collapsed");
                labelSintomas.style.display = "none";

                
                const toggleBtn = document.createElement("button");
                toggleBtn.innerText = "🔍 Ver Mais";
                
                
                toggleBtn.style.background = "var(--color-primary-light)";
                toggleBtn.style.color = "var(--color-primary)";
                toggleBtn.style.border = "none";
                toggleBtn.style.padding = "8px 12px";
                toggleBtn.style.borderRadius = "6px";
                toggleBtn.style.cursor = "pointer";
                toggleBtn.style.fontWeight = "500";
                toggleBtn.style.marginTop = "10px";
                toggleBtn.style.width = "100%";
                toggleBtn.style.transition = "background 0.2s";

               
                toggleBtn.addEventListener("mouseover", () => toggleBtn.style.background = "#d4ecf9");
                toggleBtn.addEventListener("mouseout", () => toggleBtn.style.background = "var(--color-primary-light)");

                
                card.appendChild(toggleBtn);

               
                toggleBtn.addEventListener("click", (e) => {
                    e.stopPropagation(); 
                    
                    const isHidden = listaSintomas.classList.contains("is-collapsed");
                    
                    if (isHidden) {
                        listaSintomas.classList.remove("is-collapsed");
                        toggleBtn.innerText = "✨ Ocultar Sintomas";
                        toggleBtn.style.background = "#eefcf2";
                        toggleBtn.style.color = "var(--color-accent)";
                    } else {
                        listaSintomas.classList.add("is-collapsed");
                        toggleBtn.innerText = "🔍 Ver Sintomas";
                        toggleBtn.style.background = "var(--color-primary-light)";
                        toggleBtn.style.color = "var(--color-primary)";
                    }
                });
            }
        }
    });
}