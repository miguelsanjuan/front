import React, { Component } from "react";
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
// import Stats from '../assets/img/disc.png'

export default class Animate extends Component {
    constructor(props) {
        super(props);
        this.mount = React.createRef();
      }

    componentDidMount(){

        let camera, scene, renderer, stats, material;
		let mouseX = 0, mouseY = 0;

		let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        
        var init = function() {

            camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
            camera.position.z = 1000;

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2( 0x000000, 0.001 );

            const geometry = new THREE.BufferGeometry();
            const vertices = [];

            const sprite = new THREE.TextureLoader().load( '../assets/img/disc.png' );

            for ( let i = 0; i < 10000; i ++ ) {

                const x = 2000 * Math.random() - 1000;
                const y = 2000 * Math.random() - 1000;
                const z = 2000 * Math.random() - 1000;

                vertices.push( x, y, z );

            }

            geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

            material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
            material.color.setHSL( 1.0, 0.3, 0.7 );

            const particles = new THREE.Points( geometry, material );
            scene.add( particles );

            //

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            // Use ref as a mount point of the Three.js scene instead of the document.body
            // this.mount.appendChild( renderer.domElement );

            //

            stats = new Stats();
            document.body.appendChild( stats.dom );
            // this.mount.appendChild( stats.dom ); 

            //

            const gui = new GUI();

            gui.add( material, 'sizeAttenuation' ).onChange( function () {

                material.needsUpdate = true;

            } );

            gui.open();

            //

             document.body.style.touchAction = 'none';
             document.body.addEventListener( 'pointermove', onPointerMove, false );
            // this.mount.style.touchAction = 'none';
            // this.mount.addEventListener( 'pointermove', onPointerMove, false );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        var onWindowResize = function() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        var onPointerMove = function( event ) {

            if ( event.isPrimary === false ) return;

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;

        }


        var animate = function() {

            requestAnimationFrame( animate );

            render2();
            stats.update();

        }

        var render2 = function() {

            const time = Date.now() * 0.00005;

            camera.position.x += ( mouseX - camera.position.x ) * 0.05;
            camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

            camera.lookAt( scene.position );

            const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
            material.color.setHSL( h, 0.5, 0.5 );

            renderer.render( scene, camera );

        }

        init();
		animate();

    }

    render() {
        return (
            <div ref={ ref => (this.mount = ref) } />
        );
    }
}
