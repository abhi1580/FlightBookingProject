

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import FlightGallary from './FlightGallary'


const FlightRouter=()=>{

    return(
        <BrowserRouter>
              <Routes>
                  {/* <Route path='/'element={<ShopNavBar/>} > */}
                  
                  <Route path='Gallary' elememt={<FlightGallary/>} />
                 
                  
                  {/* <Route path='*' element={<PageNotFound/> } /> */}
                {/* </Route> */}
              </Routes>
        </BrowserRouter>
    )

}
export default FlightRouter