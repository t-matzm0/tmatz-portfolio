export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          About
        </h2>
        <div className="w-12 h-1 bg-blue-600 mb-8" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              大学・大学院にて情報アーキテクチャを専攻し、情報設計とシステム構築の基礎を学びました。
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              大手メーカーでのシステムエンジニアとしてキャリアをスタートし、金融機関向け基幹システムの開発で設計からリリースまでの全工程を経験。
              その後、ITコンサルティング企業を経て、現在はBig4コンサルティングファームにてIT・DX領域のコンサルティングに従事しています。
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              AI/機械学習、データ分析、プロジェクトマネジメントなど幅広い専門性を活かし、
              クライアントのビジネス課題解決に取り組んでいます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                大学院修了 — 情報アーキテクチャ専攻
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                10年以上のIT業界経験
                <br />
                SE → ITコンサルタント
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Strengths
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                技術力 × ビジネス視点 × グローバル対応
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
