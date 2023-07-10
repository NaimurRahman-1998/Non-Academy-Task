
import ReactPlayer from 'react-player'
const VideoPlayer = () => {
    return (
        <div className="relative">
            <ReactPlayer
                className="absolute top-0"
                url='https://www.example.com/video.mp4'
                controls={true}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;