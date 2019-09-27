import {Component} from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

const markerStlye = {
    width: '30px',
    height: '30px'
}

const Markers = ({ offices } = props) => {
    return offices.map(l => (
        <Marker key={l.name} latitude={parseFloat(l.mapCoords.lat)} longitude={parseFloat(l.mapCoords.lon)}>
            <img src="/static/marker.png" style={markerStlye} />
        </Marker>        
     ))
}

class Map extends Component {
    state = {
        viewport: {
            width: '70vw',
            height: '70vh',
            zoom: 1
        }
    };    

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}

                
            >
                <div className="nav" style={navStyle}>
                    <NavigationControl/>
                </div>
                   <Markers offices={this.props.offices} />
                </ReactMapGL>
                 
        );
    }
}

export default Map;