import React from 'react';
import { useFetchReleases } from '../../../services/hooks';
import withList from '../../HOCs/WithList/WithList';
import ReleaseItem from '../Release/ReleaseItem';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { artist, artistId } = useParams();

  const { releases, pageNum, dec, inc } = useFetchReleases(artistId, artist);
  const Releases = withList(ReleaseItem);
  return (
    <>
      <h1>{artist}</h1>
      <button disabled={pageNum === 1} onClick={dec}>Previous Page</button>
      <button disabled={releases.length < 20} onClick={inc}>Next Page</button>
      <Releases list={releases} />
    </>
  );
};

export default Artist;
