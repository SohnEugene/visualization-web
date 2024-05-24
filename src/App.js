import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="이론, 가설 소개" className="section-intro" content={generateLongContent("이론, 가설 소개", 10)} />
      <Section title="스펙트럼" className="section-data1" content={generateLongContent("스펙트럼", 100)} />
      <Section title="지역별" className="section-data2" content={generateLongContent("지역별", 100)} />
      <Section title="결론" className="section-conclusion" content={generateLongContent("결론", 20)} />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>시작 화면</h1>
    </header>
  );
}

function Section({ title, content, className }) {
  return (
    <div className={`Section ${className}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function generateLongContent(sectionName, repeatCount) {
  const content = `This is the ${sectionName} section. `;
  return content;
}

export default App;
