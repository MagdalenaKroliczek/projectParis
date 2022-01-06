import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Subscribe to the newsletter to stay informed !
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your email address'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About me</h2>
            <Link to='/aboutme'>Read more</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact me</h2>
            <Link to='/contact'>Write to me</Link>  
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to= "/" className= "navbar-logo">
                       Paris Inconnu
                       <i class="fas fa-camera-retro"></i>
          </Link>
          </div>
          <div className='social-icons'>
            <div className='social-icon-link facebook'>
           <a href="https://www.facebook.com/magdadaybydayphoto" class="fa fa-facebook" target='_blank' aria-label='Facebook'><i class='fab fa-facebook-f' /></a>  </div>
            <div className='social-icon-link instagram'>
           <a href="https://www.instagram.com/magdalena_kroliczek/" class="fa fa-instagram" target='_blank' aria-label='Instagram'><i class='fab fa-instagram' /></a> </div>
           <div className='social-icon-link linkedin'>
           <a href="https://www.linkedin.com/in/magdalena-kroliczek/" class="fa fa-linkedin" target='_blank' aria-label='Linkedin'><i class='fab fa-linkedin' /></a> </div>
          </div>


            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            {/* <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            {/* <Link
              class='social-icon-link lindedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        
      </section>
    </div>
  );
}

export default Footer;