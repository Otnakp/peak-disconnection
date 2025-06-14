export default function Hero() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // TikTok-like videos split across three columns (uses 1-21.webm)
  const leftVideos = [1, 4, 7, 10, 13, 16, 19];
  const middleVideos = [2, 5, 8, 11, 14, 17, 20];
  const rightVideos = [3, 6, 9, 12, 15, 18, 21];

  return (
    <section className="hero">
      
      {/* App logos around text */}
      <div className="app-logo app-logo-instagram-1">
        <img src="/bgdata/Instagram_icon.png" alt="" />
      </div>
      <div className="app-logo app-logo-instagram-2">
        <img src="/bgdata/Instagram_icon.png" alt="" />
      </div>
      <div className="app-logo app-logo-instagram-3">
        <img src="/bgdata/Instagram_icon.png" alt="" />
      </div>
      <div className="app-logo app-logo-tiktok-1">
        <img src="/bgdata/tiktok-logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-tiktok-2">
        <img src="/bgdata/tiktok-logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-tiktok-3">
        <img src="/bgdata/tiktok-logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-ahegao-1">
        <img src="/bgdata/Ahegao_Shaking_Red.png" alt="" />
      </div>
      <div className="app-logo app-logo-ahegao-2">
        <img src="/bgdata/aheago.webp" alt="" />
      </div>
      <div className="app-logo app-logo-ahegao-3">
        <img src="/bgdata/Ahegao_Shaking_Red.png" alt="" />
      </div>
      <div className="app-logo app-logo-steam">
        <img src="/bgdata/Steam_icon_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-steam-2">
        <img src="/bgdata/Steam_icon_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-twitch">
        <img src="/bgdata/twitch-icon-2048x2047-rdv20bdk.png" alt="" />
      </div>
      <div className="app-logo app-logo-twitch-2">
        <img src="/bgdata/twitch-icon-2048x2047-rdv20bdk.png" alt="" />
      </div>
      <div className="app-logo app-logo-discord">
        <img src="/bgdata/discord-icon.svg" alt="" />
      </div>
      <div className="app-logo app-logo-discord-2">
        <img src="/bgdata/discord-icon.svg" alt="" />
      </div>
      <div className="app-logo app-logo-playstation">
        <img src="/bgdata/PlayStation-Logo.wine.png" alt="" />
      </div>
      <div className="app-logo app-logo-playstation-2">
        <img src="/bgdata/PlayStation-Logo.wine.png" alt="" />
      </div>
      <div className="app-logo app-logo-xbox">
        <img src="/bgdata/Xbox_one_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-xbox-2">
        <img src="/bgdata/Xbox_one_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-youtube">
        <img src="/bgdata/Youtube_logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-youtube-2">
        <img src="/bgdata/Youtube_logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-youtube-3">
        <img src="/bgdata/Youtube_logo.png" alt="" />
      </div>
      <div className="app-logo app-logo-snapchat">
        <img src="/bgdata/Snapchat_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-snapchat-2">
        <img src="/bgdata/Snapchat_logo.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-reddit">
        <img src="/bgdata/reddit.webp" alt="" />
      </div>
      <div className="app-logo app-logo-reddit-2">
        <img src="/bgdata/reddit.webp" alt="" />
      </div>
      <div className="app-logo app-logo-twitter">
        <img src="/bgdata/Logo_of_Twitter.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-twitter-2">
        <img src="/bgdata/Logo_of_Twitter.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-x">
        <img src="/bgdata/x.webp" alt="" />
      </div>
      <div className="app-logo app-logo-x-2">
        <img src="/bgdata/x.webp" alt="" />
      </div>
      <div className="app-logo app-logo-x-3">
        <img src="/bgdata/x.webp" alt="" />
      </div>
      <div className="app-logo app-logo-spotify">
        <img src="/bgdata/Spotify_logo_without_text.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-spotify-2">
        <img src="/bgdata/Spotify_logo_without_text.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-instagram-4">
        <img src="/bgdata/Instagram_icon.png" alt="" />
      </div>
      <div className="app-logo app-logo-twitter-3">
        <img src="/bgdata/Logo_of_Twitter.svg.png" alt="" />
      </div>
      <div className="app-logo app-logo-youtube-4">
        <img src="/bgdata/Youtube_logo.png" alt="" />
      </div>
      
      {/* Background TikTok videos */}
      <div className="tiktok-videos-container">
        <div className="video-scroll-column video-column-left">
          {leftVideos.map((num) => (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="tiktok-video"
              key={`left-${num}`}
            >
              <source src={`/videos/${num}.webm`} type="video/webm" />
          </video>
          ))}
        </div>
        <div className="video-scroll-column video-column-middle">
          {middleVideos.map((num) => (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="tiktok-video"
              key={`mid-${num}`}
            >
              <source src={`/videos/${num}.webm`} type="video/webm" />
          </video>
          ))}
        </div>
        <div className="video-scroll-column video-column-right">
          {rightVideos.map((num) => (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="tiktok-video"
              key={`right-${num}`}
            >
              <source src={`/videos/${num}.webm`} type="video/webm" />
          </video>
          ))}
        </div>
      </div>

      {/* Glass overlay between logos and text */}
      <div className="hero-glass-overlay"></div>
      
      <div className="hero-content">
        <h1>
          <span className="word-fuck">F*CK</span>
          <span className="word-fixing"> FIXING</span>
          <br></br>
          <span className="word-your">YOUR</span>
          <span className="word-life"> LIFE</span>
        </h1>
        <p className="hero-subtitle">Ruin it and <span className="word-maximize">maximize</span> your screen time</p>
        <div className="cta-container">
          <div className="arrow-pointer"></div>
          <a href="#join" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToJoin(); }}>
            Start Screen Maxing
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={(e) => { e.preventDefault(); scrollToJoin(); }}>
        <div className="scroll-chevron"></div>
        <div className="scroll-chevron"></div>
        <div className="scroll-chevron"></div>
      </div>
    </section>
  );
} 