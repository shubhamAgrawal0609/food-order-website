import React ,{ useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Carousal from "../component/Carousal";

export default function Home() {
  // const [foodCat, setFoodCat] = useState([])
  // const [foodItems, setFoodItems] = useState([])
  // //const [search, setSearch] = useState('')
  // const loadFoodItems = async () => {
  //   let response = await fetch("http://localhost:5000/api/auth/foodData", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }

  //   });
  //   response = await response.json()
  //   // console.log(response[1][0].CategoryName)
  //   // setFoodItems(response[0])
  //   // setFoodCat(response[1])
  //   console.log(response[0],response[1]);
  // }

  
  // useEffect(() => {
  //   loadFoodItems()
  // }, [])




  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
     <div className="m-3 ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
