import '../App.css'
export default function Tags ({tagtitle }){

return (

    <div className='tag'>
 
 { 
    // Array.isArray(tagtitle)&&<button> {tagtitle.map((tag)=>tag)} </button>
 tagtitle.map((tag,index) => (<button className="Btntag"key={index}>{tag} </button> ) )
        
      
}



    </div>
)


}