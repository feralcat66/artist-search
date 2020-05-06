import React from 'react'; 
import { useFetchLyrics } from '../../../services/hooks';
import { useParams } from 'react-router-dom';

const Lyric = () => {
  const { artist, title } = useParams();

  const body = useFetchLyrics(artist, title);
  
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};
export default Lyric;
