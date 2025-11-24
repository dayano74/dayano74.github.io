(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const o=[{name:"JavaScript",level:5},{name:"TypeScript",level:4},{name:"React",level:4},{name:"Vue.js",level:3},{name:"HTML/CSS",level:5},{name:"Tailwind CSS",level:4},{name:"Node.js",level:4},{name:"Python",level:4},{name:"Django",level:3},{name:"Express",level:4},{name:"PostgreSQL",level:3},{name:"Git",level:5},{name:"Docker",level:3},{name:"AWS",level:3},{name:"CI/CD",level:3},{name:"Linux",level:4}],n=[{title:"プロジェクト名 1",description:"プロジェクトの説明をここに記載します。どのような課題を解決したか、どんな技術を使ったかを簡潔に説明します。",technologies:["TypeScript","React","Node.js"],github:"https://github.com/yourusername/project1",demo:"https://demo.example.com"},{title:"プロジェクト名 2",description:"もう一つのプロジェクトの説明。実際の成果や、学んだことを記載すると良いでしょう。",technologies:["Python","Django","PostgreSQL"],github:"https://github.com/yourusername/project2"},{title:"プロジェクト名 3",description:"3つ目のプロジェクト説明。チームでの開発経験や、個人開発の経験など。",technologies:["Vue.js","TypeScript","Firebase"],github:"https://github.com/yourusername/project3",demo:"https://demo3.example.com"}],a=[{title:"基本情報技術者試験 合格",year:"2023",description:"情報処理技術者試験の一つである基本情報技術者試験に合格しました。"},{title:"ハッカソン優勝",year:"2023",description:"地域のハッカソンイベントに参加し、チームで開発したアプリケーションが最優秀賞を受賞しました。"},{title:"OSS貢献",year:"2024",description:"人気のオープンソースプロジェクトにPull Requestを送り、マージされました。"}];function d(i){const c=`
		<svg class="star-icon filled" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
		</svg>
	`,l=`
		<svg class="star-icon empty" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
		</svg>
	`;let t="";for(let s=0;s<5;s++)t+=s<i?c:l;return t}function v(){return`
    <header class="header">
      <nav class="nav">
        <a href="#about" class="nav-brand">Portfolio</a>
        <ul class="nav-menu">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="nav-toggle" aria-label="メニューを開く">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `}function p(){return`
    <section class="hero" id="about">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">dayano74's Portfolio</h1>
        </div>
      </div>
    </section>
  `}function h(){return`
    <section class="profile" id="profile">
      <div class="container">
        <h2 class="section-title">Profile</h2>
        <div class="profile-content">
          <div class="profile-icon">
            <div class="profile-avatar">👨‍💻</div>
          </div>
          <div class="profile-text">
            <p class="profile-description">
              はじめまして、dayano74と申します。<br>
              Web開発を中心に、フルスタックエンジニアとして活動しています。<br>
              <br>
              フロントエンドではReact、TypeScript、Vue.jsなどを使用し、<br>
              バックエンドではNode.js、Python、PostgreSQLなどを扱っています。<br>
              <br>
              ユーザー体験を大切にしたWebアプリケーションの開発が得意です。<br>
              新しい技術を学ぶことが好きで、常にスキルアップを心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  `}function u(){return`
    <section class="skills" id="skills">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          ${o.map(e=>`
    <div class="skill-card">
      <div class="skill-content">
        <div class="skill-name">${e.name}</div>
        <div class="skill-stars">
          ${d(e.level)}
        </div>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function m(){return`
    <section class="projects" id="projects">
      <div class="container">
        <h2 class="section-title">プロジェクト</h2>
        <div class="projects-grid">
          ${n.map(e=>`
    <div class="project-card">
      <div class="project-image">
        ${e.image?`<img src="${e.image}" alt="${e.title}">`:'<div class="project-placeholder">🚀</div>'}
      </div>
      <div class="project-content">
        <h3 class="project-title">${e.title}</h3>
        <p class="project-description">${e.description}</p>
        <div class="project-tech">
          ${e.technologies.map(c=>`<span class="tech-tag">${c}</span>`).join("")}
        </div>
        <div class="project-links">
          ${e.github?`<a href="${e.github}" target="_blank" rel="noopener" class="project-link">GitHub</a>`:""}
          ${e.demo?`<a href="${e.demo}" target="_blank" rel="noopener" class="project-link">Demo</a>`:""}
        </div>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function f(){return`
    <section class="achievements" id="achievements">
      <div class="container">
        <h2 class="section-title">実績・資格</h2>
        <div class="achievements-grid">
          ${a.map(e=>`
    <div class="achievement-card">
      <div class="achievement-year">${e.year}</div>
      <div class="achievement-content">
        <h3 class="achievement-title">${e.title}</h3>
        <p class="achievement-description">${e.description}</p>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function g(){return`
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
  `}function y(){return`
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  `}function L(){const i=document.querySelector("#app");i&&(i.innerHTML=`
    ${v()}
    <main>
      ${p()}
      ${h()}
      ${u()}
      ${m()}
      ${f()}
      ${g()}
    </main>
    ${y()}
  `,b(),S())}function b(){const i=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-menu");i==null||i.addEventListener("click",()=>{i.classList.toggle("active"),e==null||e.classList.toggle("active")}),document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",l=>{l.preventDefault();const t=c.getAttribute("href");if(t){const s=document.querySelector(t);s==null||s.scrollIntoView({behavior:"smooth"}),i==null||i.classList.remove("active"),e==null||e.classList.remove("active")}})}),window.addEventListener("scroll",()=>{const c=document.querySelector(".header");window.pageYOffset>100?c==null||c.classList.add("scrolled"):c==null||c.classList.remove("scrolled")})}function S(){const i=new IntersectionObserver(e=>{e.forEach(c=>{c.isIntersecting&&c.target.classList.add("animate")})},{threshold:.1});document.querySelectorAll(".project-card, .skill-card, .achievement-card").forEach(e=>{i.observe(e)})}L();
