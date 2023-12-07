
export const fetchData=async ()=>{
   
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      let response=await fetch(`http://localhost:8080/getGames?token=a6zm2r07nh5e97j6995jes06mzuz8s`, requestOptions)
     
        const result=await response.json();
        // console.log(result)
        return result;
     
    
}