import './App.css';
// 新しく作った大きなコンポーネントを読み込みます
import HeaderSp from './components/molecules/HeaderSp/HeaderSp';
import Card from './components/organisms/Card/Card';
import ModalWindow from './components/organisms/ModalWindow/ModalWindow';

function App() {
  return (
    <>
      {/* 1. スマホ用のヘッダー */}
      <HeaderSp />

      {/* 2. ブログカードを並べるエリア */}
      <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card />
        <Card />
        <Card />
      </div>

      {/* 3. モーダルウィンドウ（アンケート画面） */}
      {/* ※画面全体を覆ってしまうので、確認が終わったらこの行は消すかコメントアウトしてください */}
      {/* <ModalWindow /> */}
    </>
  );
}

export default App;