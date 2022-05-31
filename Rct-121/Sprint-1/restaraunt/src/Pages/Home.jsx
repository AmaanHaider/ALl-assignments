import FormContainer from "../components/Form.component";
import Card from "../components/Card"
import { useEffect, useState } from "react";
import axios from "axios";

const Container=styled.div`
  display: flex;
`
const CardDiv=styled.div`
background-color: teal;
width: 80vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

let fetchData
const Home = () => {
  const [restaurent,setRestaurent]=useState(null)

  useEffect(()=>{
    fetchData()
  },[])
  fetchData=async()=>{
    try {
      let data=await axios.get("http://localhost:8080/data")
      setRestaurent(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(restaurent)


  return (
    <Container>
      <FormContainer />
      <CardDiv>
        {restaurent?.map((data)=>
        <Card data={data} key={data.id}/>
        )}
      </CardDiv>
    </Container>
  );
};

export  {Home,fetchData};