// Script simples e direto para o portfólio

// 1. Efeito suave nos links do menu
document.addEventListener('DOMContentLoaded', function() {
    
    // Animação suave nos botões das redes sociais
    const botoes = document.querySelectorAll('.apresentacao_links_dos_botoes');
    
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // 2. Mensagem motivacional que aparece depois de um tempo
    setTimeout(() => {
        const mensagem = document.createElement('div');
        mensagem.innerHTML = '💡 Dica: Confira meus projetos no GitHub!';
        mensagem.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--cor-principal);
            color: black;
            padding: 15px;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(34, 212, 253, 0.4);
            z-index: 1000;
            animation: slideIn 0.5s ease;
        `;
        
        // CSS da animação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(mensagem);
        
        // Remove a mensagem depois de 5 segundos
        setTimeout(() => {
            mensagem.style.animation = 'slideIn 0.5s ease reverse';
            setTimeout(() => mensagem.remove(), 500);
        }, 5000);
        
    }, 3000);
    
    // 3. Efeito na foto principal
    const foto = document.querySelector('.imagem_principal');
    if (foto) {
        foto.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.1)';
            this.style.transition = 'filter 0.3s ease';
        });
        
        foto.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) contrast(1)';
        });
    }
    
    console.log('✨ Site carregado com sucesso!');
});

// 4. Hora atual no footer (só porque é legal)
function atualizarHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-BR');
    
    // Adiciona a hora no footer se não existir
    const rodape = document.querySelector('.rodape p');
    if (rodape && !rodape.innerHTML.includes('|')) {
        rodape.innerHTML += ` | ${hora}`;
    }
}

// Atualiza a hora a cada minuto
setInterval(atualizarHora, 60000);
atualizarHora(); // Chama uma vez ao carregar