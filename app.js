// ==========================================================================
// BINAURAL LABS - MP3 PLAYER PRO (FRONT-END ONLY & CRIPTOGRAFIA AES-256-GCM)
// Web Audio API DSP + Criptografia Web Crypto + Cache Offline IndexedDB
// ==========================================================================

// --------------------------------------------------------------------------
// 1. COFRE CRIPTOGRÁFICO AES-256-GCM (PROTEÇÃO TOTAL FRONT-END ONLY)
// --------------------------------------------------------------------------
const VAULT_CONFIG = {
  salt: "f7dpYLB1XNQunNF50DcxSw==",
  iv: "1LIgfi0HrFmPcklq",
  ciphertext: "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",
  iterations: 100000
};

function base64ToUint8Array(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function uint8ArrayToBase64(bytes) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

async function deriveAesKey(passcode, saltBytes) {
  const enc = new TextEncoder();
  const normalized = passcode.trim().toLowerCase();
  
  const baseKey = await window.crypto.subtle.importKey(
    'raw',
    enc.encode(normalized),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: saltBytes,
      iterations: VAULT_CONFIG.iterations,
      hash: 'SHA-256'
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
}

async function unlockVaultWithPasscode(passcode) {
  const saltBytes = base64ToUint8Array(VAULT_CONFIG.salt);
  const ivBytes = base64ToUint8Array(VAULT_CONFIG.iv);
  const ciphertextBytes = base64ToUint8Array(VAULT_CONFIG.ciphertext);

  const aesKey = await deriveAesKey(passcode, saltBytes);

  // Tentativa de decriptação autenticada AES-GCM
  const decryptedBuf = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: ivBytes },
    aesKey,
    ciphertextBytes
  );

  const dec = new TextDecoder();
  const jsonStr = dec.decode(decryptedBuf);
  return JSON.parse(jsonStr);
}

// --------------------------------------------------------------------------
// 2. GALERIAS DE BACKGROUNDS ESTÁTICAS E SHADERS WEBGL
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
    "onboarding.jpg"
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
// 3. ESTADO GLOBAL DO SISTEMA
// --------------------------------------------------------------------------
let isUnlocked = false;
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

// Fila de Downloads Locais / IndexedDB
let downloadQueue = [];
let isDownloadingQueue = false;

// Configuração do Limitador Master Anti-Distorção
const compressorConfig = {
  threshold: -3, // dB
  knee: 30,      // dB
  ratio: 20,     // Compressão precisa
  attack: 0.003, // 3ms
  release: 0.15  // 150ms
};

// Elementos do DOM estáticos
const loginScreen = document.getElementById('login-screen');
const loginCard = document.getElementById('login-card');
const vaultForm = document.getElementById('vault-form');
const passcodeInput = document.getElementById('passcode-input');
const loginError = document.getElementById('login-error');
const unlockBtn = document.getElementById('unlock-btn');

const appMain = document.getElementById('app-main');
const bgSlideshow = document.getElementById('bg-slideshow');
const bgLayerActive = document.getElementById('bg-layer-active');
const bgLayerNext = document.getElementById('bg-layer-next');

const statusTag = document.getElementById('status-tag');
const badgePlayingCount = document.getElementById('badge-playing-count');

const btnPlayAll = document.getElementById('btn-play-all');
const btnPauseAll = document.getElementById('btn-pause-all');
const btnLock = document.getElementById('btn-lock');

const canvas = document.getElementById('master-visualizer');
const canvasCtx = canvas ? canvas.getContext('2d') : null;

// --------------------------------------------------------------------------
// 4. CACHE OFFLINE INDEXEDDB (BinauralLabsOfflineDB)
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
// 5. RENDERIZAÇÃO DAS FAIXAS ULTRA GLASSMORPHISM
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

        <!-- Caching e Download Direto no IndexedDB -->
        <div class="track-download-row">
          <button id="btn-download-${track.id}" class="btn-download-track">
            <i class="fa-solid fa-cloud-arrow-down"></i> <span id="download-text-${track.id}">Salvar Offline (${track.size || 'HQ'})</span>
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
      <audio id="audio-${track.id}" src="${track.file}" loop preload="none"></audio>
    `;
    
    container.appendChild(card);
  });
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
// 7. DOWNLOAD IMEDIATO E CACHE EM INDEXEDDB
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
  if (downloadText) downloadText.textContent = "Baixando...";
  
  try {
    const targetUrl = track.file;
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
    setTimeout(processDownloadQueue, 150);
  }
}

// --------------------------------------------------------------------------
// 8. MOTOR DE BACKGROUNDS DINÂMICOS (FOTOS, SHADERS E VÍDEOS)
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
// 9. VISUALIZADOR DE ÁUDIO NO CANVAS MASTER (ONDA ABSTRATA)
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
// 10. FLUXO DE DESBLOQUEIO & CONTROLE DE SESSÃO
// --------------------------------------------------------------------------
async function handleUnlockSubmit(e) {
  if (e) e.preventDefault();
  
  const rawPasscode = passcodeInput ? passcodeInput.value : "";
  if (!rawPasscode) {
    showUnlockError("Digite a chave de acesso.");
    return;
  }

  if (unlockBtn) {
    unlockBtn.disabled = true;
    unlockBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Decriptando cofre...';
  }
  if (loginError) loginError.textContent = "";

  try {
    const decryptedTracks = await unlockVaultWithPasscode(rawPasscode);
    if (!decryptedTracks || !Array.isArray(decryptedTracks) || decryptedTracks.length === 0) {
      throw new Error("Chave de acesso incorreta.");
    }

    // Salvar token na sessão atual
    try {
      sessionStorage.setItem('binaural_vault_key', rawPasscode);
    } catch(e){}

    unlockAppWithTracks(decryptedTracks);
  } catch (err) {
    showUnlockError("Chave incorreta ou falha criptográfica.");
  } finally {
    if (unlockBtn) {
      unlockBtn.disabled = false;
      unlockBtn.innerHTML = '<i class="fa-solid fa-key"></i> Desbloquear Painel';
    }
  }
}

function showUnlockError(msg) {
  if (loginError) loginError.textContent = msg;
  if (loginCard) {
    loginCard.classList.add('shake');
    setTimeout(() => loginCard.classList.remove('shake'), 450);
  }
  if (passcodeInput) passcodeInput.focus();
}

function unlockAppWithTracks(tracks) {
  isUnlocked = true;
  tracksData = tracks;
  
  if (loginScreen) loginScreen.classList.add('authenticated-hidden');
  if (appMain) appMain.classList.remove('authenticated-hidden');
  if (bgSlideshow) bgSlideshow.classList.remove('authenticated-hidden');
  
  renderTracks(tracksData);
  setupTrackEventListeners();
  setupWallpaperControls();
  initBackground();
  
  // Download imediato em background de todos os 13 áudios no IndexedDB
  checkAllCachesAndStartDownloads();
}

function lockVault() {
  try {
    sessionStorage.removeItem('binaural_vault_key');
  } catch(e){}
  
  isUnlocked = false;
  tracksData = [];
  
  // Pausar todos os áudios
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(a => { try { a.pause(); } catch(e){} });
  
  const tracksList = document.getElementById('tracks-list');
  if (tracksList) tracksList.innerHTML = "";
  
  if (loginScreen) loginScreen.classList.remove('authenticated-hidden');
  if (appMain) appMain.classList.add('authenticated-hidden');
  if (bgSlideshow) bgSlideshow.classList.add('authenticated-hidden');
  if (passcodeInput) {
    passcodeInput.value = "";
    passcodeInput.focus();
  }
}

async function checkSavedSession() {
  try {
    const savedKey = sessionStorage.getItem('binaural_vault_key');
    if (savedKey) {
      const decryptedTracks = await unlockVaultWithPasscode(savedKey);
      if (decryptedTracks && Array.isArray(decryptedTracks) && decryptedTracks.length > 0) {
        unlockAppWithTracks(decryptedTracks);
        return;
      }
    }
  } catch (e) {
    sessionStorage.removeItem('binaural_vault_key');
  }
}

// --------------------------------------------------------------------------
// 11. INICIALIZAÇÃO NO DOM READY
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  if (vaultForm) vaultForm.addEventListener('submit', handleUnlockSubmit);
  if (unlockBtn) unlockBtn.addEventListener('click', handleUnlockSubmit);
  if (btnLock) btnLock.addEventListener('click', lockVault);
  
  checkSavedSession();
});
