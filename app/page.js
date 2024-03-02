"use client"
import React, {useState} from "react";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
    <div id="product-page">
    <Header/>
    <div id="main">
    <Sidebar/>
    <ImageSlider slides={SliderData}/>
    </div>
    </div>
    </>
  );
}
