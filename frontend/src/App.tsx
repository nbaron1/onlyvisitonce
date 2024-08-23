import { useEffect, useRef, useState } from 'react';
import '@fontsource-variable/pixelify-sans';
import { Panel } from './components/Panel';
import { HasLoadedProvider } from './context/HasLoaded';
import 'react-perfect-scrollbar/dist/css/styles.css';

function EyeIcon() {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.8884 8.92949C5.25659 10.2914 4.11464 11.8918 3.5376 12.8055C3.49931 12.8662 3.47253 12.9086 3.45015 12.9455C3.43538 12.9698 3.42563 12.9866 3.41911 12.9984C3.41911 12.9988 3.41911 12.9992 3.41911 12.9997C3.41911 13.0001 3.41911 13.0006 3.41911 13.001C3.42563 13.0127 3.43538 13.0295 3.45015 13.0539C3.47253 13.0907 3.49931 13.1332 3.5376 13.1938C4.11464 14.1075 5.25659 15.7079 6.8884 17.0699C8.51767 18.4297 10.57 19.4997 13.0003 19.4997C15.4305 19.4997 17.4829 18.4297 19.1121 17.0699C20.744 15.7079 21.8859 14.1075 22.463 13.1938C22.5012 13.1332 22.528 13.0907 22.5504 13.0539C22.5652 13.0295 22.5749 13.0127 22.5814 13.001C22.5814 13.0005 22.5814 13.0001 22.5814 12.9997C22.5814 12.9992 22.5814 12.9988 22.5814 12.9984C22.5749 12.9866 22.5652 12.9698 22.5504 12.9455C22.528 12.9086 22.5012 12.8662 22.463 12.8055C21.8859 11.8918 20.744 10.2914 19.1121 8.92949C17.4829 7.56968 15.4305 6.49967 13.0003 6.49967C10.57 6.49967 8.51767 7.56968 6.8884 8.92949ZM5.50008 7.26606C7.37273 5.70312 9.90013 4.33301 13.0003 4.33301C16.1004 4.33301 18.6278 5.70312 20.5005 7.26606C22.3706 8.82687 23.6527 10.6318 24.2949 11.6486C24.3034 11.662 24.3121 11.6757 24.321 11.6898C24.4484 11.8903 24.6138 12.1507 24.6975 12.5156C24.765 12.8102 24.765 13.1891 24.6975 13.4837C24.6138 13.8486 24.4484 14.109 24.321 14.3096C24.3121 14.3236 24.3034 14.3373 24.2949 14.3508C23.6527 15.3675 22.3706 17.1725 20.5005 18.7333C18.6278 20.2962 16.1004 21.6663 13.0003 21.6663C9.90013 21.6663 7.37273 20.2962 5.50008 18.7333C3.62998 17.1725 2.34782 15.3675 1.70568 14.3508C1.69719 14.3373 1.68848 14.3236 1.67959 14.3096C1.55216 14.109 1.38672 13.8486 1.30309 13.4837C1.23556 13.1891 1.23556 12.8102 1.30309 12.5156C1.38672 12.1507 1.55216 11.8903 1.67959 11.6897C1.68848 11.6757 1.69719 11.662 1.70568 11.6486C2.34782 10.6318 3.62998 8.82687 5.50008 7.26606ZM13.0003 10.833C11.8037 10.833 10.8336 11.8031 10.8336 12.9997C10.8336 14.1963 11.8037 15.1663 13.0003 15.1663C14.1969 15.1663 15.1669 14.1963 15.1669 12.9997C15.1669 11.8031 14.1969 10.833 13.0003 10.833ZM8.66694 12.9997C8.66694 10.6064 10.607 8.66634 13.0003 8.66634C15.3935 8.66634 17.3336 10.6064 17.3336 12.9997C17.3336 15.3929 15.3935 17.333 13.0003 17.333C10.607 17.333 8.66694 15.3929 8.66694 12.9997Z'
        fill='white'
      />
    </svg>
  );
}

function CloseEyeIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.6318 4.54842C21.4821 4.56024 21.2759 4.59364 20.9097 4.65467L11.3763 6.24356C11.103 6.28912 10.9572 6.31415 10.8534 6.33962C10.8497 6.34053 10.8462 6.34141 10.8428 6.34226C10.8425 6.34568 10.8422 6.3493 10.842 6.3531C10.8339 6.45968 10.8332 6.6076 10.8332 6.88472V19.4997C10.8332 21.8929 8.89308 23.833 6.49984 23.833C4.1066 23.833 2.1665 21.8929 2.1665 19.4997C2.1665 17.1065 4.1066 15.1664 6.49984 15.1664C7.28913 15.1664 8.02913 15.3774 8.66651 15.7461V6.88472C8.66651 6.87445 8.66651 6.86419 8.66651 6.85393C8.66648 6.61981 8.66645 6.38815 8.68146 6.1897C8.69815 5.96899 8.73736 5.71241 8.85632 5.44725C9.02363 5.07429 9.29304 4.75627 9.63342 4.52992C9.87541 4.36899 10.122 4.28813 10.337 4.23538C10.5303 4.18795 10.7588 4.1499 10.9897 4.11144L20.5912 2.51119C20.9057 2.45874 21.2064 2.40859 21.4613 2.38847C21.7366 2.36675 22.0724 2.36799 22.4209 2.49744C22.8958 2.67383 23.2939 3.01105 23.5459 3.45048C23.7309 3.77299 23.7874 4.10406 23.8112 4.3791C23.8333 4.63387 23.8332 4.9387 23.8332 5.25756L23.8332 17.333C23.8332 19.7263 21.8931 21.6664 19.4998 21.6664C17.1066 21.6664 15.1665 19.7263 15.1665 17.333C15.1665 14.9398 17.1066 12.9997 19.4998 12.9997C20.2891 12.9997 21.0291 13.2107 21.6665 13.5794V5.29583C21.6665 4.92456 21.6656 4.71568 21.6526 4.56605C21.652 4.55932 21.6514 4.55299 21.6508 4.54703C21.6449 4.54743 21.6385 4.54789 21.6318 4.54842ZM21.6665 17.333C21.6665 16.1364 20.6965 15.1664 19.4998 15.1664C18.3032 15.1664 17.3332 16.1364 17.3332 17.333C17.3332 18.5296 18.3032 19.4997 19.4998 19.4997C20.6965 19.4997 21.6665 18.5296 21.6665 17.333ZM8.66651 19.4997C8.66651 18.3031 7.69646 17.333 6.49984 17.333C5.30322 17.333 4.33317 18.3031 4.33317 19.4997C4.33317 20.6963 5.30322 21.6664 6.49984 21.6664C7.69646 21.6664 8.66651 20.6963 8.66651 19.4997Z'
        fill='white'
      />
    </svg>
  );
}

function CloseMusicIcon() {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.6318 4.54842C21.4821 4.56024 21.2759 4.59364 20.9096 4.65467L11.3763 6.24356C11.103 6.28912 10.9572 6.31415 10.8534 6.33962C10.8497 6.34053 10.8461 6.34141 10.8428 6.34225C10.8425 6.34568 10.8422 6.3493 10.8419 6.3531C10.8339 6.45968 10.8332 6.6076 10.8332 6.88472V19.4997C10.8332 21.8929 8.89307 23.833 6.49984 23.833C4.1066 23.833 2.1665 21.8929 2.1665 19.4997C2.1665 17.1065 4.1066 15.1664 6.49984 15.1664C7.28913 15.1664 8.02913 15.3774 8.6665 15.7461V6.88472C8.6665 6.87445 8.6665 6.86419 8.6665 6.85393C8.66647 6.61981 8.66644 6.38815 8.68145 6.1897C8.69814 5.96898 8.73736 5.71241 8.85631 5.44725C9.02362 5.07429 9.29303 4.75627 9.63341 4.52992C9.87541 4.36899 10.122 4.28813 10.337 4.23538C10.5303 4.18795 10.7588 4.1499 10.9897 4.11143L20.5912 2.51119C20.9057 2.45874 21.2064 2.40859 21.4613 2.38847C21.7365 2.36675 22.0724 2.36799 22.4209 2.49744C22.8958 2.67383 23.2939 3.01105 23.5459 3.45048C23.7309 3.77299 23.7874 4.10406 23.8112 4.3791C23.8332 4.63387 23.8332 4.9387 23.8332 5.25756L23.8332 17.333C23.8332 19.7263 21.8931 21.6664 19.4998 21.6664C17.1066 21.6664 15.1665 19.7263 15.1665 17.333C15.1665 14.9398 17.1066 12.9997 19.4998 12.9997C20.2891 12.9997 21.0291 13.2107 21.6665 13.5794V5.29583C21.6665 4.92456 21.6656 4.71568 21.6526 4.56605C21.652 4.55932 21.6514 4.55299 21.6508 4.54703C21.6449 4.54743 21.6385 4.54789 21.6318 4.54842ZM21.6665 17.333C21.6665 16.1364 20.6965 15.1664 19.4998 15.1664C18.3032 15.1664 17.3332 16.1364 17.3332 17.333C17.3332 18.5296 18.3032 19.4997 19.4998 19.4997C20.6965 19.4997 21.6665 18.5296 21.6665 17.333ZM8.6665 19.4997C8.6665 18.3031 7.69645 17.333 6.49984 17.333C5.30322 17.333 4.33317 18.3031 4.33317 19.4997C4.33317 20.6963 5.30322 21.6664 6.49984 21.6664C7.69645 21.6664 8.6665 20.6963 8.6665 19.4997Z'
        fill='white'
      />
      <path
        d='M5 4L25 22'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}

function App() {
  useEffect(() => {
    const textElement = document.getElementById('text');
    if (!textElement) return;
    textElement.textContent = '';
  }, []);

  const [isPanelVisibile, setIsPanelVisible] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleToggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
      return;
    }

    audioRef.current.play();
    setIsMusicPlaying(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.4;
  }, []);

  return (
    <HasLoadedProvider>
      <div>
        <video
          autoPlay
          loop
          className='fade-in -z-10 object-cover object-[-550px_0px] sm:object-[-400px_0px] md:object-[-100px_0px] lg:object-[0px] fixed top-0 left-0 w-screen h-screen'
          src='https://static.onlyvisitonce.com/knight-with-rain.mp4'
          muted
        />
        {isPanelVisibile ? <Panel /> : null}
        <div className='position fixed bottom-4 right-4 flex gap-3 items-center'>
          <button
            type='button'
            onClick={() => setIsPanelVisible(!isPanelVisibile)}
          >
            {isPanelVisibile ? <EyeIcon /> : <CloseEyeIcon />}
          </button>
          <button type='button' onClick={handleToggleMusic}>
            {isMusicPlaying ? <MusicIcon /> : <CloseMusicIcon />}
            <audio
              src='https://static.onlyvisitonce.com/rain-sounds-shorter.mp3'
              autoPlay
              loop
              ref={audioRef}
            ></audio>
          </button>
        </div>
      </div>
    </HasLoadedProvider>
  );
}

export default App;
