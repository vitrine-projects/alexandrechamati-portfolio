export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 Alexandre Chamati</p>
        <p className="footer-astro">
          Fait avec{' '}
          <a href="https://astro.build" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
              <path d="M182.022 9.147c2.982 3.702 4.502 8.406 7.543 17.815L256 246.074c-37.92-20.655-80.237-32.52-124.643-34.478L98.186 93.105a6.543 6.543 0 0 0-6.407-4.844 6.543 6.543 0 0 0-6.118 5.126l-31.83 118.172C9.948 213.852-27.56 226.2-60.6 246.074L66.436 26.962c3.04-9.409 4.56-14.113 7.543-17.815a26.154 26.154 0 0 1 10.301-7.74C89.192 0 94.38 0 104.756 0h46.488c10.376 0 15.564 0 20.476 1.407a26.154 26.154 0 0 1 10.302 7.74z" fill="white" transform="translate(60, 0) scale(0.7)"/>
              <path d="M189.186 284.29c-15.262 13.158-45.786 22.106-80.686 22.106-42.14 0-77.628-13.237-88.96-31.168-3.2 9.653-3.94 20.593-3.94 27.69 0 0-2.123 34.814 22.1 59.037a23.18 23.18 0 0 1 0-23.18c13.366-23.143 46.88-23.143 46.88-23.143h.07a46.88 46.88 0 0 1 40.59 23.423 23.18 23.18 0 0 0 40.59-15.59 91.406 91.406 0 0 0-16.564-39.175z" fill="#FF5D01" transform="translate(60, 0) scale(0.7)"/>
            </svg>
            Astro
          </a>
        </p>
      </div>
    </footer>
  );
}
