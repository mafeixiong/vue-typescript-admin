let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://test1.com/prod'
} else {
  BASE_URL = 'http://test2.com/test'
}

export { BASE_URL, TIME_OUT }
