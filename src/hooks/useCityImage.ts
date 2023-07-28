import axios from 'axios'
import { useEffect, useState } from 'react'

export const useCityImage = (image: string) => {
  const [img, setImg] = useState({
    title: '',
    image: '',
  })
  const [done, setDone] = useState(false)
  useEffect(() => {
    axios
      .get('https://bing-image-search1.p.rapidapi.com/images/search', {
        params: {
          q: image || 'москва',
          count: '1',
        },
        headers: {
          'X-RapidAPI-Key': '1fd63b54eemshab0fee48e90e76ap1bd2ccjsn955168f95359',
          'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
        },
      })
      .then((res) =>
        setImg({
          title:
            res.data.queryContext.originalQuery[0].toUpperCase() +
            res.data.queryContext.originalQuery.slice(1),
          image: res.data.value[0].thumbnailUrl,
        })
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])
  return { img, setDone }
}
