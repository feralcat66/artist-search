import { useEffect, useState } from 'react';

export const useFetchLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('');
  
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => res.json())
      .then(lyrics => setLyrics(lyrics.lyrics));
  }, [title]);

  return lyrics;
};

export const useFetchSongs = (releaseId, artist) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
      .then(res => res.json())
      .then(res => res.recordings)
      .then(songs => {
        const mungedSongs = songs.map(song => ({ 
          title: song.title, 
          artist: artist, 
          id: song.id }));
        setSongs(mungedSongs);
      });
  }, [releaseId]);
  return songs;
};

export const useFetchReleases = (artistId, artist) => {
  const [releases, setReleases] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const offset = pageNum * 20;
  const dec = () => setPageNum(prev => prev - 1);
  const inc = () => setPageNum(prev => prev + 1);

  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=20&offset=${offset}`)
      .then(res => res.json())
      .then(res => res.releases)
      .then(releases => {
        const mungedReleases = releases.map(release => {        
          return ({
            releaseTitle: release.title.replace('/', 'and'),
            releaseId: release.id,
            artist: artist,
            id: release.id
          });
        });
        setReleases(mungedReleases);
      });
  }, [pageNum]);
  return { releases, pageNum, dec, inc };
};
