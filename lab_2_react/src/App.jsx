import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const skills = ['Jira', 'Test cases', 'Git та GitHub', 'Python (основи)', 'Postman'];

  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills skills={skills} />
        <Education
          university='НУ "Львівська політехніка"'
          program="F5 Кібербезпека та захист інформації"
          years="2025 — теперішній час"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
