// ============================================================
// COMMON.JS — shared across all subject pages
// Renders question/answer cards and handles solution toggling
// ============================================================

function renderQuestions(data, containerId, tagClass, tagLabel) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';
    data.forEach((item, i) => {
        const col = document.createElement('div');
        col.className = 'col-lg-6 animate-in';
        col.style.animationDelay = (i * 0.04) + 's';
        col.innerHTML = `
      <div class="q-card">
        <div class="q-card-header">
          <span class="q-num">Q${i + 1}</span>
          <div>
            <span class="section-tag ${tagClass}">${tagLabel}</span>
            <div class="q-text mt-1">${item.q}</div>
          </div>
        </div>
        <div class="q-card-body">
          <div class="answer-label"><i class="fas fa-check-circle"></i> Answer</div>
          <div class="answer-text">${item.a}</div>
          <button class="solution-toggle" onclick="toggleSol(this)">
            <i class="fas fa-eye me-1"></i> View Explanation
          </button>
          <div class="solution-box d-none">${item.sol}</div>
        </div>
      </div>`;
        row.appendChild(col);
    });
    container.appendChild(row);
}

function toggleSol(btn) {
    const box = btn.nextElementSibling;
    if (box.classList.contains('d-none')) {
        box.classList.remove('d-none');
        btn.innerHTML = '<i class="fas fa-eye-slash me-1"></i> Hide Explanation';
    } else {
        box.classList.add('d-none');
        btn.innerHTML = '<i class="fas fa-eye me-1"></i> View Explanation';
    }
}

// Collapse the mobile navbar after a nav link is tapped
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#navbarNav a, #navbarNav button').forEach(el => {
        el.addEventListener('click', () => {
            const nb = document.getElementById('navbarNav');
            if (nb && nb.classList.contains('show') && window.bootstrap) {
                bootstrap.Collapse.getInstance(nb)?.hide();
            }
        });
    });
});
