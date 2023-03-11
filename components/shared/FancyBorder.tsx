import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

import  { Colours } from '@app/constants' 


export const FancyBorder = () => {
  const { PRIMARY, SECONDARY } = Colours.APP
  return (
    <LinearGradient
					start={[0, 0.5]}
					end={[1, 0.5]}
					colors={[SECONDARY, PRIMARY]}
					style={{ height: 2.5 }}
				/>
  )
}

