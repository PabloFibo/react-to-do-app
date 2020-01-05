import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title}
      imageSrc={settings.faq.image}
    />
    <h2>FAQ</h2>
    <p>{settings.faq.description}</p>
  </Container>

);

export default Faq;
