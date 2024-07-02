import { Slot } from "expo-router"
import React from "react"

function InitialLayout() {
     return <Slot />
}

export default function Layout() {
     return (
          <InitialLayout />
     )
}