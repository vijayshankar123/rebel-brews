import React,{useEffect,useState} from 'react'
import axios from "axios"
import ReactLoading from 'react-loading';
import "./Home.css"
import SearchIcon from '@material-ui/icons/Search';
import DataItem from './DataItem';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

//home page
const Home = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const [imageData,setImageData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [search,setSearch] = useState(false)
    const [searchText,setSearchText] = useState("")
    const [itemsPerPage,setItemsPerPage] = useState(20)

    useEffect(()=>{
     const fetchApi=async()=>{
         let finalImageData=[]
         try {
         
          const data = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json") 
          const imageData = await axios.get("/images")        
           
           for(let i=0;i<data.data.length;i+=5){
               for(let j=0;j<imageData.data.length;j++){
                   finalImageData.push(imageData.data[j])
               }
           }
           setImageData(finalImageData)
            setData(data.data)
            setLoading(false)  
         } catch (err) {
             console.log(err)
         }
       
     }
  if(!search){
    fetchApi() //retreiving data from api
  } 
    },[search])
 
    const endingIndex = currentPage*itemsPerPage
    const startingIndex = endingIndex-itemsPerPage
    const itemsToDisplay = data.slice(startingIndex,endingIndex)

 const handleSearch = (e) =>{
     e.preventDefault()
     setCurrentPage(1)
     setLoading(true)
     setSearch(true)
     const result =data.filter(item=>item.name.toLowerCase()===searchText.toLowerCase()) 
     setData([...result])
    console.log(searchText)
    
    setSearchText("")
    setLoading(false)
 }
 const handleChange = (e) =>{
     setSearchText(e.target.value)
     
 }
 
    return (
        <div className="container_home">  
        {data&&
        <div className="search_wrapper">
            <div >
                <form className="search_inp" onSubmit={handleSearch}>
                <SearchIcon />
                 <input type="text" placeholder="Search..." value={searchText} onChange={handleChange}  />
                </form>
           
            </div>
           
        </div>
        }
        
             {loading?
            <div style={{height:"80vh"}} className="center">
            <ReactLoading type={"spin"} color={"green"} height={50} width={50} />
            </div>
            :
           
            <div style={{justifyContent:"center"}} className="row">
                 <div className="items_display text-muted">
                {data.length} {data.length<=1?"item":"items"} found
                {search&&
                   <div style={{ marginLeft: "48px" }}>
                   <Button style={{ color: "#f12222", borderRadius: "30px", fontSize: "11px" }} 
                   onClick={() => setSearch(false)} endIcon={<CloseIcon />} iconBefore={false} iconChildren={"close"} flat > Clear Search </Button>
                    </div>
                }    
                 </div>
                {data&&itemsToDisplay.map((item,index)=>
                   <DataItem key={item.id}  ind={index} imageData={imageData} item={item} />
                    )}
            </div> 
            }
            {data.length>0&&
             <Pagination style={styles.pagination_wrapper} count={Math.ceil(data.length/itemsPerPage)} onChange={(v,e)=> setCurrentPage(e)}/> 
            }
        </div>
    )
}

export default Home

const styles={
    pagination_wrapper:{
        display:"flex",
        justifyContent:"center"
    }
}