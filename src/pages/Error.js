import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <section className='section'>
      <h2>four naught four</h2>
      <p>errors are forevermore . . . not really, return home and put this incomplete limerick behind you</p>
      <Link to='/' className='btn'>
        return home
      </Link>
    </section>
  );
};
export default Error;
