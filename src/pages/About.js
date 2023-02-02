import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className='btn'>
        return home
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
export default About;
