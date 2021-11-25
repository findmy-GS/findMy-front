import React,{useEffect} from "react";
import {generateMarker,markerClusterer} from "./Marker";
const {kakao}=window;

let lat;
let lng;
const onGeoOk=(position)=>{
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  
}
const onGeoError=()=> {
  alert("위치 정보를 불러 올 수 없습니다.");
 
}

const MapContainer=()=>{
  navigator.geolocation.getCurrentPosition( onGeoOk, onGeoError);
  console.log(lat,lng);
  //if(!coords) 나중에 처리 
  useEffect(()=>{
   
    const container=document.getElementById("myMap");
    const options = {
			center: new kakao.maps.LatLng(lat,lng),
			level: 3 //지도의 확대 레벨,
     

		};
   const map = new kakao.maps.Map(container, options);
   generateMarker(map,lat,lng);
 
   
  },[]);
  return (
  <div id="myMap" style={{
    width:"500px",height:"500px"
  }}></div>);
}


export default MapContainer;