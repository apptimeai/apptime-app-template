document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Funcionalidade utilitária: Alternar tela cheia ao clicar
  // Isso transforma o dispositivo em uma superfície preta pura
  body.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Erro ao ativar tela cheia: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  console.log('Modo Zen ativado. Clique para imersão total.');
});
