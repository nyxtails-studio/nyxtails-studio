document.documentElement.classList.add('js');
const copy={
  en:{
    nav:{games:'Games',studio:'Studio',team:'Team',journal:'Journal',contact:'Contact'},
    hero:{eyebrow:'Independent game studio — TR / EN / JP',lineOne:'Weaving',lineTwo:'darkness',lineThree:'into worlds.',description:'Atmospheric, story-driven games for the feelings that stay after the screen goes dark.',ctaGames:'Explore our games',ctaStudio:'Meet the studio',sideNote:'For the curious.<br>For the brave.<br>For the ones who look closer.',metaOneLabel:'Current signal',metaOneValue:'01 / In the making',metaTwoLabel:'Focus',metaTwoValue:'Atmospheric horror & co-op',scroll:'Scroll to descend'},
    games:{eyebrow:'The worlds are calling',title:'Games with a pulse.',intro:'We build places you can get lost in — then give you a reason to find your way back.',filterLabel:'OPEN GAMES',tabAll:'OFFICIAL SITE',tabSteam:'STEAM',websiteOption:'Official Site',tail:'Four worlds in the dark. More signals soon.',nocturne:{badge:'IN DEVELOPMENT',subtitle:'Atmospheric Story · Single Player'},backrooms:{badge:'EARLY ACCESS · JUL 2026',subtitle:'6-Player Co-op Survival Horror'},filecopy:{badge:'PROTOTYPE · DEMO',subtitle:'Social Deduction · Office Chaos'},cozymint:{badge:'IN DEVELOPMENT',subtitle:'Figure & TCG Simulator'}},
    studio:{eyebrow:'A small studio with a long shadow',title:'Made in the quiet hours.',intro:'Nyx is the night before the story begins.',quote:'The dark is not empty. It is where everything begins.',quoteCredit:'— Nyxtails studio note / 001',storyLead:'We are Nyxtails Studio, an independent team.',storyBodyOne:'Our name is a meeting of opposites: Nyx and the fox.',storyBodyTwo:'We make worlds with texture. Stories with teeth.',cta:'Come a little closer',principlesLabel:'The way we make',principleOneTitle:'Atmosphere first.',principleOneBody:'Every light, silence, and distant sound earns its place.',principleTwoTitle:'Stories with teeth.',principleTwoBody:'Flawed people, difficult choices.',principleThreeTitle:'Craft over noise.',principleThreeBody:'Small teams stay close to the work.'},
    team:{eyebrow:'The people behind the signal',title:'The tails behind Nyxtails.',intro:'Three founders, one obsession.',melihRole:'Co-founder · Creative direction',ahmetRole:'Co-founder · Technology & production',talhaRole:'Co-founder · Game development',note:'Built with obsession, felt everywhere.',companyLink:'Meet us on LinkedIn'},
    journal:{eyebrow:'Notes from the dark',title:'The journal.',allCta:'All transmissions',featureType:'Development log / film 01',featureTitle:'What waits between the rooms?',featureBody:'A first look at systems, sounds, and unsettling little rules.',watch:'Watch on YouTube',itemOneType:'Devlog',itemOneTitle:'Building tension one sound at a time',itemOneBody:'Why silence is the most expensive tool.',itemTwoType:'Open notebook',itemTwoTitle:'A small team in a very big maze',itemTwoBody:'Tools, experiments, things we leave on GitHub.',itemThreeType:'Studio note',itemThreeTitle:'Built to be felt, not explained',itemThreeBody:'The place we start from, and worlds we share.',follow:'Follow the trail'},
    careers:{eyebrow:'Leave the light on',title:'There is room for your shadow.',body:'Not hiring for a checklist. Looking for curious people.',cta:'Start a conversation'},
    contact:{eyebrow:'Open frequency',title:'Have a story worth getting lost in?',body:'Tell us the thought you cannot shake.'},
    footer:{tagline:'Weaving darkness into worlds.',backTop:'Back to top',made:'Made with obsession'}
  },
  tr:{
    nav:{games:'Oyunlar',studio:'Stüdyo',team:'Ekip',journal:'Günlük',contact:'İletişim'},
    hero:{eyebrow:'Bağımsız oyun stüdyosu — TR / EN / JP',lineOne:'Karanlığı',lineTwo:'dünyalara',lineThree:'işliyoruz.',description:'Ekran karardıktan sonra bile içinizde kalan hisler için atmosferik, hikâye odaklı oyunlar.',ctaGames:'Oyunlarımızı keşfet',ctaStudio:'Stüdyoyla tanış',sideNote:'Merak edenler için.<br>Cesur olanlar için.<br>Daha yakından bakanlar için.',metaOneLabel:'Güncel sinyal',metaOneValue:'01 / Üretim aşamasında',metaTwoLabel:'Odak',metaTwoValue:'Atmosferik korku & co-op',scroll:'Aşağıya in'},
    games:{eyebrow:'Dünyalar çağırıyor',title:'İçinde hayat atan oyunlar.',intro:'Kaybolabileceğiniz yerler inşa ediyoruz.',filterLabel:'OYUNLARI AÇ',tabAll:'RESMİ SİTE',tabSteam:'STEAM',websiteOption:'Resmi Site',tail:'Karanlıkta dört dünya. Yakında daha fazla sinyal.',nocturne:{badge:'GELİŞTİRME AŞAMASINDA',subtitle:'Atmosferik Hikâye · Tek Oyuncu'},backrooms:{badge:'ERKEN ERİŞİM · TEM 2026',subtitle:'6 Oyunculu İşbirliği Hayatta Kalma Korku'},filecopy:{badge:'PROTOTİP · DEMO',subtitle:'Sosyal Dedüksiyon · Ofis Kaosu'},cozymint:{badge:'GELİŞTİRME AŞAMASINDA',subtitle:'Figür & TCG Simülatörü'}},
    studio:{eyebrow:'Uzun gölgeli küçük bir stüdyo',title:'Sessiz saatlerde.',intro:'Nyx, hikâye başlamadan önceki gecedir.',quote:'Karanlık boş değildir. Her şey orada başlar.',quoteCredit:'— Nyxtails stüdyo notu / 001',storyLead:'Biz Nyxtails Studio’yuz.',storyBodyOne:'İsmimiz iki zıtlığın buluşması.',storyBodyTwo:'Dokusunu hissedeceğiniz dünyalar yapıyoruz.',cta:'Biraz daha yaklaş',principlesLabel:'Üretme biçimimiz',principleOneTitle:'Önce atmosfer.',principleOneBody:'Her ışık, sessizlik yerini hak eder.',principleTwoTitle:'Dişleri olan hikâyeler.',principleTwoBody:'Kusurlu insanlar, zor seçimler.',principleThreeTitle:'Gürültü değil, zanaat.',principleThreeBody:'Küçük ekipler işe yakın kalır.'},
    team:{eyebrow:'Sinyalin ardındaki insanlar',title:'Nyxtails’in ardındaki kuyruklar.',intro:'Üç kurucu, tek takıntı.',melihRole:'Kurucu ortak · Yaratıcı yönetim',ahmetRole:'Kurucu ortak · Teknoloji ve prodüksiyon',talhaRole:'Kurucu ortak · Oyun geliştirme',note:'Tutkuyla üretildi, her yerde hissedildi.',companyLink:'LinkedIn’de tanışalım'},
    journal:{eyebrow:'Karanlıktan notlar',title:'Stüdyo günlüğü.',allCta:'Tüm aktarımlar',featureType:'Geliştirme günlüğü / film 01',featureTitle:'Odaların arasında ne bekliyor?',featureBody:'Backrooms Manager — Together’ın sistemlerine ilk bakış.',watch:'YouTube’da izle',itemOneType:'Geliştirme günlüğü',itemOneTitle:'Gerilimi her sesle kurmak',itemOneBody:'Sessizliğin en pahalı araç oluşu.',itemTwoType:'Açık defter',itemTwoTitle:'Küçük bir ekip, çok büyük bir labirent',itemTwoBody:'Araçlar ve GitHub’da bıraktıklarımız.',itemThreeType:'Stüdyo notu',itemThreeTitle:'Gölgeden, duyguyla',itemThreeBody:'Başladığımız yer ve dünyalar.',follow:'İzi takip et'},
    careers:{eyebrow:'Işığı açık bırak',title:'Gölgen için yer var.',body:'Kontrol listesi için işe almıyoruz.',cta:'Bir sohbet başlatalım'},
    contact:{eyebrow:'Açık frekans',title:'Kaybolmaya değer bir hikâyen mi var?',body:'Aklından çıkaramadığın düşünceyi anlat.'},
    footer:{tagline:'Karanlığı dünyalara işliyoruz.',backTop:'Başa dön',made:'Tutkuyla yapıldı'}
  },
  ja:{
    nav:{games:'ゲーム',studio:'スタジオ',team:'チーム',journal:'ジャーナル',contact:'お問い合わせ'},
    hero:{eyebrow:'インディーゲームスタジオ — TR / EN / 日本語',lineOne:'闇を',lineTwo:'世界に',lineThree:'織り込む。',description:'画面が暗くなったあとも心に残る、雰囲気と物語重視のゲームを作っています。',ctaGames:'ゲームを見る',ctaStudio:'スタジオを知る',sideNote:'好奇心のある人へ。<br>勇気ある人へ。<br>もっと近くで見つめる人へ。',metaOneLabel:'現在のシグナル',metaOneValue:'01 / 制作中',metaTwoLabel:'フォーカス',metaTwoValue:'雰囲気ホラー & Co-op',scroll:'スクロールして降りる'},
    games:{eyebrow:'世界が呼んでいる',title:'鼓動するゲームたち。',intro:'迷い込める場所を作り、そして戻ってくる理由を与える。',filterLabel:'ゲームを開く',tabAll:'公式サイト',tabSteam:'STEAM',websiteOption:'公式サイト',tail:'暗闇に4つの世界。さらなるシグナルは近日中に。',nocturne:{badge:'開発中',subtitle:'雰囲気重視ストーリー・シングルプレイヤー'},backrooms:{badge:'早期アクセス・2026年7月',subtitle:'6人協力サバイバルホラー'},filecopy:{badge:'プロトタイプ・デモ',subtitle:'社会的推理・オフィスカオス'},cozymint:{badge:'開発中',subtitle:'フィギュア & TCGシミュレーター'}},
    studio:{eyebrow:'長い影を持つ小さなスタジオ',title:'静かな時間に作られた。',intro:'Nyxは物語が始まる前の夜。私たちはそこで働くのが好きだ。',quote:'暗闇は空ではない。すべてはそこから始まる。',quoteCredit:'— Nyxtails スタジオノート / 001',storyLead:'私たちはNyxtails Studio。恐怖と驚きの狭間でゲームを作るチーム。',storyBodyOne:'名前は対極の出会い。Nyx、古代の夜、そして狐。',storyBodyTwo:'手触りのある世界、牙のある物語を作ります。',cta:'もっと近づく',principlesLabel:'私たちの作り方',principleOneTitle:'まずは雰囲気。',principleOneBody:'すべての光、沈黙、音が居場所を得る。',principleTwoTitle:'牙のある物語。',principleTwoBody:'不完全な人々、難しい選択。',principleThreeTitle:'ノイズよりクラフト。',principleThreeBody:'小さなチームだから仕事に近づける。'},
    team:{eyebrow:'シグナルの裏にいる人々',title:'Nyxtailsの裏の尻尾たち。',intro:'3人の創業者、1つの執着。',melihRole:'共同創業者・クリエイティブ',ahmetRole:'共同創業者・テクノロジー',talhaRole:'共同創業者・ゲーム開発',note:'執着で作られ、至る所で感じられる。',companyLink:'LinkedInで会う'},
    journal:{eyebrow:'暗闇からのノート',title:'ジャーナル。',allCta:'全ての通信',featureType:'開発ログ / フィルム01',featureTitle:'部屋の間に何が待つ？',featureBody:'Backrooms Managerのシステムと音の初公開。',watch:'YouTubeで見る',itemOneType:'開発ログ',itemOneTitle:'緊張感を音で作る',itemOneBody:'沈黙が最も高価な道具な理由。',itemTwoType:'オープンノート',itemTwoTitle:'小さなチーム、巨大な迷路',itemTwoBody:'ツールとGitHubに残すもの。',itemThreeType:'スタジオノート',itemThreeTitle:'感じられるために作る',itemThreeBody:'原点と共有したい世界。',follow:'痕跡を追う'},
    careers:{eyebrow:'明かりをつけたままに',title:'あなたの影の居場所がある。',body:'チェックリストのためではない。最後の1%にこだわる好奇心ある人を探している。',cta:'会話を始める'},
    contact:{eyebrow:'開かれた周波数',title:'迷い込む価値のある物語はある？',body:'頭から離れない考えを教えてください。'},
    footer:{tagline:'暗闇を世界に織り込む。',backTop:'トップへ戻る',made:'執着を込めて作られた'}
  }
};

let currentLang = localStorage.getItem('nyxtails-lang') || window.NYXT_INITIAL_LANG || 'en';
let switchTimer=null;
function t(p){return p.split('.').reduce((a,c)=>a&&a[c], copy[currentLang]);}
function renderLang(lang){
  if(!copy[lang]) return;
  currentLang=lang;
  localStorage.setItem('nyxtails-lang', lang);
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=t(el.dataset.i18n);
    if(v!==undefined) el.innerHTML=v;
  });
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.classList.toggle('is-active', btn.dataset.lang===lang));
  document.title = lang==='ja' ? 'Nyxtails Studio — 闇を世界に織り込む' : lang==='tr' ? 'Nyxtails Studio — Karanlığı Dünyalara İşliyoruz' : 'Nyxtails Studio — Weaving Darkness Into Worlds';
  syncTiles();
}
function applyLang(lang){
  if(!copy[lang]) return;
  if(lang===currentLang && document.body.classList.contains('is-ready')){ renderLang(lang); return; }
  clearTimeout(switchTimer);
  if(!document.body.classList.contains('is-ready')){ renderLang(lang); return; }
  document.documentElement.classList.add('is-switching');
  switchTimer=setTimeout(()=>{
    renderLang(lang);
    setTimeout(()=>document.documentElement.classList.remove('is-switching'), 480);
  }, 170);
}
function syncTiles(){
  document.querySelectorAll('[data-game]').forEach(tile=>{
    const site=tile.querySelector('[data-site-link]');
    const steam=tile.querySelector('[data-steam-link]');
    if(site) site.href=tile.dataset.website||'#';
    if(!steam) return;
    if(tile.dataset.steam){ steam.href=tile.dataset.steam; steam.classList.remove('is-disabled'); }
    else { steam.classList.add('is-disabled'); steam.removeAttribute('href'); }
  });
}
function setupFilters(){
  const tabs=document.querySelectorAll('[data-filter]');
  const tiles=document.querySelectorAll('.game-tile');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const f=tab.dataset.filter;
      tabs.forEach(t=>{ t.classList.toggle('is-active', t===tab); t.setAttribute('aria-selected', t===tab?'true':'false'); });
      tiles.forEach(tile=>{
        const hasSteam=tile.dataset.hasSteam==='1';
        if(f==='all') tile.classList.remove('is-hidden');
        else if(f==='steam') tile.classList.toggle('is-hidden', !hasSteam);
        else tile.classList.remove('is-hidden');
      });
    });
  });
}
function setupGate(){
  const gate=document.getElementById('language-gate');
  if(!gate) return;
  if(localStorage.getItem('nyxtails-gate-v4')==='seen'){ gate.classList.add('is-hidden'); return; }
  document.body.classList.add('gate-open');
  gate.setAttribute('aria-hidden','false');
  gate.querySelectorAll('[data-gate-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const l=btn.dataset.gateLang;
      if(!copy[l]) return;
      renderLang(l);
      localStorage.setItem('nyxtails-gate-v4','seen');
      gate.classList.add('is-leaving');
      document.body.classList.remove('gate-open');
      setTimeout(()=>{ gate.classList.add('is-hidden'); gate.setAttribute('aria-hidden','true'); document.body.classList.add('is-ready'); }, 600);
    });
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  renderLang(currentLang);
  document.body.classList.add('is-ready');
  const header=document.querySelector('.site-header');
  const menuBtn=document.querySelector('.menu-btn');
  const mobile=document.querySelector('.mobile-nav');
  const closeMenu=()=>{
    menuBtn?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded','false');
    mobile?.classList.remove('is-open');
    mobile?.setAttribute('aria-hidden','true');
    document.body.classList.remove('menu-open');
  };
  const toggleMenu=()=>{
    const willOpen=!menuBtn.classList.contains('is-open');
    menuBtn.classList.toggle('is-open', willOpen);
    menuBtn.setAttribute('aria-expanded', String(willOpen));
    mobile.classList.toggle('is-open', willOpen);
    mobile.setAttribute('aria-hidden', String(!willOpen));
    document.body.classList.toggle('menu-open', willOpen);
  };
  menuBtn?.addEventListener('click', toggleMenu);
  mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
  window.addEventListener('scroll', ()=>header?.classList.toggle('scrolled', window.scrollY>18), {passive:true});
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click', ()=>applyLang(b.dataset.lang)));
  syncTiles(); setupFilters(); setupGate();
  const io=new IntersectionObserver((entries, obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, {threshold:.14, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const dot=document.querySelector('.cursor-dot');
  const glow=document.querySelector('.cursor-glow');
  if(dot && glow && window.matchMedia('(pointer:fine)').matches){
    let cx=0,cy=0,gx=0,gy=0,raf=null;
    window.addEventListener('pointermove', e=>{
      cx=e.clientX; cy=e.clientY;
      dot.style.left=cx+'px'; dot.style.top=cy+'px'; dot.style.opacity='1'; glow.style.opacity='.7';
      if(!raf) raf=requestAnimationFrame(()=>{ gx+=(cx-gx)*.12; gy+=(cy-gy)*.12; glow.style.left=gx+'px'; glow.style.top=gy+'px'; raf=null; });
    });
    window.addEventListener('pointerout', e=>{ if(!e.relatedTarget){ dot.style.opacity='0'; glow.style.opacity='0'; } });
    document.querySelectorAll('a,button,[data-tilt]').forEach(el=>{
      el.addEventListener('pointerenter', ()=>dot.classList.add('hover'));
      el.addEventListener('pointerleave', ()=>dot.classList.remove('hover'));
    });
  }
  if(window.matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('[data-tilt]').forEach(card=>{
      card.addEventListener('pointermove', e=>{
        const r=card.getBoundingClientRect();
        const rx=((e.clientY-r.top)/r.height-.5)*-3;
        const ry=((e.clientX-r.left)/r.width-.5)*3;
        card.style.transform=`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', ()=>{ card.style.transform=''; });
    });
  }
  document.querySelectorAll('.game-tile').forEach(tile=>{
    tile.addEventListener('click', e=>{
      if(e.target.closest('a')) return;
      const active=document.querySelector('.tiles-filter-tabs .is-active')?.dataset.filter;
      if(active==='steam' && tile.dataset.steam){ window.open(tile.dataset.steam, '_blank'); }
      else{
        const url=tile.dataset.website;
        if(url && url!=='#' && !url.startsWith('#')) window.open(url, '_blank');
        else if(url==='#contact') document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
  window.addEventListener('keydown', e=>{
    if(e.key==='Escape'){
      const gate=document.getElementById('language-gate');
      if(gate && !gate.classList.contains('is-hidden')){
        localStorage.setItem('nyxtails-gate-v4','seen');
        gate.classList.add('is-leaving');
        document.body.classList.remove('gate-open');
        setTimeout(()=>gate.classList.add('is-hidden'), 600);
      }
      closeMenu();
    }
  });
});
