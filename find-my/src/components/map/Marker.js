import markerPositions from "../../data/markerData";
import markerStar from "../../assets/marker/markerStar.png";
import {useReactiveVar} from "@apollo/client";
import {userPosition} from '../../apollo';
const {kakao}=window;

let markers=[];
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
   markers.push(marker);
   
  }
  markerClusterer(map).addMarkers(markers);
 
};

export const markerClusterer=(map)=>{
  // 마커 클러스터러를 생성합니다 
  const clusterer = new kakao.maps.MarkerClusterer({
    map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 6 // 클러스터 할 최소 지도 레벨 
  });
  return clusterer;
};