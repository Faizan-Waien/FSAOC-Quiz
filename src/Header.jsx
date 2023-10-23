import banner from "/src/assets/banner.jpg"

const Header = () => {
  return (
   <div style={{background:'white'}}>
    <img src={banner} alt="banner" style={{width:'100%'}}/>
   </div>
  )
}

export default Header