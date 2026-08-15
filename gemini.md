# Constituição do Projeto - MP3 Player Binaural Ultra Minimalista

Este documento define os esquemas de dados, regras comportamentais e invariantes arquiteturais do projeto de MP3 Player Binaural.

## 1. Esquema de Dados (JSON Data Schema)

### Estrutura dos Áudios Disponíveis (Interno)
```json
[
  {
    "id": "anti-gynecomastia",
    "title": "Anti-Gynecomastia",
    "description": "Complex Binaural Production (Estrogen & Prolactin Reduction)",
    "file": "audios/- ANTI - GYNECOMASTIA - Complex Binaural Production (Estrogen _ Prolactin Reduction)(MP3_320K).mp3"
  },
  {
    "id": "bpc-157",
    "title": "BPC 157",
    "description": "Cure-All Compound & Healing Binaural Beats (Body & Mind Recovery)",
    "file": "audios/- BPC 157 - _ Cure-All Compound _ Healing Binaural Beats (Body _ Mind Recovery)(MP3_320K).mp3"
  },
  {
    "id": "estrogen-reducer",
    "title": "Estrogen Reducer",
    "description": "Binaural Isochronic (Aromatase Inhibitor_ Higher Testosterone_ Lower Estrogen)",
    "file": "audios/- ESTROGEN REDUCER - Binaural Isochronic (Aromatase Inhibitor_ Higher Testosterone_ Lower Estrogen)(MP3_320K).mp3"
  },
  {
    "id": "androgen-receptors",
    "title": "Androgen Receptors",
    "description": "Forcefully Sensitized ANDROGEN RECEPTORS - Binaural Steroids Effect (Accelerated Anabolic)",
    "file": "audios/- Forcefully Sensitized ANDROGEN RECEPTORS - Binaural Steroids Effect (Accelerated Anabolic Effects)(MP3_320K).mp3"
  },
  {
    "id": "trenbolone",
    "title": "Trenbolone",
    "description": "Binaural Steroids Effect (Massive Muscle Growth, Increased Strength, Vascularity)",
    "file": "audios/- TRENBOLONE - Binaural Steroids Effect - (Massive Muscle Growth_ Increased Strength_ Vascularity)(MP3_320K).mp3"
  },
  {
    "id": "stanozolol",
    "title": "Stanozolol (Winstrol)",
    "description": "Binaural Steroids Effect - Lean & Defined Muscles",
    "file": "audios/STANOZOLOL (Winstrol) _ Binaural Steroids Effect _ Lean _ Defined Muscles(MP3_320K).mp3"
  },
  {
    "id": "gorilla-stack",
    "title": "🦍 Gorilla Stack 3.0",
    "description": "ULTIMATE BULKING PROTOCOL - Massive Muscle Growth",
    "file": "audios/🦍  GORILLA STACK 3.0 _ ULTIMATE BULKING PROTOCOL _ Massive Muscle Growth(MP3_320K).mp3"
  },
  {
    "id": "framedoorsmaxxing",
    "title": "🦴 Framedoorsmaxxing Protocol",
    "description": "70 Benefits - Massive & Muscular Frame, Huge Rib Cage and More",
    "file": "audios/🦴[ 70 Benefits] FRAMEDOORSMAXXING PROTOCOL _ Massive _ Muscular Frame_ Huge Rib Cage and More_(MP3_320K).mp3"
  }
]
```

### Estrutura das Imagens de Background (Interno)
As imagens estão localizadas na pasta `BACKGROUND IMAGES` e serão rotacionadas de forma fluida ou alteradas pelo usuário com transições cinematográficas.

## 2. Regras Comportamentais

- **Ultra Glassmorphism:** O design deve ser minimalista e com forte efeito de vidro (backdrop-filter: blur, bordas semi-transparentes claras, sombras suaves, fundo gradiente orgânico com as imagens fornecidas).
- **Controle Simultâneo:** O usuário tem o direito de tocar múltiplos áudios ao mesmo tempo ou todos de uma vez. Não deve haver exclusão mútua de play entre as faixas, a menos que o usuário clique em pausar especificamente.
- **Aceleração 5x:** Cada faixa deve ter um controle deslizante de velocidade (playbackRate) variando de 0.5x a 5.0x com precisão.
- **Sistema de Amplificação Sem Distorção:** Um circuito de áudio Web Audio API contendo um GainNode para amplificar o som natural e um DynamicsCompressorNode (limitador) no final da cadeia para evitar clipping/distorção digital.
- **Visualização Equivalente:** O design deve ser exatamente idêntico e consistente tanto no celular quanto no desktop.
- **Transição Cinemática:** Mudanças de faixa, play/pause e trocas de background devem usar transições suaves (fade, blur, transformações em CSS).

## 3. Invariantes Arquiteturais

- O app deve ser construído usando HTML5 semântico, CSS3 (Vanilla) e JavaScript puro (ES6+).
- Nenhuma dependência externa pesada deve ser instalada.
- O Web Audio API gerenciará o roteamento de áudio para permitir amplificação controlada com limitador dinâmico.
