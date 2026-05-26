import './styles.css';

const endpoint = import.meta.env.VITE_DEVCHECK_FORM_ENDPOINT;

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="container">
    <section class="hero" id="top">
      <div class="hero__left">
        <p class="label">法人向け開発相談サービス</p>
        <h1>開発に関するセカンドオピニオンは、<br/>DevCheckへ。</h1>
        <p>DevCheckは、受託開発の実績を持つ開発会社が運営する法人向けの開発相談サービスです。</p>
        <p>システム開発会社への依頼前に、見積もり・進め方・会社選びの不安を現場を知る第三者視点でチェックします。</p>
        <p>必要に応じて自社での対応も可能ですが、あくまで貴社に合った進め方を優先してご提案します。</p>
        <p>会社名を伏せた匿名相談も可能。無理な営業は行いません。</p>
        <div class="tags"><span>匿名相談可</span><span>初回相談無料</span><span>NDA対応可</span></div>
        <a href="#form" class="cta">無料で相談する</a>
      </div>
      <aside class="hero__card"><h2>チェックポイント</h2><ul><li>見積もりは妥当か</li><li>進め方にリスクはないか</li><li>会社選びは適切か</li><li>要件の抜け漏れはないか</li><li>発注前に確認すべき点は何か</li></ul></aside>
    </section>
    <section><h2>開発会社選びで、こんなお悩みありませんか？</h2><ul class="list"><li>システム開発をしたいけど、どの開発会社に相談すればいいかわからない</li><li>作りたいものはあるけど、何をどう伝えればいいかわからない</li><li>開発会社からの見積もりや提案内容が妥当なのかわからない</li><li>既存ベンダーの対応や費用に不満がある</li><li>会社名を出して相談したあと、営業され続けるのが不安</li></ul><p>DevCheckは、開発会社へ依頼する前の不安を、現場を知る第三者視点で整理する相談サービスです。</p></section>
    <section><h2>DevCheckでできること</h2><div class="grid">${[
      ['開発会社選びの相談','開発内容や予算感に合わせて、どのような開発会社に相談すべきかを整理します。'],['要件・進め方の整理','作りたいものが固まりきっていない段階でも、何を決めるべきか、どの順番で進めるべきかを一緒に整理します。'],['見積もり・提案内容のチェック','開発会社から受け取った見積もりや提案内容について、金額感・作業範囲・抜け漏れを現場目線で確認します。'],['既存ベンダー見直し相談','既存の開発会社の対応や費用に不安がある場合、見直すべきポイントや次の進め方を整理します。'],['商談同席・第三者サポート','必要に応じて、開発会社との商談に同席し、認識のズレや確認漏れを防ぎます。']
    ].map(([t,d])=>`<article class='card'><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section>
    <section><h2>DevCheckが選ばれる理由</h2><div class="grid">${[
      ['受託開発の実績を持つ開発会社が運営','実際の開発現場を知っているからこそ、見積もりや進め方の違和感を現場目線で確認できます。'],['紹介前提ではなく、まずは相談から','開発会社を紹介することだけが目的ではありません。まずは現状の課題や不安を整理し、必要な進め方をご提案します。'],['会社名を伏せた匿名相談も可能','初回相談では、会社名や詳細情報を伏せた状態でも相談可能です。営業される不安を抑えながらご相談いただけます。'],['必要に応じて商談同席も対応','開発会社との会話に不安がある場合は、第三者として商談に同席し、認識違いや確認漏れを防ぎます。'],['自社対応ありきではなく、最適な進め方を優先','必要に応じて自社での開発対応も可能ですが、あくまで貴社に合った進め方を優先してご提案します。']
    ].map(([t,d])=>`<article class='card'><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section>
    <section><h2>ご利用の流れ</h2><ol class="steps"><li><b>STEP 1：</b>無料相談フォームからお問い合わせ</li><li><b>STEP 2：</b>DevCheckが内容を確認</li><li><b>STEP 3：</b>必要に応じてオンラインヒアリング</li><li><b>STEP 4：</b>進め方の方向性をご提案</li><li><b>STEP 5：</b>必要に応じて開発会社選定・商談支援</li></ol></section>
    <section><h2>よくある質問</h2><div class='faq'>${[
      ['会社名を出さずに相談できますか？','可能です。初回相談では、会社名を伏せた状態でもご相談いただけます。ただし、DevCheckは法人企業向けサービスのため、法人としてのご相談であることは確認させていただきます。'],['相談だけでも大丈夫ですか？','大丈夫です。開発会社の紹介を前提にせず、まずは現状整理や進め方の確認から対応します。'],['まだ要件が固まっていなくても相談できますか？','可能です。作りたいものや解決したい課題が明確でない段階でも、何を整理すべきか一緒に確認します。'],['すでに他社から見積もりをもらっていますが、相談できますか？','可能です。見積もり金額や作業範囲、進め方に不安がある場合もご相談いただけます。'],['DevCheckの運営会社に発注する必要はありますか？','ありません。必要に応じて自社での対応も可能ですが、あくまで貴社に合った進め方を優先してご提案します。'],['NDAは締結できますか？','必要に応じてNDA締結も可能です。詳細な情報を共有いただく前に、個別にご相談ください。'],['フリーランスを紹介されますか？','原則として、法人の開発会社・受託企業を中心にご提案します。'],['個人や個人事業主でも相談できますか？','DevCheckは法人企業向けサービスです。原則として、法人格を持つ企業からのご相談を対象としています。'],['どのくらいの予算から相談できますか？','明確な下限は設けていませんが、ご相談内容や想定される開発規模によっては対応が難しい場合がございます。まずはフォームよりご相談ください。'],['初回相談に費用はかかりますか？','初回相談は無料です。追加支援が必要な場合は、内容に応じて事前に費用をご案内します。']
    ].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
    <p class='note'>初回相談は無料です。まずは現在のお悩みやご状況をお伺いし、開発会社へ依頼すべきか、要件整理から進めるべきかなど、進め方の方向性を整理します。<br/>※DevCheckは法人企業向けのサービスです。ご相談内容や想定される開発規模によっては、対応が難しい場合がございます。</p></section>
    <section id='form'><h2>無料相談フォーム</h2><p>まずは現在のお悩みやご状況をお聞かせください。内容を確認のうえ、必要に応じてオンラインでヒアリングを実施します。</p>
      <form id='consultForm'>
      <input name='companyName' placeholder='会社名（匿名相談の場合は未入力可）'/><div><label>法人としてのご相談ですか？</label><label><input type='radio' name='isCorporation' value='はい' required/>はい</label><label><input type='radio' name='isCorporation' value='いいえ'/>いいえ</label></div>
      <input name='name' placeholder='お名前' required/><input type='email' name='email' placeholder='メールアドレス' required/><input type='tel' name='phone' placeholder='電話番号（任意）'/>
      <textarea name='consultation' required placeholder='相談内容（例：開発会社選びに迷っている、見積もりが妥当か確認したい、既存ベンダーを見直したい など）'></textarea>
      <select name='currentStatus' required><option value=''>現在の状況を選択</option><option>これから開発会社を探したい</option><option>すでに開発会社へ相談している</option><option>見積もりを受け取っている</option><option>既存ベンダーを見直したい</option><option>要件整理から相談したい</option><option>その他</option></select>
      <select name='budget' required><option value=''>想定予算を選択</option><option>未定</option><option>〜100万円</option><option>100万円〜300万円</option><option>300万円〜500万円</option><option>500万円〜1,000万円</option><option>1,000万円以上</option></select>
      <select name='timeline' required><option value=''>希望時期を選択</option><option>未定</option><option>できるだけ早く</option><option>1ヶ月以内</option><option>3ヶ月以内</option><option>半年以内</option><option>時期は決まっていない</option></select>
      <div><label>匿名相談希望の有無</label><label><input type='radio' name='anonymous' value='希望する' required/>希望する</label><label><input type='radio' name='anonymous' value='希望しない'/>希望しない</label><label><input type='radio' name='anonymous' value='まずは相談して決めたい'/>まずは相談して決めたい</label></div>
      <div><label>NDA希望の有無</label><label><input type='radio' name='nda' value='希望する' required/>希望する</label><label><input type='radio' name='nda' value='希望しない'/>希望しない</label><label><input type='radio' name='nda' value='相談内容によって検討したい'/>相談内容によって検討したい</label></div>
      <button type='submit' class='cta'>無料で相談する</button>
      </form><p id='formMessage'></p></section>
    <section class='final-cta'><h2>開発会社に相談する前に、<br/>まずはDevCheckへご相談ください。</h2><p>見積もり・進め方・会社選びの不安を、現場を知る第三者視点で整理します。</p><a href="#form" class="cta">無料で相談する</a></section>
  </main>`;

const form = document.getElementById('consultForm');
const message = document.getElementById('formMessage');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!endpoint) {
    message.textContent = '送信先が未設定です。Cloudflare Pagesの環境変数 VITE_DEVCHECK_FORM_ENDPOINT を設定してください。';
    return;
  }
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.submittedAt = new Date().toISOString();
  payload.source = 'DevCheck LP';
  payload.pageUrl = window.location.href;
  payload.userAgent = window.navigator.userAgent;
  try {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error();
    message.textContent = 'お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。ご相談内容や想定される開発規模によっては、対応が難しい場合もございますが、可能な範囲で貴社に合った進め方をご案内いたします。';
    form.reset();
  } catch {
    message.textContent = '送信に失敗しました。お手数ですが、時間をおいて再度お試しください。';
  }
});
