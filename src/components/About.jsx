import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>About</h1>
      <Outlet />
    </>
  );
};

export default About;
