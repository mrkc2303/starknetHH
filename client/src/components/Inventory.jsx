import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FetchNFT from './fetchNFT'
import Categories from './Categories/Categories';
import Card2 from './Card/Card2';
// import { collectNFT,hex2buf, transferNFT } from '../utils/operation';
import Pagination from '../utils/Pagination.jsx';

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

const Inventory = () => {
  const[Tokendata,setTokenData]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(()=>{
       
    const fetchData = async () => {
      
      try {
        // const walletAddr = "0x037f92b675A8909f4f36317F31fd789ac0097E0af50C9df8D6080e7adeA4832C";
        const walletAddr = "0x06f36e8a0fc06518125bbb1c63553e8a7d8597d437f9d56d891b8c7d3c977716"
        const response= await axios.get(
          `https://starknet-goerli.g.alchemy.com/nft/v2/o7Q1nA6TXhKL52ugjoD-QNMlZV-GFaJt/getNFTs?owner=${walletAddr}&withMetadata=true&pageSize=100`
        );
        console.log(response);
        // const response= await axios.get(
        //   `https://api.ghostnet.tzkt.io/v1/contracts/KT1RyU6sq5uPLeg5HqpQjccL6czVux8q1T7e/bigmaps/data/keys`
        // );
        // const response1  = await axios.get(
        //   `https://api.ghostnet.tzkt.io/v1/contracts/KT1JexJ1zkHhEhP7EXojJphAuVQ4sUgMCiyY/bigmaps/token_metadata/keys`
        // );
        // // const response2=await axios.get('https://api.tzkt.io/v1/tokens/balances?account=tz1eUd9joGEHLevziAZmPKB2upkjK1QJKbUg');
        // const d1 = response.data;
        // const d2 = response1.data;
        // // const d3=response2.data;
        // // console.log(d3)
        // console.log(d1)
        // console.log(d2)

    
        // let tokenData = [];
        // for (let i = 0; i < d1.length; i++) {
          
        //   if((d2[i].value.token_info)!='' || (d2[i].value.token_info)===undefined ){
        //     // console.log(d2[i].value.token_info[""])
            
           
        //     const s = hex2buf(d2[i].value.token_info[""]).split("//").at(-1).replace('"','');
        //     console.log(s)
            
        //     const res = await axios.get("https://ipfs.io/ipfs/" + s);
        //     let l1;
        //     const address=await getAccount();
        //      if(d1[i].value.holder===address || d1[i].value.author===address){
        //       l1= d1[i].value;
        //       const l2 = res.data;
            
        //     tokenData.push({
        //     ...l1,
        //     ...l2,
        //      token_id: d2[i].value.token_id,
        //   });

        //      }
        //      console.log(l1)
              
         
             
        //   // console.log(tokenData)
        //   }   
        // }
        // // console.log(tokenData)
        // console.log(tokenData)
        // setTokenData(tokenData)

        
        // return tokenData;
          
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    // FETCH TOKEN
    // console.log(tokenFetch())
  },[])
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
    <h1 className='text-[#fff] text-[50px] ml-4 font-montserrat'>Inventory</h1>
    <Categories />
    <div className='grid grid-cols-4 gap-5 width-[100vw] '>
      
      <RenderCards data={dataJson2} />
    </div>
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

export default Inventory
