let str = `
010-1234-4567
thesecond@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`
// @앞(?=@) 임이의 문자(.)를 1개이상({1,}) 매치되는 조건.
console.log(str.match(/(?<=@).{1,}/g))
// @앞에는 \사용 안해도 된다.

