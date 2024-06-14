import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Inspiration from './components/Inspiration';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('assets/bg.png');
  const [contentText, setContentText] = useState({
    title: 'OUR INSPIRATION',
    subtitle: 'P. A. SANGMA',
    description: 'P. A. SANGMA FOUNDED THE PARTY AFTER HIS EXIT FROM THE NATIONALIST CONGRESS PARTY (NCP) DUE TO DIFFERENCES OVER THE PRESIDENTIAL CANDIDATE SELECTION IN 2012.',
  });

  const handleYearClick = (year) => {
    switch (year) {
      case '2013':
        setBackgroundImage('assets/bg2013.jpg');
        setContentText({
          title: 'NPP IN YEAR 2013',
          subtitle: 'Achievements of 2013',
          description: 'This is a description of the achievements in 2013. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2014':
        setBackgroundImage('assets/bg2014.jpg');
        setContentText({
          title: 'NPP IN YEAR 2014',
          subtitle: 'Achievements of 2014',
          description: 'This is a description of the achievements in 2014. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2016':
        setBackgroundImage('assets/bg2016.jpg');
        setContentText({
          title: 'NPP IN YEAR 2016',
          subtitle: 'Achievements of 2016',
          description: 'This is a description of the achievements in 2016. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2018':
        setBackgroundImage('assets/bg2018.jpg');
        setContentText({
          title: 'NPP IN YEAR 2018',
          subtitle: 'Achievements of 2018',
          description: 'This is a description of the achievements in 2018. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2019':
        setBackgroundImage('assets/bg2019.jpg');
        setContentText({
          title: 'NPP IN YEAR 2019',
          subtitle: 'Achievements of 2019',
          description: 'This is a description of the achievements in 2019. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2023':
        setBackgroundImage('assets/bg2023.jpg');
        setContentText({
          title: 'NPP IN YEAR 2023',
          subtitle: 'Achievements of 2023',
          description: 'This is a description of the achievements in 2023. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      case '2024':
        setBackgroundImage('assets/bg2024.jpg');
        setContentText({
          title: 'NPP IN YEAR 2024',
          subtitle: 'Achievements of 2024',
          description: 'This is a description of the achievements in 2024. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur fuga minima eos blanditiis repellendus accusantium cupiditate beatae sit nam.',
        });
        break;
      default:
        setBackgroundImage('assets/bg.png');
        setContentText({
          title: 'OUR INSPIRATION',
          subtitle: 'P. A. SANGMA',
          description: 'P. A. SANGMA FOUNDED THE PARTY AFTER HIS EXIT FROM THE NATIONALIST CONGRESS PARTY (NCP) DUE TO DIFFERENCES OVER THE PRESIDENTIAL CANDIDATE SELECTION IN 2012.',
        });
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <Header />
      <Inspiration handleYearClick={handleYearClick} contentText={contentText} />
    </div>
  );
}

export default App;
