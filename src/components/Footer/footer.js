import { MDBFooter } from 'mdb-react-ui-kit'


const Footer = () => {
  return(
  <MDBFooter backgroundColor='light' style={{position:'fixed', bottom:'0px', width:'100%', index:'-999'}} className='text-center text-lg-left'>
    <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 1)', color:'white' }}>
      <img width="40px" height="40px" src="https://www.rburgues.com/assets/img/logo.png" alt="RBurgues logo"></img>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a href="https://www.rburgues.com" target="_blank">Richard Burgues</a>
     
    </div>
    
  </MDBFooter>)
    

}


export default Footer;