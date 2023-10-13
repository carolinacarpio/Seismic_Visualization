/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import styles from '@/scss/components/Places.module.scss';

export default function Lander(props) {
  const group = useRef();

  const { lat, long, name } = props;
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  useFrame(() => {
    group.current.lookAt(0, 0, 0);
  });

  const r = 2;

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.sin(degToRad(long)),
        r * Math.cos(Math.PI / 2 - degToRad(lat)),
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.cos(degToRad(long)),
      ]}
    >
      <mesh>
        <Html distanceFactor={10}>
          <div className={styles.info}>{name}</div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload('/lander.glb');
