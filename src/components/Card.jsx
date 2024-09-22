const Card = ({title, link, image}) => {
  return (
    <div className='col d-flex flex-column justify-content-center align-items-center text-center mt-5 border p-5 bg-light' style={{width:"30px", borderRadius:"2.5em", boxShadow:"0px 10px 30px -7px rgba(0,0,0,0.63)"}}>

        <img src={image} alt="" style={{ width: "200px", height: "auto" }} />

        <p className="alegreya-sc-regular" style={{fontSize:"2.2em"}}>
            {title}
        </p>

        <a href={link} className="btn btn-secondary alegreya-sc-regular" style={{fontSize:"1.3em", padding: "0.25em 0.em", width:"10em"}}> <span className="alegreya-sc-regular" style={{fontSize:"1em",}}>VIEW</span></a>



    </div>
  )
}

export default Card