
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card/Card';
// import { collectNFT,hex2buf, transferNFT } from '../utils/operation';
import Categories from './Categories/Categories';
import Pagination from '../utils/Pagination.jsx';
import Card2 from './Card/Card2';
// import process from 'dotenv';

const FetchNFT = () => {
    const[Tokendata,setTokenData]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const dataJson2 = [{

      "header":'Valorant',
      "description":"Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. ",
      "id":"0.001",
      "holder":"0x037f92b675A8909f4f36317F31fd789ac0097E0af50C9df8D6080e7adeA4832C",
      "image":"https://res.cloudinary.com/dwwcryioj/image/upload/v1701932282/nh1v5johdkzqztv3xar0.webp",
      "isDiff":"false",
      "token_id":"1",
    }, {
    
      "header":'ECO',
      "description":"Eco is a simulation game created by American studio Strange Loop Games, in which players have to work together to create a civilization on a virtual planet. The game values a gentle use of natural resources and is used both as an entertainment and educational tool. ",
      "id":"0.001",
      "holder":"0x037f92b675A8909f4f36317F31fd789ac0097E0af50C9df8D6080e7adeA4832C",
      "image":"https://res.cloudinary.com/dwwcryioj/image/upload/v1701932282/lvvjumfgqzrj21wulop0.webp",
      "isDiff":"false",
      "token_id":"1"
    },
    {
    
      "header":'SILENT HILL 2',
      "description":"Silent Hill 2 is the second installment in the Silent Hill survival horror series and the first game of the series to be released for Sony PlayStation 2. The game was developed by Team Silent and published by Konami. It launched in North America on September 24, 2001. ",
      "id":"0.001",
      "holder":"0x037f92b675A8909f4f36317F31fd789ac0097E0af50C9df8D6080e7adeA4832C",
      "image":"https://res.cloudinary.com/dwwcryioj/image/upload/v1701932282/xl9xot5q6j4w7pjguebo.webp",
      "isDiff":"false",
      "token_id":"1"
    }
    ]

   console.log(Tokendata)


   // FETCH OWNED NFTs
    const walletAddr = "0x06f36e8a0fc06518125bbb1c63553e8a7d8597d437f9d56d891b8c7d3c977716"
    const response= axios.get(
      `https://starknet-goerli.g.alchemy.com/nft/v2/o7Q1nA6TXhKL52ugjoD-QNMlZV-GFaJt/getNFTs?owner=${walletAddr}&withMetadata=true&pageSize=100`
    );
   
   const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
        <Card2 
        key={key}
        header={post.name}
        description={post.description}
        id={post.amount}
        owner={post.holder}
        image2={post.image}
        isDiff={false}
        tokenId={post.token_id}
         />
        )
      )   
    } 
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Tokendata.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div >
      <h1 className='text-[#fff] text-[50px] font-montserrat ml-4'>Market Place</h1>
      <Categories />
      <div className='grid grid-cols-4 gap-5 width-[100vw] ml-5'>
      
      <RenderCards data={dataJson2} />
    </div>
    {/* <button onClick={onNFT} className=' '>Collect NFt</button>
    <button onClick={transferTest} className=' '>Transfer NFt</button>  */}
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Tokendata.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />

    </div>
    
    
  )
}

export default FetchNFT
