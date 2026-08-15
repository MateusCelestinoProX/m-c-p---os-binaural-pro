// ==========================================================================
// BINAURAL LABS - MP3 PLAYER PRIVATE
// Integração Completa: Web Audio API + Supabase Backend + Backgrounds MCP OS
// ==========================================================================

const SUPABASE_URL = 'https://kbqxzmyasstdvvbfymft.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticXh6bXlhc3N0ZHZ2YmZ5bWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MTU5OTksImV4cCI6MjEwMjI5MTk5OX0.b9BVA-Uso6hoNc8Zhol8svV_JDV56j-FCjhUVaW5-8M';

let supabaseClient = null;
function getSupabase() {
  if (supabaseClient) return supabaseClient;
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseClient;
  }
  return null;
}

// --------------------------------------------------------------------------
// 1. GALERIAS DE BACKGROUNDS E VÍDEOS (DO SUPABASE / MCP OS)
// --------------------------------------------------------------------------
const GALLERIES = {
  gym: [
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/012f4996731b766a5f6fce9ae5fa16a0.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/04747ba8c86d370f14b19aff88c73f77.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/1-20260505_170907.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/2-20260327_135337.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/3-20260313_123924.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/416bb19b1eefa7c850b4db3cb09bac12_-_co_pia.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/4567a6460e49dca509404aa4031c11d2.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/9811449c83f06fc824d7a95f235d376e_-_co_pia.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/b3668afb13ab00288ff06c9d72453d19.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/c6081876648f7ce1a6e4734daa79e7d4.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/e5ef0ddde9b00540cdf18e4b226e0bee.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/eca2c6f16007ec99ca3c5058876b2af6.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/f4fcf6bb7808351828fbd6ed76cba496.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/gym/onboarding.jpg"
  ],
  flowers: [
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/59da96db902a205e9f90e651a4bcaa72.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/797d233401eae1b36818abc988af10d4.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/7f15501be01e3225966e2ab7fe1b735a.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/8e7943acb3073ec2e112542af9fcc2c6.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/a7a3a081d906882bcf9068afc3894eee.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/b268e4783280047be44e09f1fca7dec6.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/beb4c6ac11f067d61799142fe1a6e27d.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/flowers/e55174e6ec437489913f134318952c1e.jpg"
  ],
  red: [
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/08c3aa3a5c3631b23cec57233f5c365c.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/465148a473500d0bf6c3b9c83b98ec92.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/6c5d14bcb2f0390ee694119aa6704655.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/7361af8ac2d01d02c9752f89b3365d47.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/963a4bd9af77842586e2b4cdd53eb931.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/f8247f7bffb7269d9e3b2310844b330d.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/red/fb71f9cd02c7e3f7e41589d90f6fdaa8.jpg"
  ],
  soft: [
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/05f22143098023a6978520a73a77637e.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/142622f0d35efbffebc9b8a7995168dd.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/37c572ab0404204cb6f367c2a9f78a54.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/3e3b1728d96b733b8f3bbf418021dd42.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/69b55c9be40f117fd5f076d27334d2cf.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/6e86f5937cb8ef54593b94952a59d5a1.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/71acf6cb2cad2c986df87d817a06c33b.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/72859fb9ef398cd2a69777dc26d7d1d2.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/73ba35d0e4557dacaeb9ffaab42cd635.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/747c0ca848cc44632e4c94436348fe07.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/7b78f45b8a8f62b1cb9c7477d0b83f63.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/800c456fafbe63fae067663194fe47e9.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/8f432d4e77f909f3abccb186f47ffff3.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/b1cd9d06a79b40e08ff9b945cd051aab.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/b26f28a14964906204ec288ddf524432.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/bbf00645951aa952366c3a446a07c990.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/c4058aae27b4310eb2c979cf9f6a817d.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/e82d7e3487abb787a3398210d02801c8.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/f24ac251210bc82b90f9c33ce2438194.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/soft/f9f930471adfb299ae9ad2f9b319421b.jpg"
  ],
  motivation: [
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/1000427297.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/1000427303.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/1000427312.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/img_8287.jpeg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/img_9915.jpeg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/projetounohome_20260613_155750_319.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/projetounohome_20260613_155802_757.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/projetounohome_20260613_155833_559.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/projetounohome_20260613_155903_814.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/projetounohome_20260613_171838_541.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/vaideuno_20260613_155457_985.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/vaideuno_20260613_155513_639.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/vaideuno_20260613_170029_918.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/vaideuno_20260613_171916_766.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/welitonofc001-20260222-0004.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/welitonofc001-20260222-0049.jpg",
    "https://kbqxzmyasstdvvbfymft.supabase.co/storage/v1/object/public/binaural-backgrounds/motivation/welitonofc001-20260222-0097.jpg"
  ]
};

const CINEMATIC_VIDEOS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_031045_0e1165dd-ab48-46e3-ad3d-5fe77f217647.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_115139_0fc6bd3d-3631-4d26-ab9b-28293887dcc9.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4"
];

const GALLERIES_POOL = [
  "gym", "flowers", "red", "soft", "motivation", "api", "video", 
  "galaxybits", "strands", "siderays", "plasmawave", "ferrofluid", 
  "softaurora", "dither", "darkveil", "ancidsquares", "webthreads", 
  "balatro", "moltenmetal", "topography", "lighttunnel"
];

const webglTypes = [
  "strands", "siderays", "plasmawave", "ferrofluid", "softaurora", 
  "dither", "darkveil", "ancidsquares", "webthreads", "balatro", 
  "moltenmetal", "topography", "lighttunnel"
];

function getRandomGalleryFromPool() {
  return GALLERIES_POOL[Math.floor(Math.random() * GALLERIES_POOL.length)];
}

// --------------------------------------------------------------------------
// 2. ESTADO GLOBAL DO SISTEMA
// --------------------------------------------------------------------------
let currentUser = null;
let wallpaperCategory = localStorage.getItem('binaural_wallpaper_category') || 'random';
let currentBgIndex = 0;
let bgInterval = null;
let bgSpeed = parseInt(localStorage.getItem('binaural_speed')) || 10000;
let tracksData = [];

// Web Audio API State
let audioCtx = null;
let masterCompressorNode = null;
let analyserNode = null;
const audioSourcesMap = new Map();       // audioElement -> MediaElementAudioSourceNode
const trackVolumeNodesMap = new Map();   // trackId -> GainNode (Volume 0.0 - 1.0)
const trackBoostNodesMap = new Map();    // trackId -> GainNode (Booster 1.0 - 4.0)

// Fila de Downloads Supabase
let downloadQueue = [];
let isDownloadingQueue = false;

// Configuração do Limitador Master
const compressorConfig = {
  threshold: -3, // dB
  knee: 30,      // dB
  ratio: 20,     // Compressão alta
  attack: 0.003, // 3ms
  release: 0.15  // 150ms
};

// Elementos do DOM estáticos
const loginScreen = document.getElementById('login-screen');
const loginCard = document.getElementById('login-card');
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginError = document.getElementById('login-error');
const loginBtn = document.getElementById('login-btn');

const appMain = document.getElementById('app-main');
const bgSlideshow = document.getElementById('bg-slideshow');
const bgLayerActive = document.getElementById('bg-layer-active');
const bgLayerNext = document.getElementById('bg-layer-next');

const statusTag = document.getElementById('status-tag');
const badgePlayingCount = document.getElementById('badge-playing-count');

const btnPlayAll = document.getElementById('btn-play-all');
const btnPauseAll = document.getElementById('btn-pause-all');
const btnLogout = document.getElementById('btn-logout');
const btnOpenAdmin = document.getElementById('btn-open-admin');

const canvas = document.getElementById('master-visualizer');
const canvasCtx = canvas ? canvas.getContext('2d') : null;

// --------------------------------------------------------------------------
// 3. CACHE OFFLINE INDEXEDDB
// --------------------------------------------------------------------------
const DB_NAME = "BinauralLabsOfflineDB";
const DB_VERSION = 1;
const STORE_NAME = "audio_blobs";

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function getCachedAudio(trackId) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(trackId);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    return null;
  }
}

async function saveCachedAudio(trackId, blob) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, trackId);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    return false;
  }
}

// --------------------------------------------------------------------------
// 4. RENDERIZAÇÃO DAS FAIXAS (EXATA AO DESIGN ORIGINAL)
// --------------------------------------------------------------------------
function renderTracks(tracks) {
  const container = document.getElementById('tracks-list');
  if (!container) return;
  container.innerHTML = "";
  
  tracks.forEach(track => {
    const card = document.createElement('div');
    card.className = "track-card glass-panel";
    card.id = `card-${track.id}`;
    card.setAttribute('data-track-id', track.id);
    
    card.innerHTML = `
      <div class="track-main-info">
        <div class="track-visual-indicator">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
        <div class="track-meta">
          <h4>${track.title}</h4>
          <p>${track.desc || track.description}</p>
        </div>
        <button id="btn-toggle-${track.id}" class="btn-play-track" data-action="play" title="Reproduzir / Pausar">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="track-controls">
        <!-- Controle de Volume -->
        <div class="control-row">
          <span class="label"><i class="fa-solid fa-volume-low"></i> Volume: <strong id="volume-val-${track.id}">100%</strong></span>
          <input type="range" id="volume-slider-${track.id}" min="0.0" max="1.0" step="0.05" value="1.0" class="styled-slider track-volume-slider">
        </div>

        <!-- Controle de Velocidade -->
        <div class="control-row">
          <span class="label"><i class="fa-solid fa-gauge-high"></i> Velocidade: <strong id="speed-val-${track.id}">1.0x</strong></span>
          <input type="range" id="speed-slider-${track.id}" min="0.5" max="5.0" step="0.1" value="1.0" class="styled-slider track-speed-slider">
        </div>
        
        <!-- Amplificador de Ganho Individual -->
        <div class="track-amplifier-circuit">
          <div class="track-amp-info">
            <div class="track-amp-label">
              <i class="fa-solid fa-bolt track-amp-icon"></i>
              <span>Amplificar Som Natural</span>
            </div>
            <label class="switch">
              <input type="checkbox" id="btn-toggle-boost-${track.id}" class="track-boost-toggle">
              <span class="slider-round"></span>
            </label>
          </div>
          <div class="track-amp-slider-container disabled" id="amp-slider-wrapper-${track.id}">
            <span class="slider-label">Ganho Extra: <strong id="boost-val-${track.id}">1.0x</strong></span>
            <input type="range" id="boost-slider-${track.id}" min="1.0" max="4.0" step="0.1" value="1.0" class="styled-slider track-boost-slider" disabled>
          </div>
        </div>

        <!-- Caching e Download Direto do Supabase -->
        <div class="track-download-row">
          <button id="btn-download-${track.id}" class="btn-download-track">
            <i class="fa-solid fa-cloud-arrow-down"></i> <span id="download-text-${track.id}">Salvar Offline (${track.size || track.size_label || 'HQ'})</span>
          </button>
          <div class="download-progress-bar" id="download-progress-wrapper-${track.id}">
            <div class="download-progress-fill" id="download-progress-fill-${track.id}"></div>
          </div>
        </div>

        <div class="control-row-bottom">
          <label class="loop-toggle">
            <input type="checkbox" id="loop-${track.id}" checked>
            <span>Repetir faixa</span>
          </label>
          <div class="quick-speed-buttons">
            <button class="btn-quick-speed" data-target="speed-slider-${track.id}" data-value="1.0">1x</button>
            <button class="btn-quick-speed" data-target="speed-slider-${track.id}" data-value="2.0">2x</button>
            <button class="btn-quick-speed" data-target="speed-slider-${track.id}" data-value="3.0">3x</button>
            <button class="btn-quick-speed" data-target="speed-slider-${track.id}" data-value="5.0">5x</button>
          </div>
        </div>
      </div>
      <audio id="audio-${track.id}" src="${track.audio_url || track.file}" loop preload="auto" crossorigin="anonymous"></audio>
    `;
    
    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 5. AUTENTICAÇÃO REAL SUPABASE AUTH & CONTROLE DE SESSÃO
// --------------------------------------------------------------------------
async function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  
  const rawEmail = emailInput ? emailInput.value.trim() : "";
  const rawPassword = passwordInput ? passwordInput.value : "";
  
  if (!rawEmail || !rawPassword) {
    showLoginError("Por favor, preencha o e-mail e a senha.");
    return;
  }

  if (loginBtn) {
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Autenticando...';
  }
  if (loginError) loginError.textContent = "";

  try {
    const client = getSupabase();
    if (!client) throw new Error("Cliente Supabase não inicializado.");

    const { data, error } = await client.auth.signInWithPassword({
      email: rawEmail,
      password: rawPassword
    });

    if (error) {
      showLoginError(error.message || "Credenciais inválidas. Verifique seu e-mail e senha.");
      return;
    }

    if (data && data.user) {
      currentUser = data.user;
      unlockApp(data.user);
    }
  } catch (err) {
    showLoginError(err.message || "Erro na conexão com o servidor de autenticação.");
  } finally {
    if (loginBtn) {
      loginBtn.disabled = false;
      loginBtn.innerHTML = '<i class="fa-solid fa-key"></i> Desbloquear Painel';
    }
  }
}

function showLoginError(msg) {
  if (loginError) loginError.textContent = msg;
  if (loginCard) {
    loginCard.classList.add('shake');
    setTimeout(() => loginCard.classList.remove('shake'), 450);
  }
}

async function unlockApp(user) {
  currentUser = user;
  if (loginScreen) loginScreen.classList.add('authenticated-hidden');
  if (appMain) appMain.classList.remove('authenticated-hidden');
  if (bgSlideshow) bgSlideshow.classList.remove('authenticated-hidden');
  
  await loadGalleriesData();
  await loadTracksData();
  renderTracks(tracksData);
  setupTrackEventListeners();
  setupWallpaperControls();
  initBackground();
  initAdminPanel();
  
  // Download imediato em background de todos os recursos de faixas
  checkAllCachesAndStartDownloads();
}

async function handleLogout() {
  const client = getSupabase();
  if (client) {
    await client.auth.signOut();
  }
  currentUser = null;
  if (loginScreen) loginScreen.classList.remove('authenticated-hidden');
  if (appMain) appMain.classList.add('authenticated-hidden');
  if (bgSlideshow) bgSlideshow.classList.add('authenticated-hidden');
  if (emailInput) emailInput.value = "";
  if (passwordInput) passwordInput.value = "";
}

async function checkSessionAuth() {
  const client = getSupabase();
  if (!client) return;

  try {
    const { data: { session }, error } = await client.auth.getSession();
    if (!error && session && session.user) {
      currentUser = session.user;
      unlockApp(session.user);
    }

    client.auth.onAuthStateChange((event, session) => {
      if (session && session.user) {
        currentUser = session.user;
      }
    });
  } catch (e) {
    console.warn("Verificação de sessão:", e);
  }
}

async function loadGalleriesData() {
  const client = getSupabase();
  if (!client) return;
  try {
    const { data, error } = await client
      .from('app_config')
      .select('value')
      .eq('key', 'background_galleries')
      .single();

    if (!error && data && data.value) {
      Object.assign(GALLERIES, data.value);
    }
  } catch (e) {
    console.warn("Erro ao buscar galerias do Supabase:", e);
  }
}

async function loadTracksData() {
  const client = getSupabase();
  if (client) {
    try {
      const { data, error } = await client
        .from('tracks')
        .select('*')
        .order('order_index', { ascending: true });

      if (!error && data && data.length > 0) {
        tracksData = data.map(t => ({
          id: t.id,
          title: t.title,
          desc: t.description,
          size: t.size_label || "HQ",
          audio_url: t.audio_url,
          file: t.audio_url
        }));
        return;
      }
    } catch (e) {
      console.warn("Erro ao carregar faixas:", e);
    }
  }
}

// --------------------------------------------------------------------------
// 6. MOTOR DE ÁUDIO WEB AUDIO API (VOLUME, BOOSTER E LIMITER)
// --------------------------------------------------------------------------
function initAudioEngine() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    
    masterCompressorNode = audioCtx.createDynamicsCompressor();
    masterCompressorNode.threshold.setValueAtTime(compressorConfig.threshold, audioCtx.currentTime);
    masterCompressorNode.knee.setValueAtTime(compressorConfig.knee, audioCtx.currentTime);
    masterCompressorNode.ratio.setValueAtTime(compressorConfig.ratio, audioCtx.currentTime);
    masterCompressorNode.attack.setValueAtTime(compressorConfig.attack, audioCtx.currentTime);
    masterCompressorNode.release.setValueAtTime(compressorConfig.release, audioCtx.currentTime);
    
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 64;
    
    masterCompressorNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);
    
    drawVisualizer();
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function connectTrackToWebAudio(trackId, audioElement) {
  initAudioEngine();
  
  if (!audioSourcesMap.has(audioElement)) {
    try {
      const sourceNode = audioCtx.createMediaElementSource(audioElement);
      const volumeNode = audioCtx.createGain();
      const boostNode = audioCtx.createGain();
      
      const volSlider = document.getElementById(`volume-slider-${trackId}`);
      const boostSlider = document.getElementById(`boost-slider-${trackId}`);
      const boostToggle = document.getElementById(`btn-toggle-boost-${trackId}`);

      const initialVol = volSlider ? parseFloat(volSlider.value) : 1.0;
      const initialBoost = (boostToggle && boostToggle.checked && boostSlider) ? parseFloat(boostSlider.value) : 1.0;

      volumeNode.gain.setValueAtTime(initialVol, audioCtx.currentTime);
      boostNode.gain.setValueAtTime(initialBoost, audioCtx.currentTime);
      
      sourceNode.connect(volumeNode);
      volumeNode.connect(boostNode);
      boostNode.connect(masterCompressorNode);
      
      audioSourcesMap.set(audioElement, sourceNode);
      trackVolumeNodesMap.set(trackId, volumeNode);
      trackBoostNodesMap.set(trackId, boostNode);
    } catch (e) {
      console.warn("Web Audio API routing:", e);
    }
  }
}

function setupTrackEventListeners() {
  tracksData.forEach(track => {
    const trackId = track.id;
    const card = document.getElementById(`card-${trackId}`);
    const audio = document.getElementById(`audio-${trackId}`);
    const playBtn = document.getElementById(`btn-toggle-${trackId}`);
    const volumeSlider = document.getElementById(`volume-slider-${trackId}`);
    const volumeVal = document.getElementById(`volume-val-${trackId}`);
    const speedSlider = document.getElementById(`speed-slider-${trackId}`);
    const speedVal = document.getElementById(`speed-val-${trackId}`);
    const boostToggle = document.getElementById(`btn-toggle-boost-${trackId}`);
    const boostSlider = document.getElementById(`boost-slider-${trackId}`);
    const boostVal = document.getElementById(`boost-val-${trackId}`);
    const ampSliderWrapper = document.getElementById(`amp-slider-wrapper-${trackId}`);
    const loopToggle = document.getElementById(`loop-${trackId}`);
    const downloadBtn = document.getElementById(`btn-download-${trackId}`);

    if (playBtn && audio) {
      playBtn.addEventListener('click', () => {
        connectTrackToWebAudio(trackId, audio);
        
        if (audio.paused) {
          audio.play().then(() => {
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            playBtn.setAttribute('data-action', 'pause');
            card.classList.add('playing');
            updateOverallStatus();
          }).catch(e => console.error("Play error:", e));
        } else {
          audio.pause();
          playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          playBtn.setAttribute('data-action', 'play');
          card.classList.remove('playing');
          updateOverallStatus();
        }
      });
    }

    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (volumeVal) volumeVal.textContent = `${Math.round(val * 100)}%`;
        const volNode = trackVolumeNodesMap.get(trackId);
        if (volNode && audioCtx) {
          volNode.gain.setValueAtTime(val, audioCtx.currentTime);
        } else if (audio) {
          audio.volume = val;
        }
      });
    }

    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (speedVal) speedVal.textContent = `${val.toFixed(1)}x`;
        if (audio) audio.playbackRate = val;
        updateQuickSpeedButtons(trackId, val);
      });
    }

    if (boostToggle) {
      boostToggle.addEventListener('change', (e) => {
        connectTrackToWebAudio(trackId, audio);
        const isEnabled = e.target.checked;
        if (ampSliderWrapper) {
          if (isEnabled) {
            ampSliderWrapper.classList.remove('disabled');
            if (boostSlider) boostSlider.disabled = false;
          } else {
            ampSliderWrapper.classList.add('disabled');
            if (boostSlider) boostSlider.disabled = true;
          }
        }
        const boostNode = trackBoostNodesMap.get(trackId);
        if (boostNode && audioCtx) {
          const targetGain = isEnabled && boostSlider ? parseFloat(boostSlider.value) : 1.0;
          boostNode.gain.setValueAtTime(targetGain, audioCtx.currentTime);
        }
      });
    }

    if (boostSlider) {
      boostSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (boostVal) boostVal.textContent = `${val.toFixed(1)}x`;
        const boostNode = trackBoostNodesMap.get(trackId);
        if (boostNode && audioCtx && boostToggle && boostToggle.checked) {
          boostNode.gain.setValueAtTime(val, audioCtx.currentTime);
        }
      });
    }

    if (loopToggle && audio) {
      loopToggle.addEventListener('change', (e) => {
        audio.loop = e.target.checked;
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        if (!downloadBtn.classList.contains('cached') && !downloadBtn.classList.contains('downloading')) {
          queueSingleTrackDownload(track);
        }
      });
    }
  });

  // Botões de velocidade rápida
  document.querySelectorAll('.btn-quick-speed').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetSliderId = e.target.getAttribute('data-target');
      const targetVal = parseFloat(e.target.getAttribute('data-value'));
      const slider = document.getElementById(targetSliderId);
      if (slider) {
        slider.value = targetVal;
        slider.dispatchEvent(new Event('input'));
      }
    });
  });

  // Controles Master
  if (btnPlayAll) {
    btnPlayAll.addEventListener('click', () => {
      initAudioEngine();
      tracksData.forEach(track => {
        const audio = document.getElementById(`audio-${track.id}`);
        const playBtn = document.getElementById(`btn-toggle-${track.id}`);
        const card = document.getElementById(`card-${track.id}`);
        if (audio && audio.paused) {
          connectTrackToWebAudio(track.id, audio);
          audio.play().then(() => {
            if (playBtn) {
              playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
              playBtn.setAttribute('data-action', 'pause');
            }
            if (card) card.classList.add('playing');
            updateOverallStatus();
          }).catch(e => console.log("Play All error:", e));
        }
      });
    });
  }

  if (btnPauseAll) {
    btnPauseAll.addEventListener('click', () => {
      tracksData.forEach(track => {
        const audio = document.getElementById(`audio-${track.id}`);
        const playBtn = document.getElementById(`btn-toggle-${track.id}`);
        const card = document.getElementById(`card-${track.id}`);
        if (audio && !audio.paused) {
          audio.pause();
          if (playBtn) {
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            playBtn.setAttribute('data-action', 'play');
          }
          if (card) card.classList.remove('playing');
        }
      });
      updateOverallStatus();
    });
  }
}

function updateQuickSpeedButtons(trackId, currentVal) {
  const quickBtns = document.querySelectorAll(`.btn-quick-speed[data-target="speed-slider-${trackId}"]`);
  quickBtns.forEach(btn => {
    const val = parseFloat(btn.getAttribute('data-value'));
    if (Math.abs(val - currentVal) < 0.05) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateOverallStatus() {
  let activeCount = 0;
  tracksData.forEach(track => {
    const audio = document.getElementById(`audio-${track.id}`);
    if (audio && !audio.paused) activeCount++;
  });
  
  if (badgePlayingCount) badgePlayingCount.textContent = `${activeCount} Ativos`;
  if (statusTag) {
    if (activeCount > 0) {
      statusTag.textContent = "Sintonizando";
      statusTag.className = "status-tag playing";
    } else {
      statusTag.textContent = "Pronto";
      statusTag.className = "status-tag idle";
    }
  }
}

// --------------------------------------------------------------------------
// 7. DOWNLOAD IMEDIATO E CACHE EM INDEXEDDB (DIRETO DO SUPABASE STORAGE)
// --------------------------------------------------------------------------
async function checkAllCachesAndStartDownloads() {
  for (const track of tracksData) {
    const cachedBlob = await getCachedAudio(track.id);
    const downloadBtn = document.getElementById(`btn-download-${track.id}`);
    const downloadText = document.getElementById(`download-text-${track.id}`);
    const audio = document.getElementById(`audio-${track.id}`);
    
    if (cachedBlob) {
      if (downloadBtn) {
        downloadBtn.classList.add('cached');
        if (downloadText) downloadText.innerHTML = '<i class="fa-solid fa-circle-check"></i> Salvo Offline';
      }
      if (audio) {
        const localBlobUrl = URL.createObjectURL(cachedBlob);
        audio.src = localBlobUrl;
      }
    } else {
      downloadQueue.push(track);
    }
  }
  
  if (downloadQueue.length > 0) {
    processDownloadQueue();
  }
}

function queueSingleTrackDownload(track) {
  if (!downloadQueue.find(t => t.id === track.id)) {
    downloadQueue.unshift(track);
    processDownloadQueue();
  }
}

async function processDownloadQueue() {
  if (isDownloadingQueue || downloadQueue.length === 0) return;
  isDownloadingQueue = true;
  
  const track = downloadQueue.shift();
  const trackId = track.id;
  const downloadBtn = document.getElementById(`btn-download-${trackId}`);
  const downloadText = document.getElementById(`download-text-${trackId}`);
  const progressWrapper = document.getElementById(`download-progress-wrapper-${trackId}`);
  const progressFill = document.getElementById(`download-progress-fill-${trackId}`);
  const audio = document.getElementById(`audio-${trackId}`);
  
  if (downloadBtn) downloadBtn.classList.add('downloading');
  if (progressWrapper) progressWrapper.classList.add('active');
  if (downloadText) downloadText.textContent = "Baixando Supabase...";
  
  try {
    const targetUrl = track.audio_url || track.file;
    const response = await fetch(targetUrl);
    const contentLength = response.headers.get('content-length');
    const total = parseInt(contentLength, 10) || 0;
    
    let loaded = 0;
    const reader = response.body.getReader();
    const chunks = [];
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.length;
      
      if (total && progressFill) {
        const pct = Math.round((loaded / total) * 100);
        progressFill.style.width = `${pct}%`;
        if (downloadText) downloadText.textContent = `Baixando ${pct}%...`;
      }
    }
    
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    await saveCachedAudio(trackId, blob);
    
    if (audio) {
      const localBlobUrl = URL.createObjectURL(blob);
      audio.src = localBlobUrl;
    }
    
    if (downloadBtn) {
      downloadBtn.classList.remove('downloading');
      downloadBtn.classList.add('cached');
    }
    if (downloadText) downloadText.innerHTML = '<i class="fa-solid fa-circle-check"></i> Salvo Offline';
    if (progressWrapper) progressWrapper.classList.remove('active');
  } catch (err) {
    if (downloadBtn) downloadBtn.classList.remove('downloading');
    if (downloadText) downloadText.textContent = `Salvar Offline (${track.size || 'HQ'})`;
    if (progressWrapper) progressWrapper.classList.remove('active');
  }
  
  isDownloadingQueue = false;
  if (downloadQueue.length > 0) {
    setTimeout(processDownloadQueue, 200);
  }
}

// --------------------------------------------------------------------------
// 8. PAINEL ADMINISTRATIVO (ADICIONAR & EXCLUIR FAIXAS NO SUPABASE)
// --------------------------------------------------------------------------
function initAdminPanel() {
  const adminModal = document.getElementById('admin-modal');
  const adminClose = document.getElementById('admin-close');
  const adminBackdrop = document.getElementById('admin-backdrop');
  const addTrackForm = document.getElementById('admin-add-track-form');
  const trackFileInput = document.getElementById('admin-track-file');
  const selectedFileName = document.getElementById('selected-file-name');
  const uploadProgress = document.getElementById('admin-upload-progress');
  const uploadProgressFill = document.getElementById('admin-upload-progress-fill');
  const btnAdminSubmit = document.getElementById('btn-admin-submit');

  const openAdmin = () => {
    if (adminModal) {
      adminModal.classList.add('active');
      renderAdminTracksList();
    }
  };
  const closeAdmin = () => {
    if (adminModal) adminModal.classList.remove('active');
  };

  if (btnOpenAdmin) btnOpenAdmin.addEventListener('click', openAdmin);
  if (adminClose) adminClose.addEventListener('click', closeAdmin);
  if (adminBackdrop) adminBackdrop.addEventListener('click', closeAdmin);

  if (trackFileInput && selectedFileName) {
    trackFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        selectedFileName.textContent = `${file.name} (${sizeMb} MB)`;
      } else {
        selectedFileName.textContent = "Selecionar arquivo MP3...";
      }
    });
  }

  if (addTrackForm) {
    addTrackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('admin-track-title');
      const descInput = document.getElementById('admin-track-desc');

      const title = titleInput.value.trim();
      const desc = descInput.value.trim();
      const file = trackFileInput.files[0];

      if (!title || !desc || !file) {
        alert("Por favor, preencha todos os campos e selecione o arquivo MP3.");
        return;
      }

      const client = getSupabase();
      if (!client) {
        alert("Erro: Cliente Supabase não conectado.");
        return;
      }

      // Gerar ID seguro
      const slugId = title.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') || `track-${Date.now()}`;

      const fileName = `${slugId}.mp3`;
      const sizeLabel = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

      if (btnAdminSubmit) {
        btnAdminSubmit.disabled = true;
        btnAdminSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando para o Supabase...';
      }
      if (uploadProgress) uploadProgress.classList.add('active');
      if (uploadProgressFill) uploadProgressFill.style.width = '40%';

      try {
        // 1. Upload do Arquivo para o Bucket do Supabase Storage
        const { data: uploadData, error: uploadErr } = await client.storage
          .from('binaural-audios')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: true
          });

        if (uploadErr) throw uploadErr;

        if (uploadProgressFill) uploadProgressFill.style.width = '80%';

        // 2. Obter URL Pública
        const { data: publicUrlData } = client.storage
          .from('binaural-audios')
          .getPublicUrl(fileName);

        const publicAudioUrl = publicUrlData.publicUrl;

        // 3. Inserir Registro na Tabela Tracks
        const newOrder = tracksData.length + 1;
        const { data: insertData, error: insertErr } = await client
          .from('tracks')
          .upsert({
            id: slugId,
            title: title,
            description: desc,
            audio_url: publicAudioUrl,
            size_label: sizeLabel,
            order_index: newOrder
          });

        if (insertErr) throw insertErr;

        if (uploadProgressFill) uploadProgressFill.style.width = '100%';

        alert(`✅ Faixa "${title}" adicionada com sucesso ao Supabase!`);
        addTrackForm.reset();
        if (selectedFileName) selectedFileName.textContent = "Selecionar arquivo MP3...";
        
        // Recarregar dados e atualizar telas
        await loadTracksData();
        renderTracks(tracksData);
        setupTrackEventListeners();
        renderAdminTracksList();
        checkAllCachesAndStartDownloads();
      } catch (err) {
        console.error("Erro ao adicionar faixa:", err);
        alert(`❌ Falha ao adicionar faixa: ${err.message}`);
      } finally {
        if (btnAdminSubmit) {
          btnAdminSubmit.disabled = false;
          btnAdminSubmit.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Fazer Upload e Salvar';
        }
        if (uploadProgress) uploadProgress.classList.remove('active');
        if (uploadProgressFill) uploadProgressFill.style.width = '0%';
      }
    });
  }
}

function renderAdminTracksList() {
  const listContainer = document.getElementById('admin-tracks-list');
  if (!listContainer) return;
  listContainer.innerHTML = "";

  if (!tracksData || tracksData.length === 0) {
    listContainer.innerHTML = `<p style="font-size: 11px; color: var(--text-muted); text-align: center;">Nenhuma faixa cadastrada.</p>`;
    return;
  }

  tracksData.forEach(track => {
    const item = document.createElement('div');
    item.className = "admin-track-item";
    item.innerHTML = `
      <div class="admin-track-info">
        <h5>${track.title}</h5>
        <p>${track.size || 'HQ'} • ${track.desc || ''}</p>
      </div>
      <button class="btn-delete-track" data-track-id="${track.id}" title="Excluir Faixa">
        <i class="fa-solid fa-trash"></i> Excluir
      </button>
    `;

    const deleteBtn = item.querySelector('.btn-delete-track');
    deleteBtn.addEventListener('click', async () => {
      const confirmDelete = confirm(`Deseja realmente excluir a faixa "${track.title}" do Supabase?`);
      if (!confirmDelete) return;

      deleteBtn.disabled = true;
      deleteBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

      try {
        const client = getSupabase();
        if (!client) throw new Error("Cliente Supabase não conectado.");

        // 1. Remover do Banco de Dados
        const { error: dbErr } = await client
          .from('tracks')
          .delete()
          .eq('id', track.id);

        if (dbErr) throw dbErr;

        // 2. Tentar remover arquivo do Storage
        const fileName = `${track.id}.mp3`;
        await client.storage.from('binaural-audios').remove([fileName]);

        // 3. Atualizar Lista Local
        tracksData = tracksData.filter(t => t.id !== track.id);
        renderTracks(tracksData);
        setupTrackEventListeners();
        renderAdminTracksList();

        alert(`Faixa "${track.title}" excluída com sucesso!`);
      } catch (err) {
        console.error("Erro ao excluir faixa:", err);
        alert(`Falha ao excluir: ${err.message}`);
        deleteBtn.disabled = false;
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Excluir';
      }
    });

    listContainer.appendChild(item);
  });
}

// --------------------------------------------------------------------------
// 9. MOTOR DE BACKGROUNDS DINÂMICOS (FOTOS, SHADERS E VÍDEOS)
// --------------------------------------------------------------------------
function initBackground() {
  const video1 = document.getElementById("bg-video-1");
  const video2 = document.getElementById("bg-video-2");
  const webglContainer = document.getElementById("bg-webgl-container");
  const layer1 = document.getElementById("bg-layer-active");
  const layer2 = document.getElementById("bg-layer-next");
  const indicator = document.getElementById("current-bg-indicator");

  let activeSlide = layer1;
  let activeVidEl = video1;
  let nextVidEl = video2;
  let currentVidIdx = 0;
  let isVideoLoopRunning = false;
  let galaxyBitsIndex = 0;

  function updateIndicator(text) {
    if (indicator) indicator.textContent = text;
  }

  function loadVideoSource(vidEl, url) {
    if (vidEl && vidEl.src !== url) {
      vidEl.src = url;
      vidEl.load();
    }
  }

  function playNextVideoTrack() {
    if (wallpaperCategory !== "video") return;
    if (!video1 || !video2) return;

    video1.style.display = "block";
    video2.style.display = "block";

    const currentUrl = CINEMATIC_VIDEOS[currentVidIdx];
    const nextIdx = (currentVidIdx + 1) % CINEMATIC_VIDEOS.length;
    const nextUrl = CINEMATIC_VIDEOS[nextIdx];

    loadVideoSource(activeVidEl, currentUrl);
    activeVidEl.classList.add("active");
    nextVidEl.classList.remove("active");

    activeVidEl.play().catch(e => console.log("Video Play:", e));
    loadVideoSource(nextVidEl, nextUrl);

    const onEnded = () => {
      activeVidEl.removeEventListener("ended", onEnded);
      nextVidEl.play().catch(e => console.log("Next Video Play:", e));
      nextVidEl.classList.add("active");
      activeVidEl.classList.remove("active");

      setTimeout(() => {
        try { activeVidEl.pause(); } catch(e){}
        currentVidIdx = nextIdx;
        const temp = activeVidEl;
        activeVidEl = nextVidEl;
        nextVidEl = temp;
        playNextVideoTrack();
      }, 1500);
    };

    activeVidEl.addEventListener("ended", onEnded, { once: true });
  }

  function getNextBgUrl(category) {
    if (category === 'dynamic' || category === 'api') {
      const randomId = Math.floor(Math.random() * 1000);
      return `https://picsum.photos/1920/1080?random=${randomId}`;
    } else {
      const list = GALLERIES[category] || GALLERIES.gym;
      const img = list[currentBgIndex % list.length];
      currentBgIndex = (currentBgIndex + 1) % list.length;
      return img;
    }
  }

  function changeBackground() {
    let effectiveCategory = wallpaperCategory;
    if (wallpaperCategory === "random") {
      effectiveCategory = getRandomGalleryFromPool();
    }

    const labels = {
      random: "🎲 Aleatório Dinâmico",
      gym: "🏋️ GYM Images",
      flowers: "🌸 Flowers",
      red: "🔴 Red",
      soft: "💿 Gen X Soft Club",
      motivation: "💪 Motivacional",
      video: "🌐 Cinematic Video",
      api: "🌐 API Unsplash",
      galaxybits: "✨ Shaders Rotativos"
    };
    updateIndicator(labels[effectiveCategory] || `✨ ${effectiveCategory.toUpperCase()}`);

    // Rotação de GalaxyBits (todos os shaders)
    if (effectiveCategory === "galaxybits") {
      isVideoLoopRunning = false;
      if (video1) video1.style.display = "none";
      if (video2) video2.style.display = "none";
      if (layer1) layer1.style.display = "none";
      if (layer2) layer2.style.display = "none";
      if (webglContainer) webglContainer.style.display = "block";

      if (typeof window.renderWebGLBackground === "function") {
        window.renderWebGLBackground(webglTypes[galaxyBitsIndex]);
        galaxyBitsIndex = (galaxyBitsIndex + 1) % webglTypes.length;
      }
      return;
    }

    // Shader WebGL Individual
    if (webglTypes.includes(effectiveCategory)) {
      isVideoLoopRunning = false;
      if (video1) video1.style.display = "none";
      if (video2) video2.style.display = "none";
      if (layer1) layer1.style.display = "none";
      if (layer2) layer2.style.display = "none";
      if (webglContainer) webglContainer.style.display = "block";
      if (typeof window.renderWebGLBackground === "function") {
        window.renderWebGLBackground(effectiveCategory);
      }
      return;
    } else {
      if (typeof window.stopWebGLBackground === "function") {
        window.stopWebGLBackground();
      }
      if (webglContainer) webglContainer.style.display = "none";
    }

    // Vídeo Cinematográfico
    if (effectiveCategory === "video") {
      if (layer1) layer1.style.display = "none";
      if (layer2) layer2.style.display = "none";
      if (!isVideoLoopRunning) {
        isVideoLoopRunning = true;
        playNextVideoTrack();
      }
      return;
    }

    // Imagens Normais
    isVideoLoopRunning = false;
    if (video1) video1.style.display = "none";
    if (video2) video2.style.display = "none";
    if (layer1) layer1.style.display = "block";
    if (layer2) layer2.style.display = "block";

    const nextUrl = getNextBgUrl(effectiveCategory);
    const nextLayer = (activeSlide === layer1) ? layer2 : layer1;
    
    if (nextLayer) {
      const img = new Image();
      img.src = nextUrl;
      img.onload = () => {
        nextLayer.style.backgroundImage = `url("${nextUrl}")`;
        nextLayer.classList.add('active');
        if (activeSlide) activeSlide.classList.remove('active');
        activeSlide = nextLayer;
      };
    }
  }

  changeBackground();

  function startBgInterval() {
    if (bgInterval) clearInterval(bgInterval);
    bgInterval = setInterval(changeBackground, bgSpeed);
  }

  startBgInterval();

  window.cycleBgNow = () => {
    changeBackground();
    startBgInterval();
  };
}

function setupWallpaperControls() {
  const btnOpenSettings = document.getElementById('btn-open-settings');
  const settingsModal = document.getElementById('settings-modal');
  const settingsClose = document.getElementById('settings-close');
  const settingsBackdrop = document.getElementById('settings-backdrop');
  const gallerySelect = document.getElementById('gallery-select');
  const speedSlider = document.getElementById('custom-speed-slider');
  const speedDisplay = document.getElementById('speed-val-display');
  const randomizeBtn = document.getElementById('randomize-bg-btn');

  const openSettings = () => {
    if (settingsModal) settingsModal.classList.add('active');
  };
  const closeSettings = () => {
    if (settingsModal) settingsModal.classList.remove('active');
  };

  if (btnOpenSettings) btnOpenSettings.addEventListener('click', openSettings);
  if (settingsClose) settingsClose.addEventListener('click', closeSettings);
  if (settingsBackdrop) settingsBackdrop.addEventListener('click', closeSettings);

  if (gallerySelect) {
    gallerySelect.value = wallpaperCategory;
    gallerySelect.addEventListener('change', (e) => {
      wallpaperCategory = e.target.value;
      localStorage.setItem('binaural_wallpaper_category', e.target.value);
      if (typeof window.cycleBgNow === 'function') window.cycleBgNow();
    });
  }

  if (speedSlider && speedDisplay) {
    const sec = Math.round(bgSpeed / 1000);
    speedSlider.value = sec;
    speedDisplay.textContent = sec;

    speedSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      speedDisplay.textContent = val;
      bgSpeed = val * 1000;
      localStorage.setItem('binaural_speed', bgSpeed);
      if (typeof window.cycleBgNow === 'function') window.cycleBgNow();
    });
  }

  if (randomizeBtn) {
    randomizeBtn.addEventListener('click', () => {
      wallpaperCategory = getRandomGalleryFromPool();
      if (gallerySelect) gallerySelect.value = wallpaperCategory;
      if (typeof window.cycleBgNow === 'function') window.cycleBgNow();
    });
  }
}

// --------------------------------------------------------------------------
// 10. VISUALIZADOR DE ÁUDIO NO CANVAS MASTER
// --------------------------------------------------------------------------
function drawVisualizer() {
  if (!canvasCtx || !canvas) return;
  
  function resizeCanvas() {
    if (canvas && canvas.parentElement) {
      canvas.width = canvas.parentElement.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.parentElement.offsetHeight * window.devicePixelRatio;
    }
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  function render() {
    requestAnimationFrame(render);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    
    let isPlaying = false;
    tracksData.forEach(track => {
      const audio = document.getElementById(`audio-${track.id}`);
      if (audio && !audio.paused) isPlaying = true;
    });
    
    if (!isPlaying || !analyserNode) {
      canvasCtx.beginPath();
      canvasCtx.strokeStyle = "rgba(255, 30, 39, 0.2)";
      canvasCtx.lineWidth = 1.5 * window.devicePixelRatio;
      const cy = canvas.height / 2;
      canvasCtx.moveTo(0, cy);
      canvasCtx.lineTo(canvas.width, cy);
      canvasCtx.stroke();
      return;
    }
    
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteTimeDomainData(dataArray);
    
    canvasCtx.lineWidth = 2.5 * window.devicePixelRatio;
    const gradient = canvasCtx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#FF1E27");
    gradient.addColorStop(0.5, "#FF8000");
    gradient.addColorStop(1, "#FF1E27");
    
    canvasCtx.strokeStyle = gradient;
    canvasCtx.beginPath();
    
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * canvas.height) / 2;
      
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
  
  render();
}

// --------------------------------------------------------------------------
// 11. INICIALIZAÇÃO NO DOM READY
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
  if (loginBtn) loginBtn.addEventListener('click', handleLoginSubmit);
  if (btnLogout) btnLogout.addEventListener('click', handleLogout);
  checkSessionAuth();
});
