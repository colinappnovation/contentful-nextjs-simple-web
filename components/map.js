import {Component} from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

class Map extends Component {
    state = {
        viewport: {
            width: '70vw',
            height: '70vh',
            latitude: 41.5868,
            longitude: -93.625,
            zoom: 13
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
                </ReactMapGL>
        );
    }
}

export default Map;