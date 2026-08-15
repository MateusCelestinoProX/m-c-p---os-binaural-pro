const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const mime = require('mime-types');

const SUPABASE_URL = 'https://kbqxzmyasstdvvbfymft.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticXh6bXlhc3N0ZHZ2YmZ5bWZ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjcxNTk5OSwiZXhwIjoyMTAyMjkxOTk5fQ.VzJWbPs1Q5V9gMGd8c-S40JlOgrIXT0pRpnNyOYq7RM';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const TRACKS_CONFIG = [
  {
    id: "anti-gynecomastia",
    title: "Anti-Gynecomastia",
    desc: "Complex Binaural Production (Estrogen & Prolactin Reduction)",
    size: "32.6 MB",
    file: "audios/bin_ba8b218eb57b62d3.mp3",
    remoteFilename: "anti-gynecomastia.mp3",
    order: 1
  },
  {
    id: "bpc-157",
    title: "BPC 157",
    desc: "Cure-All Compound & Healing Binaural Beats (Body & Mind Recovery)",
    size: "29.8 MB",
    file: "audios/bin_d278f6c97bb2c4af.mp3",
    remoteFilename: "bpc-157.mp3",
    order: 2
  },
  {
    id: "estrogen-reducer",
    title: "Estrogen Reducer",
    desc: "Binaural Isochronic (Aromatase Inhibitor, Higher Testosterone, Lower Estrogen)",
    size: "34.8 MB",
    file: "audios/bin_caf24754ea39bf20.mp3",
    remoteFilename: "estrogen-reducer.mp3",
    order: 3
  },
  {
    id: "androgen-receptors",
    title: "Androgen Receptors",
    desc: "Forcefully Sensitized ANDROGEN RECEPTORS - Binaural Steroids Effect (Accelerated Anabolic)",
    size: "30.0 MB",
    file: "audios/bin_53eacf9810c925aa.mp3",
    remoteFilename: "androgen-receptors.mp3",
    order: 4
  },
  {
    id: "trenbolone",
    title: "Trenbolone",
    desc: "Binaural Steroids Effect (Massive Muscle Growth, Increased Strength, Vascularity)",
    size: "26.7 MB",
    file: "audios/bin_e44067a520c1ec5b.mp3",
    remoteFilename: "trenbolone.mp3",
    order: 5
  },
  {
    id: "stanozolol",
    title: "Stanozolol (Winstrol)",
    desc: "Binaural Steroids Effect - Lean & Defined Muscles",
    size: "19.1 MB",
    file: "audios/bin_febb0519aa355b35.mp3",
    remoteFilename: "stanozolol.mp3",
    order: 6
  },
  {
    id: "gorilla-stack",
    title: "🦍 Gorilla Stack 3.0",
    desc: "ULTIMATE BULKING PROTOCOL - Massive Muscle Growth",
    size: "15.2 MB",
    file: "audios/bin_513b70af7c482ad8.mp3",
    remoteFilename: "gorilla-stack.mp3",
    order: 7
  },
  {
    id: "framedoorsmaxxing",
    title: "🦴 Framedoorsmaxxing Protocol",
    desc: "70 Benefits - Massive & Muscular Frame, Huge Rib Cage and More",
    size: "11.5 MB",
    file: "audios/bin_71fb11f6dff95f46.mp3",
    remoteFilename: "framedoorsmaxxing.mp3",
    order: 8
  },
  {
    id: "businessman",
    title: "💼 Businessman",
    desc: "Winning Business Mindset & Subconscious Programming",
    size: "13.0 MB",
    file: "audios/bin_c75a266d47deb242.mp3",
    remoteFilename: "businessman.mp3",
    order: 9
  },
  {
    id: "dht",
    title: "🧬 DHT - Masculinity Hormone",
    desc: "Subliminals & Morphic Fields (Dihydrotestosterone Release)",
    size: "10.6 MB",
    file: "audios/bin_523fb5ef26146e6a.mp3",
    remoteFilename: "dht.mp3",
    order: 10
  },
  {
    id: "fat-burner",
    title: "🔥 Fat Burner",
    desc: "Weight Loss Subliminals (Metabolism & Energy)",
    size: "12.0 MB",
    file: "audios/bin_a256d943a2308c30.mp3",
    remoteFilename: "fat-burner.mp3",
    order: 11
  },
  {
    id: "masculine-beauty",
    title: "👑 Masculine Beauty",
    desc: "Warrior Skull & Mesomorph Body",
    size: "16.5 MB",
    file: "audios/bin_623f615e8e4433f3.mp3",
    remoteFilename: "masculine-beauty.mp3",
    order: 12
  },
  {
    id: "trenbolone-subliminal",
    title: "💉 Trenbolone Subliminal",
    desc: "Subliminals & Morphic Fields (Muscle, Strength & Fat Loss)",
    size: "11.2 MB",
    file: "audios/bin_08240bc4cb796bf7.mp3",
    remoteFilename: "trenbolone-subliminal.mp3",
    order: 13
  }
];

async function uploadFile(bucket, remotePath, localPath) {
  const fileBuffer = fs.readFileSync(localPath);
  const contentType = mime.lookup(localPath) || 'application/octet-stream';
  
  console.log(`Uploading [${bucket}] ${remotePath} (${(fileBuffer.length / (1024*1024)).toFixed(2)} MB)...`);
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(remotePath, fileBuffer, {
      contentType,
      upsert: true
    });

  if (error) {
    console.error(`Erro ao subir ${remotePath}:`, error.message);
    throw error;
  }
  
  const { data: publicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(remotePath);
    
  return publicUrlData.publicUrl;
}

async function uploadAllAudios() {
  console.log('\n--- 1. INICIANDO UPLOAD DOS ÁUDIOS BINAURAIS ---');
  const tracksToInsert = [];

  for (const track of TRACKS_CONFIG) {
    const localPath = path.resolve(__dirname, '..', track.file);
    if (!fs.existsSync(localPath)) {
      console.warn(`Arquivo não encontrado: ${localPath}`);
      continue;
    }
    const publicUrl = await uploadFile('binaural-audios', track.remoteFilename, localPath);
    tracksToInsert.push({
      id: track.id,
      title: track.title,
      description: track.desc,
      size_label: track.size,
      audio_url: publicUrl,
      order_index: track.order
    });
  }

  console.log('\n--- 2. INSERINDO METADADOS NA TABELA TRACKS ---');
  const { error } = await supabase
    .from('tracks')
    .upsert(tracksToInsert, { onConflict: 'id' });

  if (error) {
    console.error('Erro ao inserir faixas na tabela:', error.message);
  } else {
    console.log(`✅ ${tracksToInsert.length} faixas salvas com sucesso na tabela tracks!`);
  }
}

async function uploadBackgroundDir(localDir, remotePrefix) {
  if (!fs.existsSync(localDir)) return [];
  const files = fs.readdirSync(localDir);
  const urls = [];

  for (const file of files) {
    if (file.startsWith('.')) continue;
    const fullPath = path.join(localDir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isFile()) {
      const sanitizedName = file.replace(/[^a-zA-Z0-9._-]/g, '_');
      const remotePath = `${remotePrefix}/${sanitizedName}`;
      try {
        const url = await uploadFile('binaural-backgrounds', remotePath, fullPath);
        urls.push(url);
      } catch (e) {
        console.error(`Falha no upload de ${file}:`, e.message);
      }
    }
  }
  return urls;
}

async function uploadAllBackgrounds() {
  console.log('\n--- 3. INICIANDO UPLOAD DAS GALERIAS DE BACKGROUND ---');
  const baseImagesDir = path.resolve(__dirname, '../MCP OS/images');
  const fallbackImagesDir = path.resolve(__dirname, '../background images');

  const galleryMap = {};

  if (fs.existsSync(baseImagesDir)) {
    const folders = [
      { local: 'gym images', key: 'gym' },
      { local: 'flowers', key: 'flowers' },
      { local: 'red', key: 'red' },
      { local: 'gen x soft club', key: 'soft' },
      { local: 'motivacional', key: 'motivation' }
    ];

    for (const folder of folders) {
      const folderPath = path.join(baseImagesDir, folder.local);
      galleryMap[folder.key] = await uploadBackgroundDir(folderPath, folder.key);
    }
  }

  // Backup do diretório background images caso gyms não tenha carregado
  if (!galleryMap.gym || galleryMap.gym.length === 0) {
    galleryMap.gym = await uploadBackgroundDir(fallbackImagesDir, 'gym');
  }

  console.log('\n--- 4. SALVANDO CONFIGURAÇÃO DE GALERIAS NO APP_CONFIG ---');
  const { error } = await supabase
    .from('app_config')
    .upsert({
      key: 'background_galleries',
      value: galleryMap,
      updated_at: new Date().toISOString()
    }, { onConflict: 'key' });

  if (error) {
    console.error('Erro ao salvar galerias no app_config:', error.message);
  } else {
    console.log('✅ Configuração de galerias salva no app_config!');
  }
}

async function setupDefaultUser() {
  console.log('\n--- 5. CRIANDO USUÁRIO MASTER NO SUPABASE AUTH ---');
  const email = 'admin@binaural.pro';
  const password = 'binaural_master_pass';

  // Verifica se o usuário já existe
  const { data: usersData, error: listError } = await supabase.auth.admin.listUsers();
  const existingUser = usersData && usersData.users ? usersData.users.find(u => u.email === email) : null;

  if (existingUser) {
    console.log(`Usuário ${email} já existe no Supabase Auth.`);
  } else {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role: 'admin', name: 'Binaural Master' }
    });

    if (error) {
      console.error('Erro ao criar usuário admin:', error.message);
    } else {
      console.log(`✅ Usuário admin criado com sucesso: ${email}`);
    }
  }
}

async function main() {
  try {
    await uploadAllAudios();
    await uploadAllBackgrounds();
    await setupDefaultUser();
    console.log('\n🚀 SETUP COMPLETO DO SUPABASE CONCLUÍDO COM SUCESSO!\n');
  } catch (err) {
    console.error('Erro no setup do Supabase:', err);
    process.exit(1);
  }
}

main();
