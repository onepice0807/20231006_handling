import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/body';
import Section from './components/Section';
import Contents from './components/Contents';
import InputText from './components/InputText';
import DateInput from './components/DateInput';
import InputSelect from './components/InputSelect';
import RadioGroup from './components/RadioGroup';
import Radio from './components/Radio';
import RefInput from './components/RefInput';

function App() {
  // const name = 'ray';
  // const location = '지구';
  // const hobbies = ['게임하기', '영화보기', '노래부르기'];

  const Bodyprops = {
    name: 'ray',
    location: '지구',
    hobbies: ['게임하기', '영화보기', '노래부르기'],
  };

  const handelChange = () => {
    console.log('changed');
  };
  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={location} hobbies={hobbies} /> */}
      {/* <Body {...Bodyprops} /> */}
      <Body {...Bodyprops}>
        <Section content="전달하는 값" />
      </Body>
      <Contents />
      <InputText />
      <DateInput />
      <InputSelect />
      <RadioGroup label="연락할 방법을 선택하세요">
        <Radio label="팩스" id="fax" name="contact" value="fax" />
        <Radio label="전화" id="phone" name="contact" value="phone" />
        <Radio label="이메일" id="email" name="contact" value="email" />
        <Radio
          label="방문"
          id="walk"
          name="contact"
          value="walk"
          // isChecked={true}
          onChange={handelChange}
        />
      </RadioGroup>
      <RefInput />
      <Footer />
    </div>
  );
}

export default App;
