export const Podcast = ({ episode }) => {
  return(
    <iframe src={`https://open.spotify.com/episode/${episode}`} width='100%' height='232' frameBorder='0' allowTransparency='true' allow='encrypted-media'>
    </iframe>
    );
};