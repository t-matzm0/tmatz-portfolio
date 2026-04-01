import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="自己紹介" subtitle="About" />
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-start">
          <div className="space-y-6 text-[var(--color-text-secondary)] leading-loose text-sm md:text-base">
            <p>
              大学・大学院にて情報アーキテクチャを専攻し、情報設計とシステム構築の基礎を学びました。
            </p>
            <p>
              大手メーカーでのシステムエンジニアとしてキャリアをスタートし、金融機関向け基幹システムの開発で設計からリリースまでの全工程を経験。
              その後、ITコンサルティング企業を経て、現在はBig4コンサルティングファームにてIT・DX領域のコンサルティングに従事しています。
            </p>
            <p>
              AI/機械学習、データ分析、プロジェクトマネジメントなど幅広い専門性を活かし、
              クライアントのビジネス課題解決に取り組んでいます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-[var(--color-bg-primary)] p-6 rounded-xl border border-[var(--color-border-light)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[var(--color-text-primary)]">
                  Education
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] ml-[52px]">
                大学院修了 — 情報アーキテクチャ専攻
              </p>
            </div>
            <div className="bg-[var(--color-bg-primary)] p-6 rounded-xl border border-[var(--color-border-light)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[var(--color-text-primary)]">
                  Experience
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] ml-[52px]">
                10年以上のIT業界経験
                <br />
                SE → ITコンサルタント
              </p>
            </div>
            <div className="bg-[var(--color-bg-primary)] p-6 rounded-xl border border-[var(--color-border-light)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12.75 3.03v.568c0 .334.148.65.405.864a11.04 11.04 0 012.649 2.648c.213.256.53.404.864.404h.568a2.25 2.25 0 012.25 2.25v.568c0 .334-.148.65-.405.864a11.04 11.04 0 01-2.649 2.648.656.656 0 00-.404.864v.568a2.25 2.25 0 01-2.25 2.25h-.568a.656.656 0 00-.864.405 11.04 11.04 0 01-2.649 2.649.656.656 0 00-.404.864v.568a2.25 2.25 0 01-2.25 2.25h-.568a.656.656 0 00-.864-.405 11.042 11.042 0 01-2.649-2.649.656.656 0 00-.864-.404h-.568a2.25 2.25 0 01-2.25-2.25v-.568c0-.334.148-.65.405-.864a11.042 11.042 0 012.649-2.649c.213-.256.404-.53.404-.864V8.75a2.25 2.25 0 012.25-2.25h.568c.334 0 .65-.148.864-.405a11.042 11.042 0 012.649-2.649.656.656 0 00.404-.864V3.03"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[var(--color-text-primary)]">
                  Strengths
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] ml-[52px]">
                技術力 × ビジネス視点 × グローバル対応
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
