import React from "react";

const Box = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
