
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card/Card';
import {fetchData} from '../utils/fetchData.js'

import Categories from './Categories/Categories';
import Pagination from '../utils/Pagination.jsx';

const Games = () => {
  const[gamedata,setgameData]=useState([]);
  const[search,setSearch]=useState('')
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // const[toggle,setToggle]=useState(false)
  const[token,setToken]=useState('c59n15dhg7u7w2t5jurqcheb39n9xe');
  const stapleImage={ url: 'https://images5.alphacoders.com/109/1091255.png'}
  
  
  
  useEffect(()=>{
   
    (async()=>{
      
      const gData=await fetchData();
      setgameData(gData)
     
    })()
    
  },[])

  
  const FindImage= (post)=>{
    
    if(post.cover){
      return post.cover;
    }else{
      return stapleImage
    }
  }
  
  const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
          <Card 
          key={key}
          header={post.name}
          description={post.summary}
          id={post.id}
          rating={post.rating}
          image={FindImage(post)}
          isDiff={true}
          
         />
        )
      )   
    } 
  }
  const handleSearch = async () => {
    if (search) {

      // const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const GameData=gamedata;
     

      const searchedExercises = GameData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setgameData(searchedExercises);
    }
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gamedata.slice(indexOfFirstPost, indexOfLastPost);
  const newPost = {
    "header":'Valorant',
    "description":"Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. ",
    "id":"0.001",
    "holder":"0x037f92b675A8909f4f36317F31fd789ac0097E0af50C9df8D6080e7adeA4832C",
    "image":"https://res.cloudinary.com/dwwcryioj/image/upload/v1701932282/nh1v5johdkzqztv3xar0.webp",
    "isDiff":"false",
    "token_id":"1",
  };

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='ml-4 mt-[-30rem] '>
      {/* <button onClick={collectNFT} className='px-4 py-2 text-xs font-bold  text-white font-montserrat  transition-all duration-150 bg-red-700 rounded shadow outline-none active:bg-red-100 hover:shadow-md focus:outline-none ease'>Collect Nfts</button> */}
      {/* <Carousel array={gamedata} /> */}
      <Categories />
      <div className='grid grid-cols-4 gap-5 width-[100vw]'>
      {/* <Card 
          key="3"
          header="Valorant"
          description="ABCDEFC"
          id="3"
          rating="9.5"
          image="https://res.cloudinary.com/dwwcryioj/image/upload/v1701932282/nh1v5johdkzqztv3xar0.webp"
          isDiff={true}
          
         /> */}
      <RenderCards data={currentPosts} />
       
     
      </div>
      
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={gamedata.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Games;
