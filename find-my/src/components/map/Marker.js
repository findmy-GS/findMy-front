import markerPositions from "../../data/markerData";
import markerStar from "../../assets/marker/markerStar.png";
const {kakao}=window;
export const generateMarker=(map,lat,lng)=>{
  for(let i=0;i<markerPositions.length;i++)
  {
    const imageSize=new kakao.maps.Size(24,35);
    const imageSrc=markerStar;
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    //마커 생성
    const position=new kakao.maps.LatLng(lat+markerPositions[i].latlng.latOffset,lng+markerPositions[i].latlng.lngOffset);
    const marker = new kakao.maps.Marker({
       map, // 마커를 표시할 지도
       position, // 마커를 표시할 위치
       title :markerPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
       image : markerImage // 마커 이미지 
   });
  }
};