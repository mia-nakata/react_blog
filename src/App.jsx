import { useState } from 'react';
import './App.css';
import Header from './components/organisms/Header/Header';
import Hero from './components/organisms/Hero/Hero';
import Card from './components/organisms/Card/Card';
import SectionHeader from './components/commons/SectionHeader/SectionHeader';
import SimpleButton from './components/commons/SimpleButton/SimpleButton';
import Logo from './components/commons/Logo/Logo';
import ModalWindow from './components/organisms/ModalWindow/ModalWindow';

import blogImg1 from './assets/blog-post-1.jpg';
import blogImg2 from './assets/blog-post-2.jpg';
import blogImg3 from './assets/blog-post-3.jpg';
import blogImg4 from './assets/blog-post-4.jpg';
import blogImg5 from './assets/blog-post-5.jpg';
import blogImg6 from './assets/blog-post-6.jpg';

const blogPosts = [
  {
    id: 1,
    title: '[Music] Indie Beats',
    author: 'Liam Johnson',
    img: blogImg1,
    likes: 210,
    dislikes: 9,
  },
  {
    id: 2,
    title: '[Design] Simple Lines',
    author: 'Emma Carter',
    img: blogImg2,
    likes: 185,
    dislikes: 4,
  },
  {
    id: 3,
    title: '[Event] Tokyo Nights',
    author: 'Noah Smith',
    img: blogImg3,
    likes: 162,
    dislikes: 7,
  },
  {
    id: 4,
    title: '[Design] Color Flow',
    author: 'Ava Williams',
    img: blogImg4,
    likes: 199,
    dislikes: 3,
  },
  {
    id: 5,
    title: '[Music] Lo-Fi Mood',
    author: 'Ethan Brown',
    img: blogImg5,
    likes: 243,
    dislikes: 6,
  },
  {
    id: 6,
    title: '[Event] Pop-Up Life',
    author: 'Olivia Davis',
    img: blogImg6,
    likes: 175,
    dislikes: 5,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app-container">
      <Header />
      <Hero style={{ maxWidth: '994px', margin: '0 auto' }} />

      <main
        style={{
          maxWidth: '994px',
          margin: '0 auto',
          padding: '60px 20px',
          boxSizing: 'border-box',
        }}
      >
        {/* ブログ記事セクション */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <SectionHeader>Latest Blog Posts</SectionHeader>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '18px 16px',
          }}
        >
          {/* 💡 データ配列をループさせて、Cardコンポーネントにデータを渡します */}
          {blogPosts.map((post) => (
            <Card key={post.id} data={post} />
          ))}
        </div>

        {/* フィードバックセクション */}
        <div
          style={{
            marginTop: '80px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <SectionHeader>We Value Your Feedback</SectionHeader>
          <p
            style={{
              marginTop: '20px',
              fontSize: '14px',
              color: '#111',
              lineHeight: '1.6',
            }}
          >
            We're gathering feedback from our customers at BAMOS DESIGN.
            <br />
            Please take a moment to share your thoughts — your input helps us
            make BAMOS DESIGN even better.
          </p>
          <div style={{ marginTop: '24px' }}>
            {/* 💡 黒いFeedbackボタンを配置 */}
            <SimpleButton variant="black" onClick={() => setIsModalOpen(true)}>
              Feedback
            </SimpleButton>
          </div>
        </div>
      </main>

      {isModalOpen && <ModalWindow onClose={() => setIsModalOpen(false)} />}

      {/* フッターセクション（黒背景にピンクのロゴ） */}
      <footer
        style={{
          background: 'linear-gradient(180deg, #2D0000 0%, #000000 100%)',
          padding: '18px 0',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <Logo variant="pink" />
      </footer>
    </div>
  );
}

export default App;
