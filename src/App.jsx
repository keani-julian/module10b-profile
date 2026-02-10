import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile 
        name="Chloe Kim"
        occupation="Olympic Snowboarder"
        funFact="At the 2018 Winter Olympics, she became the youngest woman to win an Olympic snowboarding gold medal when she won gold in the women's snowboard halfpipe at 17 years old."
      />
      <Profile 
        name="Hans Zimmer"
        occupation="Composer & Music Producer"
        funFact="He's composed and produced over 100 soundtracks, including scores for The Lion King, Dune, Inception, and Gladiator."
      />
    </div>
  );
}

export default App;