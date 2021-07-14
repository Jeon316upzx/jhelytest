import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import HomeLayout from '../layouts/home_layout'
import Link from 'next/link'
import { useState } from 'react'





const Home = () => {

  const [status, setStatus] = useState(false)
  
  return (
    <HomeLayout>
      <div className="content">
        <div className="home">
          <div className="left">
            <div className="mission__statement">  Discover  the home of your dreams in <br /> <span className="bolivia">Bolivia </span></div>
            <div>

              <div className="search__container">
                <div className="find">
                  <Link href="/dashboard/search">Find a home</Link>
                </div>
                <input type="text" name="search" className="search form-control"/>
              </div>
              
            </div>


          </div>

          <div className="right">
            <div className="image1">
            </div>
            <div className="image2">
            </div>

          </div>
        </div>



        <div>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center py-4 px-5">
              <h3 className="font-weight-bold"> Top Locations </h3>
              <h6 className="font-weight-bold" onClick={()=> setStatus(!status)}> see more </h6>
            </div>
          </div>


          <div className="top__locations">
            <div className="location">
              <Image src="/../public/assets/h1.jpg" width={250} height={300} className="location" />
              <div className="name"> Tarija </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/h2.jpg" width={250} height={300} className="location" />
              <div className="name"> Pando </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/h3.jpg" width={250} height={300} className="location" />
              <div className="name"> Beni </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/right.jpg" width={250} height={300} className="location" />
              <div className="name"> Potosi </div>
            </div>


          </div>

         { status ?  
          
          <div className="top__locations">
            <div className="location">
              <Image src="/../public/assets/h1.jpg" width={250} height={300} className="location" />
              <div className="name"> Santa cruz </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/h2.jpg" width={250} height={300} className="location" />
              <div className="name"> Oruro </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/h3.jpg" width={250} height={300} className="location" />
              <div className="name"> La Paz </div>
            </div>

            <div className="location">
              <Image src="/../public/assets/right.jpg" width={250} height={300} className="location" />
              <div className="name"> Cochabamba </div>
            </div>
          </div>
         
         : null }
          


        </div>



        <div>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center py-4 px-5">
              <h3 className="font-weight-bold"> Top Agents </h3>
              <h6 className="font-weight-bold see-more"> <Link href="/agents"> see more </Link> </h6>
            </div>
          </div>
          <div className="top__agents">
            <div className="agent shadow-sm first-agent">
              <div className="profile">
                <div className="status_ball">

                </div>
              </div>

              <div className="agent__information">
                <h6> Indigo Housing </h6>
              </div>

              <div className="apartments d-flex flex-row">
                 <div>
                     <span className="total_apartments">45</span> apartment(s)
                 </div>
              </div>
            </div>

            <div className="agent third-agent">
              <div className="profile">
                <div className="status_ball">

                </div>
              </div>

              <div className="agent__information">
                <h6> Indigo Housing </h6>
              </div>

              <div className="apartments d-flex flex-row">
                 <div>
                     <span className="total_apartments">18</span> apartment(s)
                 </div>
              </div>
            </div>


            <div className="agent first-agent">
              <div className="profile">
                <div className="status_ball">

                </div>
              </div>

              <div className="agent__information">
                <h6> Daniels </h6>
              </div>

              <div className="apartments d-flex flex-row">
                 <div>
                     <span className="total_apartments">10</span> apartment(s)
                 </div>
              </div>
            </div>

            <div className="agent third-agent">
              <div className="profile">
                <div className="status_ball">

                </div>
              </div>

              <div className="agent__information">
                <h6> Rodri </h6>
              </div>

              <div className="apartments d-flex flex-row">
                 <div>
                     <span className="total_apartments">3</span> apartment(s)
                 </div>
              </div>
            </div>



          </div>


          {/* <div className="d-flex justify-content-center py-4">
          <h3 className="font-weight-bold"> More agents </h3>
        </div> */}
        </div>



        <div className="container become__agent">
          <div className="yello_bg">
            
            <div className="yello_bg_content">
              Not found what you are looking for ?<br />
            </div>
            
            


            <div className="get__started">
              <span> Reach out to Us  </span>
            </div>
          </div>
        </div>




      </div>
    </HomeLayout>

  )
}

export default Home;



