import React from "react";
import {
  Canvas,
  Circle,
  Group,
  RadialGradient,
  vec,
  Blur,
} from "@shopify/react-native-skia";
import { StyleProp,Text,View,ViewStyle } from "react-native";
const r = 128;
export default function GradientCircle({radius,x,y,colors,style}:{radius:number,x:number,y:number,colors:string[],style:StyleProp<ViewStyle>}) {
  return (
    <Canvas style={style}>
      <Group> 
        <Circle cx={x} cy={y} r={radius} />
        <RadialGradient
          colors={colors}
          c={vec(radius,radius)}
          r={radius}
        />
        <Blur blur={100} />
      </Group>
    </Canvas>
  );
}