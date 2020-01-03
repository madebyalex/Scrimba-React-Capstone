import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from '../components/Image';
import getClass from '../utils/randClass';

function Photos(props) {
  const { photosList } = useContext(Context);

  const photos = photosList.map((item, index) => (
    <Image key={item.id} className={getClass(index)} img={item} />
  ));

  // console.log(photosList);

  return <main className='photos'>{photos}</main>;
}

export default Photos;
