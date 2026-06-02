const showroom = {
  lat: 37.5826,
  lng: 126.9838
};

function initKakaoMap() {
  const mapContainer = document.getElementById("map");

  if (!mapContainer || !window.kakao || !window.kakao.maps) return;

  const center = new kakao.maps.LatLng(showroom.lat, showroom.lng);
  const map = new kakao.maps.Map(mapContainer, {
    center,
    level: 4
  });

  new kakao.maps.Marker({
    position: center,
    map
  });
}

window.initKakaoMap = initKakaoMap;
