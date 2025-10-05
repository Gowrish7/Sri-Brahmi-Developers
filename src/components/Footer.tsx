const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            Sri Brahmi Developers
          </div>
          <p className="text-primary-foreground/70 mb-6">
            We Build Your Dream
          </p>
          <p className="text-sm text-primary-foreground/50">
            © 2025 Sri Brahmi Developers | All rights reserved | Developed by{' '}
            <a href="https://memoralabs.in" target="_blank" rel="noopener noreferrer">
              MemoraLabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
