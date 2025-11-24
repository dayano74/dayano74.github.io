import './style.css';

// 型定義
interface Project {
	title: string;
	description: string;
	technologies: string[];
	github?: string;
	demo?: string;
	image?: string;
}

interface Skill {
	category: string;
	items: string[];
}

// データ
const skills: Skill[] = [
	{
		category: 'フロントエンド',
		items: ['TypeScript', 'React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'],
	},
	{
		category: 'バックエンド',
		items: ['Node.js', 'Python', 'Django', 'Express', 'PostgreSQL'],
	},
	{
		category: 'ツール・環境',
		items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
	},
];

const projects: Project[] = [
	{
		title: 'プロジェクト名 1',
		description: 'プロジェクトの説明をここに記載します。どのような課題を解決したか、どんな技術を使ったかを簡潔に説明します。',
		technologies: ['TypeScript', 'React', 'Node.js'],
		github: 'https://github.com/yourusername/project1',
		demo: 'https://demo.example.com',
	},
	{
		title: 'プロジェクト名 2',
		description: 'もう一つのプロジェクトの説明。実際の成果や、学んだことを記載すると良いでしょう。',
		technologies: ['Python', 'Django', 'PostgreSQL'],
		github: 'https://github.com/yourusername/project2',
	},
	{
		title: 'プロジェクト名 3',
		description: '3つ目のプロジェクト説明。チームでの開発経験や、個人開発の経験など。',
		technologies: ['Vue.js', 'TypeScript', 'Firebase'],
		github: 'https://github.com/yourusername/project3',
		demo: 'https://demo3.example.com',
	},
];

// HTMLを生成する関数
function createHeader(): string {
	return `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">Portfolio</div>
        <ul class="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="nav-toggle" aria-label="メニューを開く">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `;
}

function createHero(): string {
	return `
    <section class="hero" id="about">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            こんにちは、<br>
            <span class="hero-name">あなたの名前</span>です
          </h1>
          <p class="hero-subtitle">フルスタックエンジニア / Web開発者</p>
          <p class="hero-description">
            情熱を持ってコードを書いています。<br>
            ユーザー体験を向上させるWebアプリケーションの開発が得意です。
          </p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">プロジェクトを見る</a>
            <a href="#contact" class="btn btn-secondary">お問い合わせ</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function createSkills(): string {
	const skillsHTML = skills
		.map(
			(skill) => `
    <div class="skill-category">
      <h3 class="skill-category-title">${skill.category}</h3>
      <div class="skill-items">
        ${skill.items.map((item) => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `
		)
		.join('');

	return `
    <section class="skills" id="skills">
      <div class="container">
        <h2 class="section-title">スキル・技術スタック</h2>
        <div class="skills-grid">
          ${skillsHTML}
        </div>
      </div>
    </section>
  `;
}

function createProjects(): string {
	const projectsHTML = projects
		.map(
			(project) => `
    <div class="project-card">
      <div class="project-image">
        ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<div class="project-placeholder">🚀</div>'}
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">GitHub</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link">Demo</a>` : ''}
        </div>
      </div>
    </div>
  `
		)
		.join('');

	return `
    <section class="projects" id="projects">
      <div class="container">
        <h2 class="section-title">プロジェクト</h2>
        <div class="projects-grid">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `;
}

function createContact(): string {
	return `
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title">お問い合わせ</h2>
        <p class="contact-description">
          お仕事のご依頼やご相談は、以下からお気軽にご連絡ください。
        </p>
        <div class="contact-links">
          <a href="mailto:your.email@example.com" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Twitter</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" class="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function createFooter(): string {
	return `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// アプリケーションを初期化
function init(): void {
	const app = document.querySelector<HTMLDivElement>('#app');
	if (!app) return;

	app.innerHTML = `
    ${createHeader()}
    <main>
      ${createHero()}
      ${createSkills()}
      ${createProjects()}
      ${createContact()}
    </main>
    ${createFooter()}
  `;

	// イベントリスナーを設定
	setupEventListeners();
	setupScrollAnimations();
}

// イベントリスナーの設定
function setupEventListeners(): void {
	// ハンバーガーメニュー
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.querySelector('.nav-menu');

	navToggle?.addEventListener('click', () => {
		navToggle.classList.toggle('active');
		navMenu?.classList.toggle('active');
	});

	// スムーススクロール
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();
			const target = anchor.getAttribute('href');
			if (target) {
				const element = document.querySelector(target);
				element?.scrollIntoView({ behavior: 'smooth' });

				// モバイルメニューを閉じる
				navToggle?.classList.remove('active');
				navMenu?.classList.remove('active');
			}
		});
	});

	// スクロール時のヘッダー
	window.addEventListener('scroll', () => {
		const header = document.querySelector('.header');
		const currentScroll = window.pageYOffset;

		if (currentScroll > 100) {
			header?.classList.add('scrolled');
		} else {
			header?.classList.remove('scrolled');
		}
	});
}

// スクロールアニメーション
function setupScrollAnimations(): void {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				}
			});
		},
		{ threshold: 0.1 }
	);

	document.querySelectorAll('.project-card, .skill-category').forEach((el) => {
		observer.observe(el);
	});
}

// アプリケーションを起動
init();
