import ReactPlayer from 'react-player';
import Header from './Header';
import '../styles/video.css';
import video from '../assets/videos/generique-marvel.mp4';

const Video = ({ setInput, input }) => {
  const videoEnded = () => {
    alert('The video is over');
  };

  return (
    <>
      <Header setInput={setInput} input={input} />

      <div className='player-wrapper'>
        <ReactPlayer
          url={video}
          controls
          playing
          width='100%'
          height='100%'
          className='player'
          onEnded={videoEnded}
        />
      </div>
    </>
  );
};

export default Video;
