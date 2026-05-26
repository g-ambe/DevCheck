import './styles.css';

const endpoint = import.meta.env.VITE_DEVCHECK_FORM_ENDPOINT;

const app = document.querySelector('#app');

const problems = [
  'システム開発をしたいけど、どの開発会社に相談すればいいかわからない',
  '作りたいものはあるけど、何をどう伝えればいいかわからない',
  '開発会社からの見積もりや提案内容が妥当なのかわからない',
  '既存ベンダーの対応や費用に不満がある',
  '会社名を出して相談したあと、営業され続けるのが不安'
];

const canDo = [
  ['開発会社選びの相談', '開発内容や予算感に合わせて、どのような開発会社に相談すべきかを整理します。'],
  ['要件・進め方の整理', '作りたいものが固まりきっていない段階でも、何を決めるべきか、どの順番で進めるべきかを一緒に整理します。'],
  ['見積もり・提案内容のチェック', '開発会社から受け取った見積もりや提案内容について、金額感・作業範囲・抜け漏れを現場目線で確認します。'],
  ['既存ベンダー見直し相談', '既存の開発会社の対応や費用に不安がある場合、見直すべきポイントや次の進め方を整理します。'],
  ['商談同席・第三者サポート', '必要に応じて、開発会社との商談に同席し、認識のズレや確認漏れを防ぎます。']
];

const reasons = [
  ['受託開発の実績を持つ開発会社が運営', '実際の開発現場を知っているからこそ、見積もりや進め方の違和感を現場目線で確認できます。'],
  ['紹介前提ではなく、まずは相談から', '開発会社を紹介することだけが目的ではありません。まずは現状の課題や不安を整理し、必要な進め方をご提案します。'],
  ['会社名を伏せた匿名相談も可能', '初回相談では、会社名や詳細情報を伏せた状態でも相談可能です。営業される不安を抑えながらご相談いただけます。'],
  ['必要に応じて商談同席も対応', '開発会社との会話に不安がある場合は、第三者として商談に同席し、認識違いや確認漏れを防ぎます。'],
  ['自社対応ありきではなく、最適な進め方を優先', '必要に応じて自社での開発対応も可能ですが、あくまで貴社に合った進め方を優先してご提案します。']
];

const faqs = [
  ['会社名を出さずに相談できますか？', '可能です。初回相談では、会社名を伏せた状態でもご相談いただけます。ただし、DevCheckは法人企業向けサービスのため、法人としてのご相談であることは確認させていただきます。'],
  ['相談だけでも大丈夫ですか？', '大丈夫です。開発会社の紹介を前提にせず、まずは現状整理や進め方の確認から対応します。'],
  ['まだ要件が固まっていなくても相談できますか？', '可能です。作りたいものや解決したい課題が明確でない段階でも、何を整理すべきか一緒に確認します。'],
  ['すでに他社から見積もりをもらっていますが、相談できますか？', '可能です。見積もり金額や作業範囲、進め方に不安がある場合もご相談いただけます。'],
  ['DevCheckの運営会社に発注する必要はありますか？', 'ありません。必要に応じて自社での対応も可能ですが、あくまで貴社に合った進め方を優先してご提案します。'],
  ['NDAは締結できますか？', '必要に応じてNDA締結も可能です。詳細な情報を共有いただく前に、個別にご相談ください。'],
  ['フリーランスを紹介されますか？', '原則として、法人の開発会社・受託企業を中心にご提案します。'],
  ['個人や個人事業主でも相談できますか？', 'DevCheckは法人企業向けサービスです。原則として、法人格を持つ企業からのご相談を対象としています。'],
  ['どのくらいの予算から相談できますか？', '明確な下限は設けていませんが、ご相談内容や想定される開発規模によっては対応が難しい場合がございます。まずはフォームよりご相談ください。'],
  ['初回相談に費用はかかりますか？', '初回相談は無料です。追加支援が必要な場合は、内容に応じて事前に費用をご案内します。']
];

app.innerHTML = `
<header class="header">
  <div class="header__inner container">
    <a class="logo" href="#top">DevCheck</a>
    <nav class="nav">
      <a href="#issues">悩み</a>
      <a href="#services">できること</a>
      <a href="#flow">流れ</a>
      <a href="#faq">FAQ</a>
      <a href="#form" class="btn btn--small">無料相談</a>
    </nav>
  </div>
</header>
<main id="top">
  <section class="hero section-alt">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container hero__grid">
      <div class="hero-copy">
        <p class="pill">法人向け開発相談サービス</p>
        <h1>開発に関するセカンドオピニオンは、<br><span class="brand">DevCheckへ。</span></h1>
        <p class="lead">DevCheckは、<strong>受託開発の実績</strong>を持つ<strong>開発会社が運営</strong>する法人向けの開発相談サービスです。</p>
        <p class="lead">見積もり・進め方・開発会社選びの不安を、現場を知る<strong>第三者視点</strong>でチェックします。</p>
        <p class="lead">必要に応じて自社での対応も可能ですが、あくまで<strong>貴社に合った進め方</strong>を優先してご提案します。</p>
        <a href="#form" class="btn">無料で相談する</a>
        <div class="badge-row"><span>匿名相談可</span><span>初回相談無料</span><span>NDA対応可</span><span>無理な営業なし</span></div>
      </div>
      <aside class="hero-card">
        <p class="hero-card__title">発注前に確認したいこと</p>
        <ul>
          <li>見積もりは妥当か</li><li>進め方にリスクはないか</li><li>開発会社選びは適切か</li><li>要件に抜け漏れはないか</li><li>相談前に整理すべき点は何か</li>
        </ul>
        <p class="hero-card__note">DevCheckが第三者視点で整理します</p>
      </aside>
    </div>
  </section>

  <section class="section" id="issues"><div class="container"><h2>開発会社選びで、こんなお悩みありませんか？</h2><div class="cards cards--issues">${problems.map((p)=>`<article class="card issue"><span class="dot" aria-hidden="true"></span><p>${p}</p></article>`).join('')}</div><p class="bridge">DevCheckは、開発会社へ依頼する前の不安を、現場を知る第三者視点で整理する相談サービスです。</p></div></section>

  <section class="section section-alt" id="services"><div class="container"><h2>DevCheckでできること</h2><div class="cards">${canDo.map(([t,d])=>`<article class="card feature"><div class="icon"></div><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>

  <section class="section"><div class="container"><h2>DevCheckが選ばれる理由</h2><div class="cards">${reasons.map(([t,d],i)=>`<article class="card reason"><span class="num">${i+1}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>

  <section class="section section-alt" id="flow"><div class="container"><h2>ご利用の流れ</h2><p class="flow-lead">かんたん5ステップで、相談から進め方整理まで伴走します。</p><div class="timeline">${[
    ['STEP 1','無料相談フォームからお問い合わせ','現在のお悩みや相談内容を簡単にご入力ください。会社名を伏せた匿名相談も可能です。なお、DevCheckは法人企業向けサービスのため、法人としてのご相談であることを確認させていただきます。'],
    ['STEP 2','DevCheckが内容を確認','相談内容をもとに、課題や確認すべきポイントを整理します。'],
    ['STEP 3','必要に応じてオンラインヒアリング','担当者がオンラインで詳しくお話を伺い、現在の状況や希望条件を確認します。'],
    ['STEP 4','進め方の方向性をご提案','開発会社へ依頼すべきか、要件整理から進めるべきか、見積もりを比較すべきかなど、貴社に合った進め方を整理します。'],
    ['STEP 5','必要に応じて開発会社選定・商談支援','ご希望に応じて、開発会社選びや商談同席、自社対応の検討まで支援します。']
  ].map(([s,t,d])=>`<article class="step"><p class="step__num">${s}</p><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>

  <section class="section" id="faq"><div class="container"><h2>よくある質問</h2><div class="faq">${faqs.map(([q,a])=>`<details class="card"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div><p class="notice">初回相談は無料です。まずは現在のお悩みやご状況をお伺いし、開発会社へ依頼すべきか、要件整理から進めるべきかなど、進め方の方向性を整理します。<br>※DevCheckは法人企業向けのサービスです。ご相談内容や想定される開発規模によっては、対応が難しい場合がございます。</p></div></section>

  <section class="section section-alt" id="form"><div class="container"><h2>無料相談フォーム</h2><p>まずは現在のお悩みやご状況をお聞かせください。内容を確認のうえ、必要に応じてオンラインでヒアリングを実施します。</p><ul class="trust"><li>初回相談無料</li><li>匿名相談可</li><li>NDA対応可</li><li>無理な営業なし</li><li>法人企業向け</li></ul>
  <form id="consultForm" class="form-card">
    <label>会社名 <span class="meta">匿名相談を希望される場合は未入力でも可</span><input name="companyName" type="text"></label>
    <fieldset><legend>法人としてのご相談ですか？ <span class="req">必須</span></legend><label><input type="radio" name="isCorporation" value="はい" required>はい</label><label><input type="radio" name="isCorporation" value="いいえ">いいえ</label></fieldset>
    <label>お名前 <span class="req">必須</span><input name="name" type="text" required></label>
    <label>メールアドレス <span class="req">必須</span><input name="email" type="email" required></label>
    <label>電話番号 <span class="meta">任意</span><input name="phone" type="tel"></label>
    <label>相談内容 <span class="req">必須</span><textarea name="consultation" required placeholder="例：開発会社選びに迷っている、見積もりが妥当か確認したい、既存ベンダーを見直したい など"></textarea></label>
    <label>現在の状況 <span class="req">必須</span><select name="currentStatus" required><option value="">選択してください</option><option>これから開発会社を探したい</option><option>すでに開発会社へ相談している</option><option>見積もりを受け取っている</option><option>既存ベンダーを見直したい</option><option>要件整理から相談したい</option><option>その他</option></select></label>
    <label>想定予算 <span class="req">必須</span><select name="budget" required><option value="">選択してください</option><option>未定</option><option>〜100万円</option><option>100万円〜300万円</option><option>300万円〜500万円</option><option>500万円〜1,000万円</option><option>1,000万円以上</option></select></label>
    <label>希望時期 <span class="req">必須</span><select name="timeline" required><option value="">選択してください</option><option>未定</option><option>できるだけ早く</option><option>1ヶ月以内</option><option>3ヶ月以内</option><option>半年以内</option><option>時期は決まっていない</option></select></label>
    <fieldset><legend>匿名相談希望の有無 <span class="req">必須</span></legend><label><input type="radio" name="anonymous" value="希望する" required>希望する</label><label><input type="radio" name="anonymous" value="希望しない">希望しない</label><label><input type="radio" name="anonymous" value="まずは相談して決めたい">まずは相談して決めたい</label></fieldset>
    <fieldset><legend>NDA希望の有無 <span class="req">必須</span></legend><label><input type="radio" name="nda" value="希望する" required>希望する</label><label><input type="radio" name="nda" value="希望しない">希望しない</label><label><input type="radio" name="nda" value="相談内容によって検討したい">相談内容によって検討したい</label></fieldset>
    <button id="submitBtn" type="submit" class="btn btn--full">無料で相談する</button>
    <p id="formMessage" class="form-message" aria-live="polite"></p>
  </form></div></section>

  <section class="section"><div class="container final"><h2>開発会社に相談する前に、<br>まずはDevCheckへご相談ください。</h2><p>見積もり・進め方・会社選びの不安を、現場を知る第三者視点で整理します。</p><a href="#form" class="btn">無料で相談する</a></div></section>
</main>`;

const form = document.getElementById('consultForm');
const message = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!endpoint) {
    message.textContent = '送信先が未設定です。Cloudflare Pagesの環境変数 VITE_DEVCHECK_FORM_ENDPOINT を設定してください。';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = '送信中...';

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.submittedAt = new Date().toISOString();
  payload.source = 'DevCheck LP';
  payload.pageUrl = window.location.href;
  payload.userAgent = window.navigator.userAgent;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error();

    message.textContent = 'お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。ご相談内容や想定される開発規模によっては、対応が難しい場合もございますが、可能な範囲で貴社に合った進め方をご案内いたします。';
    form.reset();
  } catch {
    message.textContent = '送信に失敗しました。お手数ですが、時間をおいて再度お試しください。';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '無料で相談する';
  }
});
