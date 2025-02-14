"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5e696c533091ba1440a327093ec523f62e5f8557d07cfc5509d363cb8f28bc7e&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
    script.async = true
    script.charSet = "utf-8"
    script.type = "text/javascript"

    if (mapRef.current) {
      mapRef.current.appendChild(script)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [])

  return <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: "300px" }} />
}

export default Map

