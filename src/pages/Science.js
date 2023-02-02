import { Link } from 'react-router-dom';


const Science = () => {
  return (
    <>
      <section className='section'>
        <h2>science</h2>
        <Link to='/about' className='btn'>
        about
      </Link>
        <Link to='/' className='btn'>
        return home
      </Link>

      <Link to='/thearts' className='btn'>
        the arts
      </Link>
      </section>
    </>
  );
};

export default Science;
