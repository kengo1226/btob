import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import mvImg from "../img/mv-img.png";
import img1 from "../img/suumo.png";
import img2 from "../img/freee.png";
import img3 from "../img/bizreach.png";
import img4 from "../img/smarthr.png";
import img5 from "../img/jtb.png";
import img6 from "../img/mufg.png";
import icon1 from "../img/clip.svg";
import icon2 from "../img/sticker.svg";
import icon3 from "../img/contact-book.svg";
import service1 from "../img/service1.svg";
import service2 from "../img/service2.svg";
import service3 from "../img/service3.svg";

export default function Home() {
  return (
    <>
      <Layout>
        <section id={styles.mv}>
          <div className={styles.mvWrapper}>
            <div className={styles.mvContent}>
              <h2>顧客管理CRMならOSWALD<br />徹底した顧客管理と効果的な施策を</h2>
              <p>OSWALDは顧客管理とマーケティングを行うCRMプラットフォームです。<br />顧客情報の登録から分析・統合までこれひとつで。</p>
              <div className={styles.mvService}>
                <ul>
                  <li>顧客管理</li>
                  <li>マーケティング</li>
                  <li>データ分析</li>
                  <li>DB連携</li>
                  <li>カラーリング</li>
                  <li>エンゲージメント</li>
                </ul>
              </div>
              <div className={styles.mvBtn}>
                <Link href="/">お問い合わせ</Link>
              </div>
            </div>
            <div className={styles.mvImg}>
              <Image src={mvImg} width={700} height={420}></Image>
            </div>
          </div>
        </section>

        <section id={styles.lead}>
          <div className={styles.container}>
            <div className={styles.leadContent}>
              <p>OSWALDは<span className={styles.colorText}>CRMプラットフォーム</span>です。<br />顧客情報を入力して登録するだけで自動で効果的な施策を提案します。<br className={styles.forPc} />集客をアップさせるマーケティングツールです。</p>
              <p>formタグのaction属性にURLをセットするだけで、データの管理や自動返信メールの送信などができます。<br className={styles.forPc} />データの管理や自動返信メールの送信などができます。</p>
              <div className={styles.leadBtn}>
                <Link href="/">特徴を見る</Link>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.features}>
          <div className={styles.container}>
            <div className={styles.featuresContent}>
              <p className={styles.mainTtl}>特徴<span className={styles.bgText}>FEATURES</span></p>
              <p>私たちには<span className={styles.colorText}>選ばれる3つの理由</span>があります</p>
            </div>
            <div className={styles.featuresWrapper}>
              <div className={styles.featureCard}>
                <Image src={icon1} width={48} height={48} />
                <p>初期費用がかからないため、<br/>予算を圧迫することがありません。</p>
                <p>リースの場合、<br/>
                  スカイウェル設置にかかる、<br/>
                  毎月の費用が明確化されているため<br/>
                  コスト管理が簡単です。</p>
              </div>
              <div className={styles.featureCard}>
                <Image src={icon2} width={48} height={48} />
                <p>月々のリース料は、<br/>全額損金に計上することが可能です。</p>
                <p>リースの場合、<br/>
                  スカイウェル設置にかかる、<br/>
                  毎月の費用が明確化されているため<br/>
                  コスト管理が簡単です。</p>
              </div>
              <div className={styles.featureCard}>
                <Image src={icon3} width={48} height={48} />
                <p>固定資産税の納付や保険の手続き等が<br/>不要なため事務負担が軽減されます。</p>
                <p>リースの場合、<br/>
                  スカイウェル設置にかかる、<br/>
                  毎月の費用が明確化されているため<br/>
                  コスト管理が簡単です。</p>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.service}>
          <div className={styles.container}>
            <div className={styles.serviceContent}>
              <p>機能・サービス<span className={styles.bgText}>SERVICES</span></p>
              <p>問題を本質から<br className={styles.forSp} /><span className={styles.colorText}>解決するためのツール</span><br /><span className={styles.colorText}>見やすい管理画面</span>と簡単な操作で売り上げアップ</p>
            </div>
            <div className={styles.serviceWrapper}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceText}>
                  <span className={styles.point}>機能・サービス1</span>
                  <div className={styles.serviceInner}>
                    <h3>スタッフの空き日時を自動でピックアップ<br />一目で効率をアップさせる</h3>
                    <p>スタッフのシフト状況を登録するだけで自動でカラーリングして空き時間を表示します。スタッフのシフト状況を登録するだけで自動でカラーリングして空き時間を表示します。</p>
                    <span className={styles.border}></span>
                    <ul>
                      <li>集客の改善</li>
                      <li>マーケティング成果の拡大</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.serviceImg}>
                  <Image src={service1} width={400} height={350}></Image>
                </div>
              </div>

              <div className={styles.serviceCard}>
              <div className={styles.serviceImg}>
                  <Image src={service2} width={400} height={350}></Image>
                </div>
                <div className={styles.serviceText}>
                  <span className={styles.point}>機能・サービス2</span>
                  <div className={styles.serviceInner}>
                    <h3>顧客情報の管理から分析・統合まで<br />目に見える化でターゲット選定</h3>
                    <p>顧客情報の管理と分析を簡単に行います。ターゲットを選定してよりアクションを起こしやすくします。顧客情報の管理と分析を簡単に行います。ターゲットを選定してよりアクションを起こしやすくします。</p>
                    <span className={styles.border}></span>
                    <ul>
                      <li>顧客情報の徹底管理</li>
                      <li>マーケティング成果の拡大</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceText}>
                  <span className={styles.point}>機能・サービス3</span>
                  <div className={styles.serviceInner}>
                    <h3>顧客情報とデータベースを連携して<br />一発でより効果的な施策を打つ</h3>
                    <p>顧客情報とデータベースを連携して効果的な施策を打つことができます。これまでよりも成果率をアップさせます。顧客情報とデータベースを連携して効果的な施策を打つことができます。</p>
                    <span className={styles.border}></span>
                    <ul>
                      <li>効果的な施策</li>
                      <li>顧客情報の管理</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.serviceImg}>
                  <Image src={service3} width={400} height={350}></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.case}>
          <div className={styles.container}>
            <div className={styles.caseContent}>
              <p>事例<span className={styles.bgText}>CASE STUDY</span></p>
              <p><span className={styles.colorText}>業界を問わず500社以上</span>にご利用いただいています</p>
            </div>
            <div className={styles.caseWrapper}>
              <ul>
                <li><Image src={img1} width={320} height={160}></Image></li>
                <li><Image src={img2} width={320} height={160}></Image></li>
                <li><Image src={img3} width={320} height={160}></Image></li>
                <li><Image src={img4} width={320} height={160}></Image></li>
                <li><Image src={img5} width={320} height={160}></Image></li>
                <li><Image src={img6} width={320} height={160}></Image></li>
                <li><Image src={img1} width={320} height={160}></Image></li>
                <li><Image src={img2} width={320} height={160}></Image></li>
                <li><Image src={img3} width={320} height={160}></Image></li>
                <li><Image src={img4} width={320} height={160}></Image></li>
              </ul>
            </div>
          </div>
        </section>

        <section id={styles.news}>
          <div className={styles.container}>
            <div className={styles.newsContent}>
              <p>お知らせ</p>
            </div>
            <div className={styles.newsWrapper}>
              <ul>
                <li>
                    <p>2024.03.13</p>
                    <span>カテゴリー</span>
                    <Link href="/">
                      <p>○○○○にて弊社サービスが紹介されました</p>
                    </Link>
                </li>
                <li>
                    <p>2024.03.13</p>
                    <span>カテゴリー</span>
                    <Link href="/">
                      <p>○○○○にて弊社サービスが紹介されました</p>
                    </Link>
                </li>
                <li>
                    <p>2024.03.13</p>
                    <span>カテゴリー</span>
                    <Link href="/">
                      <p>○○○○にて弊社サービスが紹介されました</p>
                    </Link>
                </li>
                <li>
                    <p>2024.03.13</p>
                    <span>カテゴリー</span>
                    <Link href="/">
                      <p>○○○○にて弊社サービスが紹介されました</p>
                    </Link>
                </li>
                <li>
                    <p>2024.03.13</p>
                    <span>カテゴリー</span>
                    <Link href="/">
                      <p>○○○○にて弊社サービスが紹介されました</p>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
