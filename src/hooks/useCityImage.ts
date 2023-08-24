import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useCityImage = (image: string) => {
  const [done, setDone] = useState(false)

  const getImg = () => {
    const res = axios.get('https://bing-image-search1.p.rapidapi.com/images/search', {
      params: {
        q: image || 'москва',
        count: '1',
      },
      headers: {
        'X-RapidAPI-Key': '1fd63b54eemshab0fee48e90e76ap1bd2ccjsn955168f95359',
        'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
      },
    })

    return res
  }

  const { data: img, isLoading } = useQuery(image, () => getImg(), {
    select: (res) => ({
      title:
        res.data.queryContext.originalQuery[0].toUpperCase() +
        res.data.queryContext.originalQuery.slice(1),
      image: res.data.value[0].thumbnailUrl,
    }),
    onSuccess: () => setDone(false),
    enabled: !!done,
  })

  return { img, setDone, isLoading }
}
