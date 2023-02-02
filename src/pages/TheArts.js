import { Link } from 'react-router-dom';


const TheArts = () => {
  return (
    <section className='section'>
      <h4>TheArts</h4>
      <Link to='/about' className='btn'>
        about
      </Link>
      <Link to='/' className='btn'>
        return home
      </Link>
      <Link to='/science' className='btn'>
        science
      </Link>
    </section>
  );
};
export default TheArts;
