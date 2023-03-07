import Container from 'react-bootstrap/Container';
import form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';

function LoginForm() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <form id="sign-in-form" className="text-center w-100">
        <h1 className=" mb-3 fs-3 fw-normal"> Sign In </h1>
        <form.Group controlId="sign-in-email-address">
          <form.Control type="email" size="lg" placeholder="Email Adresse" autoComplete="usename" className="position-relative"/>
        </form.Group>

        <form.Group controlId="sign-in-password" className="mb-3">
          <form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative"/>
        </form.Group>

        <form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
          <form.Check label="Remember me !" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative"/>
        </form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">Sign in</Button>
          <p className="mt-5 text-muted">&copy;2022-2023</p>
        </div>

      </form>

    </Container>
  )
}
export default LoginForm;
