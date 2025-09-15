"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
  feelsLike?: number;
}

export const WeatherComponent = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        
        // Using Open-Meteo free API (no API key required)
        // Bucharest coordinates: latitude=44.4268, longitude=26.1025
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=44.4268&longitude=26.1025&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility&timezone=Europe/Bucharest&forecast_days=1'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const current = data.current;
        
        // Map weather codes to descriptions
        const getWeatherDescription = (code: number): string => {
          const weatherCodes: { [key: number]: string } = {
            0: "clear",
            1: "clear",
            2: "cloudy",
            3: "overcast",
            45: "fog",
            48: "fog",
            51: "drizzle",
            53: "drizzle",
            55: "drizzle",
            56: "drizzle",
            57: "drizzle",
            61: "rain",
            63: "rain",
            65: "rain",
            66: "rain",
            67: "rain",
            71: "snow",
            73: "snow",
            75: "snow",
            77: "snow",
            80: "rain",
            81: "rain",
            82: "rain",
            85: "snow",
            86: "snow",
            95: "storm",
            96: "storm",
            99: "storm",
          };
          return weatherCodes[code] || "unknown";
        };
        
        const weatherData: WeatherData = {
          temperature: Math.round(current.temperature_2m),
          description: getWeatherDescription(current.weather_code),
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m * 3.6), // Convert m/s to km/h
          visibility: Math.round(current.visibility / 1000), // Convert m to km
          icon: ""
        };
        
        setWeather(weatherData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data");
        console.error("Weather fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);


  if (isLoading) {
    return (
      <div className="border border-border bg-card p-4 md:p-6">
        <div className="space-y-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-7 bg-muted rounded mb-3 mx-auto w-24"></div>
              <div className="h-6 bg-muted rounded mb-2 mx-auto w-20"></div>
              <div className="h-4 bg-muted rounded mx-auto w-32"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="border border-border bg-card p-4 md:p-6">
        <div className="space-y-4 text-center">
          <div className="text-sm text-muted-foreground">
            {error || "Weather unavailable"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-4 md:p-6">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-xl font-semibold text-foreground">
            {weather.temperature}<span className="text-accent ml-1">°C</span>
          </div>
          <div className="space-y-1 mt-2">
            <div className="text-lg font-semibold text-foreground capitalize">
              {weather.description}
            </div>
            <div className="text-sm text-muted-foreground">
              Bucharest, Romania
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
