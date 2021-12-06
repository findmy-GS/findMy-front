import React,{useEffect, useRef} from "react";
import styled from "styled-components";
import {generateMarker} from "./Marker";
import {useReactiveVar} from "@apollo/client";
import {userPosition} from '../../apollo';
const KaKaoMap=styled.div`
  width:100%;
  height:100%;

 
`;
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

const Map=()=>{
  const userPos=useReactiveVar(userPosition);
  navigator.geolocation.getCurrentPosition( onGeoOk, onGeoError);
  //if(!coords) 나중에 처리 
  const myMap=useRef(null);
  useEffect(()=>{
    
    userPos.lat=lat;
    userPos.lng=lng;
    console.log("pos",lat,lng,2);
   
    const options = {
			center: new kakao.maps.LatLng(lat,lng),
			level: 3 //지도의 확대 레벨,
      

		};
   const map = new kakao.maps.Map(myMap.current, options);
   generateMarker(map,lat,lng);
   return () => {};
 
   
  },[]);
  return (
  <KaKaoMap ref={myMap}></KaKaoMap>);
}


export default Map;