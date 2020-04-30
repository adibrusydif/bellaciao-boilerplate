import apisauce from 'apisauce'

const url = 'https://api.themoviedb.org/'
const urlCast =
  '3/tv/71446-la-casa-de-papel/season/2/credits?api_key=1a98876a3d11ea73682f95016afe85a3&language=en-US'

const create = (baseURL = url) => {
  const apiservice = apisauce.create({
    baseURL: url,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'access-control-allow-credentials': true,
    },
    timeout: 10000,
  })

  const getCast = () => apiservice.get(urlCast)

  return {
    getCast,
  }
}

export default {
  create,
}
