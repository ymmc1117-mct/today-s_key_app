// 音階データ（音程情報付き - 短調は和声短音階）
const scales = [
    // 長調
    { german: 'C dur', reading: 'ツェー・ドゥア', japanese: 'ハ長調', keySignature: '調号なし', notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'] },
    { german: 'G dur', reading: 'ゲー・ドゥア', japanese: 'ト長調', keySignature: '♯', notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'] },
    { german: 'D dur', reading: 'デー・ドゥア', japanese: 'ニ長調', keySignature: '♯♯', notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'] },
    { german: 'A dur', reading: 'アー・ドゥア', japanese: 'イ長調', keySignature: '♯♯♯', notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A5'] },
    { german: 'E dur', reading: 'エー・ドゥア', japanese: 'ホ長調', keySignature: '♯♯♯♯', notes: ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'] },
    { german: 'B dur', reading: 'ベー・ドゥア', japanese: 'ロ長調', keySignature: '♯♯♯♯♯', notes: ['B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A#5', 'B5'] },
    { german: 'Ges dur', reading: 'ゲス・ドゥア', japanese: '変ト長調', keySignature: '♭♭♭♭♭♭', notes: ['Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'F5', 'Gb5'] },
    { german: 'Des dur', reading: 'デス・ドゥア', japanese: '変ニ長調', keySignature: '♭♭♭♭♭', notes: ['Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'C5', 'Db5'] },
    { german: 'As dur', reading: 'アス・ドゥア', japanese: '変イ長調', keySignature: '♭♭♭♭', notes: ['Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'G5', 'Ab5'] },
    { german: 'Es dur', reading: 'エス・ドゥア', japanese: '変ホ長調', keySignature: '♭♭♭', notes: ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'] },
    { german: 'B dur', reading: 'ベー・ドゥア', japanese: '変ロ長調', keySignature: '♭♭', notes: ['Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'A5', 'Bb5'] },
    { german: 'F dur', reading: 'エフ・ドゥア', japanese: 'ヘ長調', keySignature: '♭', notes: ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'] },
    // 短調（和声短音階 - 第7音を半音上げ）
    { german: 'a moll', reading: 'アー・モル', japanese: 'イ短調', keySignature: '調号なし', notes: ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G#5', 'A5'] },
    { german: 'e moll', reading: 'エー・モル', japanese: 'ホ短調', keySignature: '♯', notes: ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D#5', 'E5'] },
    { german: 'h moll', reading: 'ハー・モル', japanese: 'ロ短調', keySignature: '♯♯', notes: ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A#5', 'B5'] },
    { german: 'fis moll', reading: 'フィス・モル', japanese: '嬰ヘ短調', keySignature: '♯♯♯', notes: ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E#5', 'F#5'] },
    { german: 'cis moll', reading: 'ツィス・モル', japanese: '嬰ハ短調', keySignature: '♯♯♯♯', notes: ['C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A4', 'B#4', 'C#5'] },
    { german: 'gis moll', reading: 'ギス・モル', japanese: '嬰ト短調', keySignature: '♯♯♯♯♯', notes: ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F##5', 'G#5'] },
    { german: 'es moll', reading: 'エス・モル', japanese: '変ホ短調', keySignature: '♭♭♭♭♭♭', notes: ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'D5', 'Eb5'] },
    { german: 'b moll', reading: 'ベー・モル', japanese: '変ロ短調', keySignature: '♭♭♭♭♭', notes: ['Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'Gb5', 'A5', 'Bb5'] },
    { german: 'f moll', reading: 'エフ・モル', japanese: 'ヘ短調', keySignature: '♭♭♭♭', notes: ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'E5', 'F5'] },
    { german: 'c moll', reading: 'ツェー・モル', japanese: 'ハ短調', keySignature: '♭♭♭', notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5'] },
    { german: 'g moll', reading: 'ゲー・モル', japanese: 'ト短調', keySignature: '♭♭', notes: ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F#5', 'G5'] },
    { german: 'd moll', reading: 'デー・モル', japanese: 'ニ短調', keySignature: '♭', notes: ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C#5', 'D5'] }
];

// 状態管理
let isSpinning = false;
let currentScale = null;
let history = [];
let showHistory = false;
let showTable = false;
let isPlayingAudio = false;
let synth = null;

// DOM要素
const slotList = document.getElementById('slotList');
const startButton = document.getElementById('startButton');
const resultContainer = document.getElementById('resultContainer');
const resultGerman = document.getElementById('resultGerman');
const resultReading = document.getElementById('resultReading');
const resultJapanese = document.getElementById('resultJapanese');
const resultKeySignature = document.getElementById('resultKeySignature');
const historyButton = document.getElementById('historyButton');
const historyButtonText = document.getElementById('historyButtonText');
const historyContainer = document.getElementById('historyContainer');
const historyListElement = document.getElementById('historyList');
const tableButton = document.getElementById('tableButton');
const tableButtonText = document.getElementById('tableButtonText');
const tableContainer = document.getElementById('tableContainer');

// 初期化
function init() {
    loadHistory();
    initSlotList();
    initAudio();
    startButton.addEventListener('click', spin);
    historyButton.addEventListener('click', toggleHistory);
    tableButton.addEventListener('click', toggleTable);
    initScaleCardListeners();
}

// 音声の初期化（よりピアノらしい音色に改良）
async function initAudio() {
    try {
        // ピアノらしい音色を作成
        synth = new Tone.Synth({
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 0.008,
                decay: 0.2,
                sustain: 0.1,
                release: 1.2
            },
            volume: -8
        }).toDestination();
        
        // リバーブを追加してより自然な響きに
        const reverb = new Tone.Reverb({
            decay: 1.5,
            wet: 0.15
        }).toDestination();
        
        synth.connect(reverb);
        
    } catch (e) {
        console.error('Audio initialization failed:', e);
    }
}

// 音階カードにクリックリスナーを追加
function initScaleCardListeners() {
    const scaleCards = document.querySelectorAll('.scale-card');
    scaleCards.forEach(card => {
        card.addEventListener('click', async () => {
            if (isPlayingAudio) return;
            
            const scaleName = card.getAttribute('data-scale');
            const scale = scales.find(s => s.german === scaleName);
            
            if (scale) {
                await playScale(scale, card);
            }
        });
    });
}

// 音階を再生
async function playScale(scale, visualElement = null) {
    if (isPlayingAudio || !synth) return;
    
    isPlayingAudio = true;
    
    // 視覚的フィードバック
    if (visualElement) {
        visualElement.classList.add('playing');
    }
    
    try {
        // Tone.jsのオーディオコンテキストを開始
        await Tone.start();
        
        // テンポ
        const now = Tone.now();
        const noteInterval = 0.4; // テンポ
        const noteDuration = 0.35; // 音の長さ（0.35秒）
        
        scale.notes.forEach((note, index) => {
            synth.triggerAttackRelease(note, noteDuration, now + index * noteInterval);
        });
        
        // 全ての音が終わるまで待つ
        await new Promise(resolve => setTimeout(resolve, scale.notes.length * noteInterval * 1000 + 800));
        
    } catch (e) {
        console.error('Audio playback failed:', e);
    } finally {
        isPlayingAudio = false;
        
        // 視覚的フィードバックを解除
        if (visualElement) {
            visualElement.classList.remove('playing');
        }
    }
}

// スロットリストの初期化
function initSlotList() {
    const extendedScales = [...scales, ...scales, ...scales];
    slotList.innerHTML = extendedScales.map((scale, index) => 
        `<div class="slot-item" data-index="${index}">${scale.german}</div>`
    ).join('');
    // 初期位置を中央に設定
    slotList.style.transform = 'translateY(80px)';
    updateOpacity();
}

// 不透明度の更新
function updateOpacity() {
    const items = document.querySelectorAll('.slot-item');
    const containerRect = document.querySelector('.slot-window').getBoundingClientRect();
    const centerY = containerRect.top + containerRect.height / 2;
    
    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        
        if (distance < 40) {
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0.3';
        }
    });
}

// 履歴の読み込み
function loadHistory() {
    const saved = localStorage.getItem('piano-scale-history');
    if (saved) {
        try {
            history = JSON.parse(saved);
        } catch (e) {
            history = [];
        }
    }
}

// 履歴の保存
function saveHistory(scale) {
    const newEntry = {
        date: new Date().toISOString(),
        scale: scale
    };
    history = [newEntry, ...history].slice(0, 50);
    localStorage.setItem('piano-scale-history', JSON.stringify(history));
}

// スロット回転
function spin() {
    if (isSpinning || isPlayingAudio) return;
    
    isSpinning = true;
    startButton.disabled = true;
    resultContainer.style.display = 'none';
    
    const finalIndex = Math.floor(Math.random() * scales.length);
    const finalScale = scales[finalIndex];
    
    // 拡張リストを再生成
    const extendedScales = [...scales, ...scales, ...scales, ...scales];
    slotList.innerHTML = extendedScales.map(scale => 
        `<div class="slot-item">${scale.german}</div>`
    ).join('');
    
    const targetPosition = scales.length * 2 + finalIndex;
    const spinDuration = 3000;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);
        
        // イージング（最初は速く、最後はゆっくり）
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentPos = easeOut * targetPosition;
        const offset = currentPos * 80;
        slotList.style.transform = `translateY(calc(-${offset}px + 80px))`;
        
        updateOpacity();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            currentScale = finalScale;
            isSpinning = false;
            startButton.disabled = false;
            showResult(finalScale);
            saveHistory(finalScale);
            
            // 音階を自動再生
            setTimeout(() => {
                playScale(finalScale);
            }, 300);
        }
    }
    
    slotList.style.transition = 'none';
    animate();
}

// 結果表示
function showResult(scale) {
    resultGerman.textContent = scale.german;
    resultReading.textContent = scale.reading;
    resultJapanese.textContent = scale.japanese;
    resultKeySignature.textContent = scale.keySignature;
    resultContainer.style.display = 'block';
}

// 履歴の表示/非表示
function toggleHistory() {
    showHistory = !showHistory;
    if (showHistory) {
        historyButtonText.textContent = '履歴を閉じる';
        historyContainer.style.display = 'block';
        historyButton.classList.add('active');
        renderHistory();
    } else {
        historyButtonText.textContent = '練習履歴を見る';
        historyContainer.style.display = 'none';
        historyButton.classList.remove('active');
    }
}

// 履歴のレンダリング
function renderHistory() {
    if (history.length === 0) {
        historyListElement.innerHTML = '<p class="history-empty">まだ履歴がありません</p>';
        return;
    }
    
    historyListElement.innerHTML = history.map((entry, index) => {
        const date = new Date(entry.date);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedDate = `${month}/${day} ${hours}:${minutes}`;
        
        return `
            <div class="history-item">
                <div class="history-content">
                    <span class="history-date">${formattedDate}</span>
                    <span class="history-scale-german">${entry.scale.german}</span>
                    <span class="history-scale-japanese">${entry.scale.japanese}</span>
                </div>
                <button class="history-delete-button" onclick="deleteHistoryItem(${index})" aria-label="削除">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        `;
    }).join('');
}

// 履歴アイテムの削除
function deleteHistoryItem(index) {
    history.splice(index, 1);
    localStorage.setItem('piano-scale-history', JSON.stringify(history));
    renderHistory();
}

// 一覧表の表示/非表示
function toggleTable() {
    showTable = !showTable;
    if (showTable) {
        tableButtonText.textContent = '一覧表を閉じる';
        tableContainer.style.display = 'block';
        tableButton.classList.add('active');
    } else {
        tableButtonText.textContent = '音階一覧表を見る';
        tableContainer.style.display = 'none';
        tableButton.classList.remove('active');
    }
}

// 初期化実行
init();
