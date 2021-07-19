import { useEffect, useState } from 'react';
import axios from 'axios';

import { ANIME_TV_API_URL } from '../config/urls';

interface AxiosResponse {
  msg: string;
}

export default function Calendary() {
  const [calendary, setCalendary] = useState('');

  useEffect(() => {
    axios
      .get<AxiosResponse>(`${ANIME_TV_API_URL}/meuanimetv-40.php?calendario`)
      .then(({ data: { msg } }) => setCalendary(msg));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: calendary }} />
    </div>
  );
}
