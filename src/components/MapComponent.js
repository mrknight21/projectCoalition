import React, { Component } from 'react';
import Iframe from 'react-iframe';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = ({ text, color }) => (
<div>
    <Icon 
        name='user' 
        size='large'
        color={color} 
    />
    <div>{text}</div>
</div>);

export default class MapComponent extends Component {

    static defaultProps = {
        center: {lat: -36.856, lng: 174.765644},
        zoom: 14
    };

    render() {
        return (
            <div
                style={{height: '400px', width: '400px'}}
                // width={{'100%'}},
                // height={{'100%'}}
                >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCAA0cjcjXsjZBymMjQuQyZR6hJ0SUf7hI" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                    <AnyReactComponent
                        lat={-36.847379}
                        lng={174.772049}
                        text={'Bryan'}
                        color={'green'}
                    >
                    </AnyReactComponent>

                    <AnyReactComponent
                        lat={-36.856547}
                        lng={174.762193}
                        text={'James'}
                        color={'orange'}
                    />

                    <AnyReactComponent
                        lat={-36.856}
                        lng={174.765644}
                        text={'Jongwoo'}
                        color={'yellow'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


            {/* <Iframe
                width="100%"
                height="50%"
                frameborder="0" style="border:0"
                url="https://www.google.com/maps/embed/v1/place?key=AIzaSyCAA0cjcjXsjZBymMjQuQyZR6hJ0SUf7hI
                &q=Space+Needle,Seattle+WA" 
                allowfullscreen
                >
            </Iframe> */}