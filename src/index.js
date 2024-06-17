import './styles.scss';

// Check if platform is iOS to disable rainbow animation
function isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  // Check if the current platform is iOS and add class to disable animation
  if (isIOS()) {
    document.body.classList.add('disable-animation');
  }