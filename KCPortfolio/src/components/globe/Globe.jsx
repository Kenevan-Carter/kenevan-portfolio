import { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import "./Globe.css";

function Globe() {

  useLayoutEffect(() => {

    // Create the chart root
    const root = am5.Root.new("globe-chart");

    // Create the globe
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {

        projection: am5map.geoOrthographic(),

        panX: "rotateX",
        panY: "rotateY",

        wheelY: "none",

        rotationX: -90,
        rotationY: -20,

      })
    );


    // Add water / globe background
    const backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(0x24082f),
      fillOpacity: 1,
      strokeOpacity: 0,
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });


    // Add countries
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {

        geoJSON: am5geodata_worldLow,

        exclude: ["AQ"],

      })
    );


    polygonSeries.mapPolygons.template.setAll({
        fill: am5.color(0x35133f),
        stroke: am5.color(0x914ea3),
        strokeWidth: 1,
      });


    // Locations
    const locations = [
        {
          name: "Minneapolis",
          latitude: 44.9778,
          longitude: -93.2650,
          type: "lived",
        },
        {
          name: "Madrid",
          latitude: 40.4168,
          longitude: -3.7038,
          type: "visited",
        },
        {
          name: "Tijuana",
          latitude: 32.7157,
          longitude: -117.1611,
          type: "visited",
        },
        {
          name: "Porto",
          latitude: 41.1579,
          longitude: -8.6291,
          type: "visited",
        },
        {
          name: "Paris",
          latitude: 48.8566,
          longitude: 2.3522,
          type: "visited",
        },
        {
          name: "London",
          latitude: 51.5074,
          longitude: -0.1278,
          type: "visited",
        },
        {
          name: "Milan",
          latitude: 45.4642,
          longitude: 9.1900,
          type: "visited",
        },
        {
          name: "Rome",
          latitude: 41.9028,
          longitude: 12.4964,
          type: "visited",
        },
        {
          name: "Malmö",
          latitude: 55.6050,
          longitude: 13.0038,
          type: "visited",
        },
        {
          name: "Copenhagen",
          latitude: 55.6761,
          longitude: 12.5683,
          type: "visited",
        },
        {
          name: "Cairo",
          latitude: 30.0444,
          longitude: 31.2357,
          type: "visited",
        },
        {
          name: "Alexandria",
          latitude: 31.2001,
          longitude: 29.9187,
          type: "visited",
        },
        {
          name: "Negril",
          latitude: 18.2684,
          longitude: -78.3472,
          type: "visited",
        },
        {
          name: "Tamarindo",
          latitude: 10.2993,
          longitude: -85.8371,
          type: "visited",
        },
        {
          name: "San José",
          latitude: 9.9281,
          longitude: -84.0907,
          type: "visited",
        },
      ];


    // Create location point series
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );
    // Create different icons based on location type
    pointSeries.bullets.push((root, series, dataItem) => {

        const type = dataItem.dataContext.type;
        if (type === "home") {

            const star = am5.Label.new(root, {
            text: "★",
            fontSize: 22,
        
            fill: am5.color(0xffffff),
        
            centerX: am5.p50,
            centerY: am5.p50,
        
            tooltipText: dataItem.dataContext.name,
        
            cursorOverStyle: "pointer",
            interactive: true,
            });
        
            star.states.create("hover", {
            fontSize: 30,
            fill: am5.color(0xd8a4ff),
            });
        
            return am5.Bullet.new(root, {
            sprite: star,
            });
        }
      
      
        // Places I've lived
        if (type === "lived") {
      
          const circle = am5.Circle.new(root, {
            radius: 10,
      
            fill: am5.color(0xd8a4ff),
      
            stroke: am5.color(0xffffff),
            strokeWidth: 2,
      
            tooltipText: "{name}",
            cursorOverStyle: "pointer",
          });
      
          circle.states.create("hover", {
            radius: 11,
            fill: am5.color(0xffffff),
          });
      
          return am5.Bullet.new(root, {
            sprite: circle,
          });
        }
      
      
        // Places I've visited
        const circle = am5.Circle.new(root, {
          radius: 4,
      
          fill: am5.color(0x914ea3),
      
          stroke: am5.color(0xffffff),
          strokeWidth: 1,
      
          tooltipText: "{name}",
          cursorOverStyle: "pointer",
        });
      
        circle.states.create("hover", {
          radius: 8,
          fill: am5.color(0xd8a4ff),
        });
      
        return am5.Bullet.new(root, {
          sprite: circle,
        });
      
      });


    // Add locations to point series
    locations.forEach((location) => {
      pointSeries.data.push({
        name: location.name,
        type: location.type,
        geometry: {
          type: "Point",
          coordinates: [
            location.longitude,
            location.latitude
          ],

        },

      });

    });

    // Slowly rotate the globe
    chart.animate({

      key: "rotationX",

      from: chart.get("rotationX"),

      to: chart.get("rotationX") + 360,

      duration: 20000,

      loops: Infinity,

    });


    // Cleanup when component disappears
    return () => {
      root.dispose();
    };

  }, []);


  return (
    <div className="globe-section">

      <h2>My Map</h2>

      <div id="globe-chart"></div>

    </div>
  );
}

export default Globe;