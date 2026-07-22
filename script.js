document.documentElement.classList.add('js');

const copy = {
  en: {
    nav: { games: 'Games', studio: 'Studio', journal: 'Journal', careers: 'Careers', contact: 'Contact' },
    hero: {
      eyebrow: 'Independent game studio · Worldwide', lineOne: 'Weaving', lineTwo: 'darkness', lineThree: 'into worlds.',
      description: 'We create atmospheric, story-driven games for the feelings that stay after the screen goes dark.',
      ctaGames: 'Explore our games', ctaStudio: 'Meet the studio', sideNote: 'For the curious.<br>For the brave.<br>For the ones<br>who look closer.',
      metaOneLabel: 'Current signal', metaOneValue: '01 / In the making', metaTwoLabel: 'Audience', metaTwoValue: 'Worldwide', metaThreeLabel: 'Est.', scroll: 'Scroll to descend', languageLabel: 'Language'
    },
    games: {
      eyebrow: 'The worlds are calling', title: 'Games<br><em>with a pulse.</em>', intro: 'We build places you can get lost in — then give you a reason to find your way back.',
      frameLabel: 'Selected worlds / 04', frameHint: 'Hover a project to choose its destination', frameFoot: 'Each world has its own door.', launchLabel: 'Open project', launchPrompt: 'Choose a destination', websiteOption: 'Official site', steamOption: 'Steam',
      cardOne: { status: 'In development', kicker: 'Co-op survival horror · Unreal Engine 5', description: 'The quota is simple. The place is not. Scavenge an endless architecture with your crew, turn impossible junk into a living business, and keep the dark from balancing the books.', websiteCta: 'Enter the game site', steamCta: 'Wishlist on Steam', fallbackCta: 'Official site · Steam page soon', tags: '6 players · Early access · 2026' },
      cardTwo: { status: 'In development', kicker: 'Social deduction · Office chaos · Co-op', description: 'Fill documents. Listen to phones. Decide who deserves your trust. In Zaisen Corp., every round is a new office rumour with a score attached.', websiteCta: 'Enter the game site', steamCta: 'Steam page coming soon', fallbackCta: 'Official site · Steam page soon', tags: '2–8 employees · Social deduction' },
      cardThree: { status: 'Building the collection', kicker: 'Co-op shop management · TCG simulator', description: 'Open a tiny figure shop, chase impossible pulls, ride a living market, and build a collection worth showing off — together or on your own terms.', websiteCta: 'Explore the project', steamCta: 'Steam page coming soon', fallbackCta: 'Official site · Steam page soon', tags: '1–4 players · Collection sim' },
      cardFour: { status: 'A secret taking shape', kicker: 'Narrative dark fantasy · Original IP', description: 'Some stories are not told in daylight. A first glimpse into a myth we are building from shadow, memory, and the softest kind of danger.', websiteCta: 'Keep me close', steamCta: 'Steam page coming soon', fallbackCta: 'Official site · Steam page soon', tags: 'Original IP · Early concept' },
      tail: 'Four worlds in the dark. More signals soon.'
    },
    studio: {
      eyebrow: 'A small studio with a long shadow', title: 'Made in the<br><em>quiet hours.</em>', intro: 'Nyx is the night before the story begins. That is where we like to work.',
      quote: 'The dark is not empty.<br><em>It is where everything begins.</em>', quoteCredit: '— Nyxtails studio note / 001',
      storyLead: 'We are Nyxtails Studio, an independent team building games for the space between fear and wonder.',
      storyBodyOne: 'Our name is a meeting of opposites: Nyx, the ancient night, and the fox — clever, restless, impossible to fully catch. It is a reminder that atmosphere can be a character, that a quiet hallway can say more than a thousand words, and that the best stories follow you home.',
      storyBodyTwo: 'We make worlds with texture. Stories with teeth. Experiences that respect your time, then stay in your head long after you have put the controller down.', cta: 'Come a little closer', principlesLabel: 'The way we make',
      principleOneTitle: 'Atmosphere<br><em>first.</em>', principleOneBody: 'Every light, silence, and distant sound earns its place. Mood is not decoration — it is the language.',
      principleTwoTitle: 'Stories<br><em>with teeth.</em>', principleTwoBody: 'We are drawn to the complicated bits: flawed people, difficult choices, and feelings that refuse a neat ending.',
      principleThreeTitle: 'Craft over<br><em>noise.</em>', principleThreeBody: 'Small teams let us stay close to the work. We polish the detail you may never name, but will always feel.'
    },
    team: {
      eyebrow: 'The people behind the signal', title: 'The tails<br><em>behind Nyxtails.</em>', intro: 'Three founders, one shared obsession: making the invisible feel real.',
      melihRole: 'Co-founder · Creative direction', ahmetRole: 'Co-founder · Technology & production', talhaRole: 'Co-founder · Game development', note: 'Built with obsession,<br><em>felt everywhere.</em>', companyLink: 'Meet us on LinkedIn'
    },
    journal: {
      eyebrow: 'Notes from the dark', title: 'The<br><em>journal.</em>', allCta: 'All transmissions', featureType: 'Development log / film 01', featureTitle: 'What waits<br><em>between the rooms?</em>', featureBody: 'A first look at the systems, sounds, and unsettling little rules behind Backrooms Manager — Together.', watch: 'Watch on YouTube',
      itemOneType: 'Devlog', itemOneTitle: 'Building tension<br>one sound at a time', itemOneBody: 'Why silence is the most expensive tool in our kit.', itemTwoType: 'Open notebook', itemTwoTitle: 'A small team<br>in a very big maze', itemTwoBody: 'Tools, experiments, and the things we leave on GitHub.', itemThreeType: 'Studio note', itemThreeTitle: 'Built to be felt,<br>not explained', itemThreeBody: 'The place we start from, and the worlds we want to share.', follow: 'Follow the trail'
    },
    careers: { eyebrow: 'Leave the light on', title: 'There is room<br><em>for your shadow.</em>', body: 'We are not hiring for a checklist. We are looking for curious people who care about the last 1% — the strange detail that makes a world breathe.', cta: 'Start a conversation' },
    contact: { eyebrow: 'Open frequency', title: 'Have a story<br><em>worth getting lost in?</em>', body: 'Tell us the thought you cannot shake. We read every signal.' },
    footer: { tagline: 'Weaving darkness into worlds.', backTop: 'Back to top', made: 'Made with obsession', locale: 'Global / Independent' }
  },
  tr: {
    nav: { games: 'Oyunlar', studio: 'Stüdyo', journal: 'Günlük', careers: 'Kariyer', contact: 'İletişim' },
    hero: {
      eyebrow: 'Bağımsız oyun stüdyosu · Dünya çapında', lineOne: 'Karanlığı', lineTwo: 'dünyalara', lineThree: 'işliyoruz.',
      description: 'Ekran karardıktan sonra bile içinizde kalan hisler için atmosferik, hikâye odaklı oyunlar yaratıyoruz.',
      ctaGames: 'Oyunlarımızı keşfet', ctaStudio: 'Stüdyoyla tanış', sideNote: 'Merak edenler için.<br>Cesur olanlar için.<br>Daha yakından<br>bakanlar için.',
      metaOneLabel: 'Güncel sinyal', metaOneValue: '01 / Üretim aşamasında', metaTwoLabel: 'Kitle', metaTwoValue: 'Dünya çapında', metaThreeLabel: 'Kuruluş', scroll: 'Aşağıya in', languageLabel: 'Dil'
    },
    games: {
      eyebrow: 'Dünyalar çağırıyor', title: 'İçinde hayat<br><em>atan oyunlar.</em>', intro: 'Kaybolabileceğiniz yerler inşa ediyoruz — sonra size geri dönmek için bir sebep veriyoruz.',
      frameLabel: 'Seçili dünyalar / 04', frameHint: 'Hedefi seçmek için projenin üzerine gel', frameFoot: 'Her dünyanın kendine ait bir kapısı var.', launchLabel: 'Projeyi aç', launchPrompt: 'Bir hedef seç', websiteOption: 'Resmî site', steamOption: 'Steam',
      cardOne: { status: 'Geliştirme aşamasında', kicker: 'Birlikte hayatta kalma korkusu · Unreal Engine 5', description: 'Kota basit. Mekân değil. Ekibinle sonsuz mimaride ganimet topla, imkânsız hurdaları yaşayan bir işletmeye dönüştür ve karanlığın hesapları dengelemesine izin verme.', websiteCta: 'Oyun sitesine gir', steamCta: 'Steam’de istek listesine ekle', fallbackCta: 'Resmî site · Steam sayfası yakında', tags: '6 oyuncu · Erken erişim · 2026' },
      cardTwo: { status: 'Geliştirme aşamasında', kicker: 'Sosyal dedüksiyon · Ofis kaosu · Co-op', description: 'Belgeleri doldur. Telefonları dinle. Kime güveneceğine karar ver. Zaisen Corp.’ta her tur, puana dönüşen yeni bir ofis söylentisi.', websiteCta: 'Oyun sitesine gir', steamCta: 'Steam sayfası yakında', fallbackCta: 'Resmî site · Steam sayfası yakında', tags: '2–8 çalışan · Sosyal dedüksiyon' },
      cardThree: { status: 'Koleksiyon kuruluyor', kicker: 'Co-op dükkân yönetimi · TCG simülatörü', description: 'Küçük bir figür dükkânı aç, imkânsız kutuları kovala, yaşayan piyasayı yönet ve birlikte ya da kendi kurallarınla sergilenmeye değer bir koleksiyon kur.', websiteCta: 'Projeyi keşfet', steamCta: 'Steam sayfası yakında', fallbackCta: 'Resmî site · Steam sayfası yakında', tags: '1–4 oyuncu · Koleksiyon simülasyonu' },
      cardFour: { status: 'Şekillenen bir sır', kicker: 'Anlatı odaklı karanlık fantezi · Özgün IP', description: 'Bazı hikâyeler gün ışığında anlatılmaz. Gölgeden, hafızadan ve en yumuşak tehlike biçiminden kurduğumuz bir mite ilk bakış.', websiteCta: 'Beni haberdar et', steamCta: 'Steam sayfası yakında', fallbackCta: 'Resmî site · Steam sayfası yakında', tags: 'Özgün IP · Erken konsept' },
      tail: 'Karanlıkta dört dünya. Yakında daha fazla sinyal.'
    },
    studio: {
      eyebrow: 'Uzun gölgeli küçük bir stüdyo', title: 'Sessiz<br><em>saatlerde.</em>', intro: 'Nyx, hikâye başlamadan önceki gecedir. Biz çalışmayı orada seviyoruz.',
      quote: 'Karanlık boş değildir.<br><em>Her şey orada başlar.</em>', quoteCredit: '— Nyxtails stüdyo notu / 001',
      storyLead: 'Biz Nyxtails Studio’yuz; korku ile hayranlık arasındaki boşluk için oyunlar yapan, bağımsız bir ekibiz.',
      storyBodyOne: 'İsmimiz iki zıtlığın buluşması: kadim gece Nyx ve tilki — zeki, huzursuz, tamamen yakalanması imkânsız. Bu bize atmosferin bir karakter olabileceğini, sessiz bir koridorun bin kelimeden fazlasını anlatabileceğini ve en iyi hikâyelerin eve kadar sizinle geldiğini hatırlatıyor.',
      storyBodyTwo: 'Dokusunu hissedebileceğiniz dünyalar yapıyoruz. Dişleri olan hikâyeler. Zamanınıza saygı duyan, kumandayı bıraktıktan çok sonra bile zihninizde kalan deneyimler.', cta: 'Biraz daha yaklaş', principlesLabel: 'Üretme biçimimiz',
      principleOneTitle: 'Önce<br><em>atmosfer.</em>', principleOneBody: 'Her ışık, sessizlik ve uzaktan gelen ses yerini hak eder. Hâl, dekorasyon değil — dilin kendisidir.',
      principleTwoTitle: 'Dişleri olan<br><em>hikâyeler.</em>', principleTwoBody: 'Karmaşık anlara çekiliyoruz: kusurlu insanlar, zor seçimler ve kolay bir sonu reddeden duygular.',
      principleThreeTitle: 'Gürültü değil,<br><em>zanaat.</em>', principleThreeBody: 'Küçük ekipler işe yakın kalmamızı sağlıyor. Belki adını koyamayacağınız ama her zaman hissedeceğiniz detayı parlatıyoruz.'
    },
    team: {
      eyebrow: 'Sinyalin ardındaki insanlar', title: 'Nyxtails’in<br><em>ardındaki kuyruklar.</em>', intro: 'Üç kurucu, tek bir ortak takıntı: görünmeyeni gerçek hissettirmek.',
      melihRole: 'Kurucu ortak · Yaratıcı yönetim', ahmetRole: 'Kurucu ortak · Teknoloji ve prodüksiyon', talhaRole: 'Kurucu ortak · Oyun geliştirme', note: 'Tutkuyla üretildi,<br><em>her yerde hissedildi.</em>', companyLink: 'LinkedIn’de tanışalım'
    },
    journal: {
      eyebrow: 'Karanlıktan notlar', title: 'Stüdyo<br><em>günlüğü.</em>', allCta: 'Tüm aktarımlar', featureType: 'Geliştirme günlüğü / film 01', featureTitle: 'Odaların<br><em>arasında ne bekliyor?</em>', featureBody: 'Backrooms Manager — Together’ın sistemlerine, seslerine ve huzursuz edici küçük kurallarına ilk bakış.', watch: 'YouTube’da izle',
      itemOneType: 'Geliştirme günlüğü', itemOneTitle: 'Gerilimi her sesle<br>biraz daha kurmak', itemOneBody: 'Sessizliğin alet çantamızdaki en pahalı araç oluşu.', itemTwoType: 'Açık defter', itemTwoTitle: 'Küçük bir ekip,<br>çok büyük bir labirent', itemTwoBody: 'Araçlar, deneyler ve GitHub’da bıraktıklarımız.', itemThreeType: 'Stüdyo notu', itemThreeTitle: 'Gölgeden,<br>duyguyla', itemThreeBody: 'Başladığımız yer ve paylaşmak istediğimiz dünyalar.', follow: 'İzi takip et'
    },
    careers: { eyebrow: 'Işığı açık bırak', title: 'Gölgen için<br><em>yer var.</em>', body: 'Bir kontrol listesi için işe almıyoruz. Bir dünyayı nefes alır hâle getiren o tuhaf ayrıntıyı önemseyen, meraklı insanlar arıyoruz.', cta: 'Bir sohbet başlatalım' },
    contact: { eyebrow: 'Açık frekans', title: 'Kaybolmaya<br><em>değer bir hikâyen mi var?</em>', body: 'Aklından çıkaramadığın düşünceyi bize anlat. Her sinyali okuyoruz.' },
    footer: { tagline: 'Karanlığı dünyalara işliyoruz.', backTop: 'Başa dön', made: 'Tutkuyla yapıldı', locale: 'Dünya / Bağımsız' }
  }
};

let currentLanguage = localStorage.getItem('nyxtails-language') || window.NYXT_INITIAL_LANGUAGE || 'en';
let languageSwitchTimer;

function getCopy(key) {
  return key.split('.').reduce((result, part) => result && result[part], copy[currentLanguage]);
}

function renderLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('nyxtails-language', language);
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getCopy(element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === language);
    button.setAttribute('aria-pressed', button.dataset.lang === language ? 'true' : 'false');
  });
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = language === 'tr'
    ? 'Nyxtails Studio — Karanlığı dünyalara işliyoruz. Atmosferik, hikâye odaklı deneyimler yaratan bağımsız oyun stüdyosu.'
    : 'Nyxtails Studio — weaving darkness into worlds. An independent game studio creating atmospheric, story-driven experiences.';
  document.title = language === 'tr' ? 'Nyxtails Studio — Karanlığı Dünyalara İşliyoruz' : 'Nyxtails Studio — Weaving Darkness Into Worlds';
  syncProjectLinks();
}

function applyLanguage(language) {
  if (!copy[language]) return;
  const isChange = currentLanguage !== language && document.readyState !== 'loading';
  currentLanguage = language;
  clearTimeout(languageSwitchTimer);
  if (!isChange) {
    renderLanguage(language);
    return;
  }
  document.documentElement.classList.add('is-language-switching');
  languageSwitchTimer = window.setTimeout(() => {
    renderLanguage(language);
    window.setTimeout(() => document.documentElement.classList.remove('is-language-switching'), 460);
  }, 130);
}

function syncProjectLinks() {
  document.querySelectorAll('[data-game]').forEach((card) => {
    const siteLink = card.querySelector('[data-site-link]');
    const steamLink = card.querySelector('[data-steam-link]');
    if (siteLink) siteLink.href = card.dataset.website;
    if (!steamLink) return;
    if (card.dataset.steam) {
      steamLink.hidden = false;
      steamLink.href = card.dataset.steam;
      steamLink.removeAttribute('aria-disabled');
      steamLink.tabIndex = 0;
    } else {
      steamLink.hidden = true;
      steamLink.removeAttribute('href');
      steamLink.setAttribute('aria-disabled', 'true');
      steamLink.tabIndex = -1;
    }
  });
}

function setupLaunchMenus() {
  document.querySelectorAll('[data-launch-toggle]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const launch = trigger.closest('.project-launch');
      const open = !launch.classList.contains('is-open');
      document.querySelectorAll('.project-launch.is-open').forEach((item) => {
        item.classList.remove('is-open');
        item.querySelector('[data-launch-toggle]')?.setAttribute('aria-expanded', 'false');
      });
      launch.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.project-launch.is-open').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('[data-launch-toggle]')?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupLanguageGate() {
  const gate = document.querySelector('#language-gate');
  if (!gate) return;
  const hasChosenLanguage = localStorage.getItem('nyxtails-language-gate-v2') === 'seen';
  if (hasChosenLanguage) {
    gate.classList.add('is-hidden');
    return;
  }
  document.body.classList.add('gate-open');
  gate.setAttribute('aria-hidden', 'false');
  gate.querySelectorAll('[data-gate-language]').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.gateLanguage;
      if (!copy[language]) return;
      renderLanguage(language);
      localStorage.setItem('nyxtails-language-gate-v2', 'seen');
      gate.classList.add('is-leaving');
      document.body.classList.remove('gate-open');
      window.setTimeout(() => {
        gate.classList.add('is-hidden');
        gate.setAttribute('aria-hidden', 'true');
      }, 650);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLanguage);

  // Header state and mobile navigation.
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = () => {
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = !menuToggle.classList.contains('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.classList.toggle('is-open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });
  document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

  // Language controls work in both desktop and mobile headers.
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });
  syncProjectLinks();
  setupLaunchMenus();
  setupLanguageGate();

  // Staggered reveal as sections enter the viewport.
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  // Keep the scene alive with a very restrained mouse parallax.
  const hero = document.querySelector('.hero');
  const parallaxLayers = document.querySelectorAll('[data-speed]');
  if (hero && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - .5) * 2;
      const y = (event.clientY / window.innerHeight - .5) * 2;
      parallaxLayers.forEach((layer) => {
        const speed = Number(layer.dataset.speed) || .1;
        layer.style.transform = `scale(1.06) translate(${x * speed * -18}px, ${y * speed * -18}px)`;
      });
    });
    hero.addEventListener('pointerleave', () => parallaxLayers.forEach((layer) => { layer.style.transform = 'scale(1.06)'; }));
  }

  // Custom cursor and ambient glow are deliberately disabled on touch screens.
  const cursor = document.querySelector('.custom-cursor');
  const glow = document.querySelector('.cursor-glow');
  if (cursor && glow && window.matchMedia('(pointer: fine)').matches) {
    let cursorX = 0; let cursorY = 0; let glowX = 0; let glowY = 0;
    let frame;
    window.addEventListener('pointermove', (event) => {
      cursorX = event.clientX; cursorY = event.clientY;
      cursor.style.left = `${cursorX}px`; cursor.style.top = `${cursorY}px`;
      cursor.style.opacity = '1'; glow.style.opacity = '.8';
      if (!frame) frame = requestAnimationFrame(() => {
        glowX += (cursorX - glowX) * .12; glowY += (cursorY - glowY) * .12;
        glow.style.left = `${glowX}px`; glow.style.top = `${glowY}px`; frame = null;
      });
    });
    window.addEventListener('pointerout', (event) => { if (!event.relatedTarget) { cursor.style.opacity = '0'; glow.style.opacity = '0'; } });
    document.querySelectorAll('a, button, [data-tilt]').forEach((element) => {
      element.addEventListener('pointerenter', () => cursor.classList.add('is-hover'));
      element.addEventListener('pointerleave', () => cursor.classList.remove('is-hover'));
    });
  }

  // Subtle 3D card response, kept small so the artwork stays elegant.
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -3.5;
        const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 3.5;
        card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
    document.querySelectorAll('.magnetic').forEach((button) => {
      button.addEventListener('pointermove', (event) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * .12;
        const y = (event.clientY - bounds.top - bounds.height / 2) * .18;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }
});
