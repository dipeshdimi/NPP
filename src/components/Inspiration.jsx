import './Inspiration.css';
import PropTypes from 'prop-types';

const Inspiration = ({ handleYearClick, contentText }) => {
  return (
    <section className="inspiration">
      <div className='poliTime'>
        <div className="timeline">
          <div 
            className='timeline-item' 
            onClick={() => handleYearClick('P.A SANGMA')}
          >
            <svg width="30%" height="3">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#e6b800" strokeWidth="3" />
            </svg>

            <div
              className="timeline-year"
              style={{ color: '#e6b800', minWidth: 'fit-content' }}
            >
              P.A SANGMA
            </div>
          </div>
          {['2013', '2014', '2016', '2018', '2019', '2023', '2024'].map(year => (
            <>
              
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
              <div
                className='timeline-item'
                key={year}
                onClick={() => handleYearClick(year)}
              >
                <svg width="20%" height="3">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#ccc" strokeWidth="3" />
                </svg>

                <div className="timeline-year">
                  {year}
                </div>

              </div>
            </>
          ))}
        </div>
        <img src='assets/politician.png' alt="P. A. Sangma" className="pa-sangma-img" />
      </div>
      <div className="content">
        <h1>{contentText.title}</h1>
        <h2>{contentText.subtitle}</h2>
        <p>{contentText.description}</p>
        <button>Know More</button>
      </div>
    </section>
  );
};

Inspiration.propTypes = {
  contentText: PropTypes.object,
  handleYearClick: PropTypes.func
};

export default Inspiration;
