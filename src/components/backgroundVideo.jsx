const BackgroundVideo = () => (
  <video
    autoPlay
    loop
    muted
    className="w-full h-full object-cover object-center fixed z-[-1]"
  >
    <source src="/src/assets/Videos/BackgroundVideo3.webm" type="video/webm" />
  </video>
);

export default BackgroundVideo;
