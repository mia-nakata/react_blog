import './App.css';
// 各種コンポーネントのインポート
import Header from './components/organisms/Header/Header';
import Hero from './components/organisms/Hero/Hero';
import Card from './components/organisms/Card/Card';
import SectionHeader from './components/commons/SectionHeader/SectionHeader';
import ModalWindow from './components/organisms/ModalWindow/ModalWindow';

function App() {
  return (
    <div className="app-container">
      {/* 1. ヘッダーセクション（背景は横いっぱい、中身は994px） */}
      <Header />

      {/* 2. ファーストビュー（背景は横いっぱい、ロゴは中央） */}
      <Hero style={{ maxWidth: '994px', margin: '0 auto' }} />

      {/* 3. メインコンテンツエリア（994pxに収める） */}
      <main
        style={{
          maxWidth: '994px',
          margin: '0 auto',
          padding: '60px 20px',
          boxSizing: 'border-box',
        }}
      >
        {/* セクション見出し */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <SectionHeader>Latest Blog Posts</SectionHeader>
        </div>

        {/* ブログカードのグリッドレイアウト */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px 24px' /* 縦の隙間を少し広めに設定 */,
          }}
        >
          {/* カードを複数並べる（実際の開発ではここでデータをループさせます） */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* フィードバックセクションの見出し */}
        <div
          style={{
            marginTop: '80px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <SectionHeader>We Value Your Feedback</SectionHeader>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            We're gathering feedback from our customers at BAMOS DESIGN.
            <br />
            Please take a moment to share your thoughts.
          </p>
        </div>
      </main>

      {/* 4. モーダルウィンドウ */}
      {/* 動作確認をしたい時は、下の行のコメントアウト（ // ）を外してください */}
      {/* <ModalWindow /> */}

      {/* 5. フッター（黒い帯のエリア） */}
      <footer
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '40px 0',
          textAlign: 'center',
          marginTop: '60px',
        }}
      >
        <p style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
          &copy; 2026 BAMOS DESIGN
        </p>
      </footer>
    </div>
  );
}

export default App;
