// export default function Post ({ image,titre }){
//     return (
//         <div>
//             <img src={image} alt='logo'/>
//             <h2>{titre} </h2>
//         </div>
//     )
// }
export default function Post ( {children}){
    return(<div> {children}</div>)
}