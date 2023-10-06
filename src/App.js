import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/body';
import Section from './components/Section';

function App() {
  // const name = 'ray';
  // const location = '지구';
  // const hobbies = ['게임하기', '영화보기', '노래부르기'];

  const Bodyprops = {
    name: 'ray',
    location: '지구',
    hobbies: ['게임하기', '영화보기', '노래부르기'],
  };
  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={location} hobbies={hobbies} /> */}
      {/* <Body {...Bodyprops} /> */}
      <Body {...Bodyprops}>
        <Section content="전달하는 값" />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
