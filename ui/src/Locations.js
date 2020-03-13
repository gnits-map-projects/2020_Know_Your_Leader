// import React, {Component} from 'react';
// import './Apps.css';
// //import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// // import profilepic from './profilepic.png';



// class Locations extends Component {
  
//   // state = {
//   //   mehidipatnam: {
//   //     lat: 17.3958,
//   //     lng: 78.4312,
//   //   },
//   //   dergah: {
//   //     lat: 17.4060,
//   //     lng: 78.3908,
//   //   },
//   //   gachibowli: {
//   //     lat: 17.4401,
//   //     lng: 78.3489,
//   //   },
//   //   zoom: 13
//   // }
//   state = {
//     center: [17.38405, 78.45636],
//     zoom: 13,
//   };


//   // mehidipatnam= icon({
//   //   //iconUrl: profilepic,
//   //   iconSize:     [38, 95], 
//   //   shadowSize:   [50, 64], 
//   //   iconAnchor:   [22, 94], 
//   //   shadowAnchor: [4, 62],  
//   //   popupAnchor:  [-3, -76]
//   // });

//   // dergah = icon({
//   //   //iconUrl: profilepic,
//   //   iconSize:     [38, 95], 
//   //   shadowSize:   [50, 64], 
//   //   iconAnchor:   [22, 94], 
//   //   shadowAnchor: [4, 62],  
//   //   popupAnchor:  [-3, -86]
//   // });

//   // gachibowli = icon({
//   //  // iconUrl: profilepic,
//   //   iconSize:     [38, 95], 
//   //   shadowSize:   [50, 64], 
//   //   iconAnchor:   [22, 94], 
//   //   shadowAnchor: [4, 62],  
//   //   popupAnchor:  [-3, -86]
//   // });

//   // render(){
//   //   const positionDergah = [this.state.dergah.lat, this.state.dergah.lng];
//   //   const positionMehidipatnam = [this.state.mehidipatnam.lat, this.state.mehidipatnam.lng];
//   //   const positionGachibowli = [this.state.gachibowli.lat, this.state.gachibowli.lng];
//   //   return (
//   //     <Map className="map" center={positionMehidipatnam} zoom={this.state.zoom}>
//   //       <TileLayer
//   //         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//   //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   //       />
//   //       <Marker position={positionMehidipatnam} icon={this.mehidipatnam}>
//   //         <Popup>
//   //         Leader of Mehiddipatnam
//   //         </Popup>
//   //       </Marker>
//   //       <Marker position={positionDergah} icon={this.dergah}>
//   //         <Popup>
//   //         Leader of Dergah
//   //         </Popup>
//   //       </Marker>
//   //       <Marker position={positionGachibowli} icon={this.gachibowli}>
//   //         <Popup>
//   //         Leader of Gachibowli
//   //         </Popup>
//   //       </Marker>
//   //     </Map>
//   //   );
//   // }
//   render() {
//     console.log('maps')
//     return (
//       <div>
//         <Map center={this.state.center} zoom={this.state.zoom}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//           />
//           <Marker position={this.state.center}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </Map>
//       </div>
//     );
//   }
// }

// export default Locations;







import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import profilepic from './profilepic.png';
import './Profile';

var ar=sessionStorage.getItem("firstname")
var location = sessionStorage.getItem("locality")
var popLocation;
var popup ;



class Locations extends Component {


  
  state = {
    mehidipatnam: {
      lat: 17.3958,
      lng: 78.4312,
    },
    dergah: {
      lat: 17.4060,
      lng: 78.3908,
    },
    gachibowli: {
      lat: 17.4401,
      lng: 78.3489,
    },
    location:{
      lat: 17.393,
      lng: 78.473,
    },
    zoom: 13
  }


  mehidipatnam= L.icon({
    iconUrl: profilepic,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
  });

  dergah = L.icon({
    iconUrl: profilepic,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -86]
  });

  gachibowli = L.icon({
    iconUrl: profilepic,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -86]
  });
  location= L.icon({
    iconUrl: profilepic,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
  });

  render(){
    const positionDergah = [this.state.dergah.lat, this.state.dergah.lng];
    const positionMehidipatnam = [this.state.mehidipatnam.lat, this.state.mehidipatnam.lng];
    const positionGachibowli = [this.state.gachibowli.lat, this.state.gachibowli.lng];
    const positionLocation = [this.state.location.lat, this.state.location.lng];

    return (
      <Map className="map" center={positionMehidipatnam} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionMehidipatnam} icon={this.mehidipatnam}>
          <Popup onClick="hello">
          Leader of Mehiddipatnam
           <button onClick={()=>console.log("hi")}>Move</button>
          </Popup>
          
          
        </Marker>
        <Marker position={positionDergah} icon={this.dergah}>
          <Popup>
          Leader of Dergah
          </Popup>
        </Marker>
        <Marker position={positionGachibowli} icon={this.gachibowli}>
          <Popup>
          Leader of Gachibowli
          </Popup>
        </Marker>
        <Marker position={positionLocation} icon={this.location}>
          <Popup>
          Leader of abidsroad
          </Popup>
        </Marker>
        
        
      </Map>
    );
  }
}

export default Locations;