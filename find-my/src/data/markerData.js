const resolution=500;
// 마커를 표시할 위치와 title 객체 배열입니다 
let positions = [
  {
      title: '맥북', 
      latlng:{latOffset:(Math.random()*(-1)+Math.random())/resolution,lngOffset:(Math.random()*(-1)+Math.random())/resolution}
  },
  {
      title: '버즈', 
      latlng: {latOffset:(Math.random()*(-1)+Math.random())/resolution,lngOffset:(Math.random()*(-1)+Math.random())/resolution}
  },
  {
      title: '텀블러', 
      latlng: {latOffset:(Math.random()*(-1)+Math.random())/resolution,lngOffset:(Math.random()*(-1)+Math.random())/resolution}
  },
  {
      title: '안경',
      latlng: {latOffset:(Math.random()*(-1)+Math.random())/resolution,lngOffset:(Math.random()*(-1)+Math.random())/resolution}
  }
];

export default positions;
