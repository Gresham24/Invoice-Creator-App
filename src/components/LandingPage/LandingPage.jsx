import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LandingContainer,
  Header,
  Logo,
  Nav,
  NavButton,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  CTAButton,
  FeaturesSection,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  Footer
} from '../../styles/LandingPage.styles';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <LandingContainer>
      <Header>
        <Logo>
          <img src="/logo.png" alt="Invoice Cr8tor" />
          <span>Invoice Cr8tor</span>
        </Logo>
        <Nav>
          <NavButton onClick={handleGetStarted}>Get Started</NavButton>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Free Invoices in Seconds</HeroTitle>
          <HeroSubtitle>Simple steps. Instant results.</HeroSubtitle>
          <HeroDescription>
            Enter your details → preview → download → move on with your day. Unlimited use, no watermarks, no unnecessary features. Suitable for freelancers, side-hustles and small businesses.
          </HeroDescription>
          <CTAButton onClick={handleGetStarted}>
            Start Creating Invoices
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <HeroTitle>Why Choose Invoice Cr8tor?</HeroTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>📄</FeatureIcon>
            <FeatureTitle>Standardised Templates</FeatureTitle>
            <FeatureDescription>
              Beautiful invoice template that make your business look professional
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Lightning Fast</FeatureTitle>
            <FeatureDescription>
              Create and download invoices in under seconds with our intuitive interface
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>PDF Export</FeatureTitle>
            <FeatureDescription>
              Download professional PDF invoices ready to send to your clients
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Mobile Friendly</FeatureTitle>
            <FeatureDescription>
              Create invoices on any device - desktop, tablet, or mobile
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>💼</FeatureIcon>
            <FeatureTitle>Business Ready</FeatureTitle>
            <FeatureDescription>
              Built for freelancers, small businesses, and growing companies
            </FeatureDescription>
          </FeatureCard>
          
        </FeatureGrid>
      </FeaturesSection>

      <Footer>
        <p>&copy; 2025 Invoice Cr8tor. All rights reserved.</p>
      </Footer>
    </LandingContainer>
  );
};

export default LandingPage;