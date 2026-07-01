// ============================================================
// TEST.JS — Mock Test logic
// Requires data-math.js, data-reasoning.js, data-science.js,
// data-affairs.js to be loaded BEFORE this script.
// ============================================================

const testAnswers = {};
let testData = [];
let testSubmitted = false;

function sample(arr, n) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

function buildTestData() {
    // 20 from Math, 20 from Reasoning, 20 from Science, 15 from Affairs
    const mq = sample(mathQuestions, 20).map(q => ({ ...q, tag: 'math', tagLabel: 'Mathematics', tagClass: 'tag-math' }));
    const rq = sample(reasoningQuestions, 20).map(q => ({ ...q, tag: 'reasoning', tagLabel: 'Reasoning', tagClass: 'tag-reasoning' }));
    const sq = sample(scienceQuestions, 20).map(q => ({ ...q, tag: 'science', tagLabel: 'Science', tagClass: 'tag-science' }));
    const aq = sample(affairsQuestions, 15).map(q => ({ ...q, tag: 'affairs', tagLabel: 'Affairs', tagClass: 'tag-affairs' }));
    testData = [...mq, ...rq, ...sq, ...aq].sort(() => Math.random() - 0.5);
}

function generateOptions(correct, allData) {
    const others = allData.filter(q => q.a !== correct).map(q => q.a);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [correct, ...shuffled].sort(() => Math.random() - 0.5);
    return opts;
}

function renderTest() {
    buildTestData();
    testSubmitted = false;
    const container = document.getElementById('test-content');
    if (!container) return;

    let html = `
    <div class="test-header">
      <div class="test-header-icon"><i class="fas fa-clipboard-list"></i></div>
      <div>
        <h2 style="font-family:'Rajdhani',sans-serif;font-size:1.7rem;font-weight:700;margin-bottom:6px">RRB CBT 1 Mock Test</h2>
        <p style="opacity:0.8;font-size:0.9rem;margin:0">Attempt all 75 questions. Select the correct option and submit.</p>
        <div class="test-meta">
          <span class="test-meta-item"><i class="fas fa-question-circle"></i> 75 Questions</span>
          <span class="test-meta-item"><i class="fas fa-clock"></i> 90 Minutes</span>
          <span class="test-meta-item"><i class="fas fa-star"></i> 75 Marks</span>
          <span class="test-meta-item"><i class="fas fa-minus-circle"></i> 1/3 Negative Marking</span>
        </div>
      </div>
    </div>
    <div class="test-progress" id="testProgress">
      <div class="d-flex justify-content-between align-items-center">
        <span style="font-family:'Rajdhani',sans-serif;font-weight:600;font-size:0.92rem">Progress: <span id="progressCount">0</span> / 75 answered</span>
        <span style="font-size:0.82rem;color:var(--text-muted)"><span id="progressPct">0</span>%</span>
      </div>
      <div class="progress-bar-rail"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
    </div>`;

    testData.forEach((item, i) => {
        const options = generateOptions(item.a, [...mathQuestions, ...reasoningQuestions, ...scienceQuestions, ...affairsQuestions]);
        const optLetters = ['A', 'B', 'C', 'D'];
        let optsHtml = options.map((opt, oi) => `
      <label class="test-option" id="opt-${i}-${oi}" onclick="selectOption(${i}, ${oi}, '${opt.replace(/'/g, "\\'")}')">
        <input type="radio" name="q${i}" value="${oi}" id="radio-${i}-${oi}">
        <strong style="color:var(--rail-blue)">${optLetters[oi]})</strong> ${opt}
      </label>`).join('');

        html += `
      <div class="test-q-card" id="qcard-${i}">
        <div class="test-q-num">Q${i + 1} <span class="section-tag ${item.tagClass}">${item.tagLabel}</span></div>
        <div class="test-q-text">${item.q}</div>
        <div>${optsHtml}</div>
      </div>`;
    });

    html += `
    <div class="text-center py-4">
      <button class="submit-btn" onclick="submitTest()">
        <i class="fas fa-paper-plane me-2"></i> Submit Test
      </button>
    </div>`;

    container.innerHTML = html;
}

function selectOption(qIdx, optIdx, val) {
    testAnswers[qIdx] = { optIdx, val };
    document.getElementById(`qcard-${qIdx}`).classList.add('answered');
    updateProgress();
}

function updateProgress() {
    const answered = Object.keys(testAnswers).length;
    const pct = Math.round((answered / 75) * 100);
    document.getElementById('progressCount').textContent = answered;
    document.getElementById('progressPct').textContent = pct;
    document.getElementById('progressFill').style.width = pct + '%';
}

function submitTest() {
    if (testSubmitted) return;
    const answered = Object.keys(testAnswers).length;
    if (answered < 10) {
        if (!confirm(`You've only answered ${answered} questions. Are you sure you want to submit?`)) return;
    }
    testSubmitted = true;

    let correct = 0, wrong = 0;
    const attempted = answered;

    testData.forEach((item, i) => {
        if (testAnswers[i] !== undefined) {
            const userVal = testAnswers[i].val;
            const isCorrect = userVal === item.a;
            if (isCorrect) correct++; else wrong++;

            for (let oi = 0; oi < 4; oi++) {
                const optEl = document.getElementById(`opt-${i}-${oi}`);
                if (!optEl) continue;
                const optText = optEl.innerText.replace(/^[A-D]\)\s*/, '').trim();
                if (optText === item.a) {
                    optEl.classList.add('correct-ans');
                } else if (oi === testAnswers[i].optIdx && !isCorrect) {
                    optEl.classList.add('wrong-ans');
                }
                const radio = document.getElementById(`radio-${i}-${oi}`);
                if (radio) radio.disabled = true;
            }
        } else {
            for (let oi = 0; oi < 4; oi++) {
                const optEl = document.getElementById(`opt-${i}-${oi}`);
                if (!optEl) continue;
                const optText = optEl.innerText.replace(/^[A-D]\)\s*/, '').trim();
                if (optText === item.a) optEl.classList.add('correct-ans');
                const radio = document.getElementById(`radio-${i}-${oi}`);
                if (radio) radio.disabled = true;
            }
        }
    });

    const score = correct - (wrong * 0.33);
    const pct = ((score / 75) * 100).toFixed(1);
    let grade = pct >= 70 ? '🏆 Excellent' : pct >= 50 ? '✅ Good' : pct >= 35 ? '⚠️ Average' : '❌ Needs Improvement';

    const resultHtml = `
    <div class="result-card" id="resultCard">
      <div class="result-title">Test Completed! ${grade}</div>
      <div class="result-score">${score.toFixed(1)}</div>
      <p style="opacity:0.8;font-size:0.95rem;margin:0 0 8px">out of 75 marks</p>
      <div style="font-size:1.3rem;font-family:'Rajdhani',sans-serif;font-weight:700;opacity:0.9">${pct}%</div>
      <div class="result-grid">
        <div class="result-stat"><div class="result-stat-val">75</div><div class="result-stat-label">Total Questions</div></div>
        <div class="result-stat"><div class="result-stat-val">${attempted}</div><div class="result-stat-label">Attempted</div></div>
        <div class="result-stat"><div class="result-stat-val" style="color:#6ee7b7">${correct}</div><div class="result-stat-label">Correct</div></div>
        <div class="result-stat"><div class="result-stat-val" style="color:#fca5a5">${wrong}</div><div class="result-stat-label">Wrong</div></div>
        <div class="result-stat"><div class="result-stat-val">${75 - attempted}</div><div class="result-stat-label">Unattempted</div></div>
        <div class="result-stat"><div class="result-stat-val" style="color:var(--rail-accent)">${pct}%</div><div class="result-stat-label">Percentage</div></div>
      </div>
      <button class="submit-btn mt-4" onclick="retryTest()">
        <i class="fas fa-redo me-2"></i> Retry Test
      </button>
    </div>`;

    const container = document.getElementById('test-content');
    container.insertAdjacentHTML('afterbegin', resultHtml);
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function retryTest() {
    Object.keys(testAnswers).forEach(k => delete testAnswers[k]);
    testData = [];
    renderTest();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderTest);
