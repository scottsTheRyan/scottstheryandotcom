import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className='btn'>
        about
      </Link>
      <Link to='/science' className='btn'>
        science
      </Link>
      <Link to='/thearts' className='btn'>
        the arts
      </Link>
    </section>
  );
};
export default Home;
