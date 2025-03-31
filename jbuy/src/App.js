// App.js

import React from 'react' ;
import './Registration.js';
import './css/style-starter.css' ;


function App() {
  return (
    <div className="App">
      <div class="container">      
                <div id="search" class="pop-overlay">
                    <div class="popup">
                        <h3>Find Your Property
                        </h3>
                        <form action="#" method="post" >
                            <div class="search-here book-form">
                                <div class="form-right-to-w3ls">
                                <select class="form-control country-buttom" required="">
                                   <option value="">
                                    Choose Location
                                   </option>
                                   <option value="category2">Xtreme 200R</option>
                                   <option value="category1">Tornado400</option>
                                   <option value="category3">Royal Gt 650</option>
                                   <option value="category3">Tvs Dazz</option>
                                   <option value="category3">Dominator</option>
                                   <option value="category3">Benelli 400</option>
                                   <option value="category3">SuZuki Burgman</option>
                                </select>
                             </div>
                             <div class="form-right-to-w3ls">
                                <select class="form-control country-buttom" required="">
                                   <option value="">
                                     Property type
                                   </option>
                                   <option value="category2">House</option>
                                   <option value="category1">Lot</option>
                                   <option value="category3">Apartment</option>
                                </select>
                             </div>
                             <div class="form-right-to-w3ls">
                                <select class="form-control country-buttom" required="">
                                   <option value="">
                                      Min Beds
                                   </option>
                                   <option value="category2">2</option>
                                   <option value="category1">3</option>
                                   <option value="category3">4</option>
                                   <option value="category3">5</option>
                                   <option value="category3">6</option>
                                   <option value="category3">7</option>
                                </select>
                             </div>
                             <div class="form-right-to-w3ls">
                                <select class="form-control country-buttom" required="">
                                   <option value="">
                                     Min Baths
                                   </option>
                                   <option value="category2">2</option>
                                   <option value="category1">3</option>
                                   <option value="category3">4</option>
                                   <option value="category3">5</option>
                                   <option value="category3">6</option>
                                   <option value="category3">7</option>
                                </select>
                             </div>
                            </div>
                            <div class="search-below book-form">
                                <div class="form-right-to-w3ls">
                                    <select class="form-control country-buttom" required="">
                                       <option value="">
                                          Min Price
                                       </option>
                                       <option value="category2">200 $</option>
                                       <option value="category1">300 $</option>
                                       <option value="category3">400 $</option>
                                       <option value="category3">500 $</option>
                                       <option value="category3">600 $</option>
                                       <option value="category3">700 $</option>
                                    </select>
                                 </div>
                                 <div class="form-right-to-w3ls">
                                    <select class="form-control country-buttom" required="">
                                       <option value="">
                                         Max Price
                                       </option>
                                       <option value="category2">2000 $</option>
                                       <option value="category1">3000 $</option>
                                       <option value="category3">4000 $</option>
                                       <option value="category3">5000 $</option>
                                       <option value="category3">6000 $</option>
                                       <option value="category3">7000 $</option>
                                    </select>
                                 </div>
                                 <div class="form-right-to-w3ls">
                                    <select class="form-control country-buttom" required="">
                                       <option value="">
                                        Min Area
                                       </option>
                                       <option value="category2">20 Sq Ft</option>
                                       <option value="category1">30 Sq Ft</option>
                                       <option value="category3">40 Sq Ft</option>
                                       <option value="category3">50 Sq Ft</option>
                                       <option value="category3">60 Sq Ft</option>
                                       <option value="category3">70 Sq Ft</option>
                                    </select>
                                 </div>
                                 <div class="form-right-to-w3ls">
                                    <select class="form-control country-buttom" required="">
                                       <option value="">
                                         Max Area
                                       </option>
                                       <option value="category2">200 Sq Ft</option>
                                       <option value="category1">300 Sq Ft</option>
                                       <option value="category3">400 Sq Ft</option>
                                       <option value="category3">500 Sq Ft</option>
                                       <option value="category3">600 Sq Ft</option>
                                       <option value="category3">700 Sq Ft</option>
                                    </select>
                                 </div>
                            <div class="search-container txt-center">
                                <input type="submit" value="Search" />
                             </div>
                            </div>
                            <a class="close" href="#">×</a>
                         </form>
                    </div>
                </div>
                
            </div>
       
    
    <section class=" w3l-header-4 header-sticky">
        <header class="absolute-top">
            <div class="container">
                <div class="nav-three-columns">
                <nav class="nav-logo">
                    <h1><a class="navbar-brand " href="index.html">
                       JoBuy
                    </a></h1>
            </nav>
            
            <div class="nav-mid navbar-mid">
                <ul>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="R&L.js">Login</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="R&L.js">SignUp</a>
                    </li>
                </ul>
            </div>
             
             <div class="fullwidth-overlay-menu">
                <input type="checkbox" id="view"></input>
                <div class="top-menu4-icon">
                    <label for="view" class="topmenu4-expand">    
                            <div class="hamburger2">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div></label>
                </div>
                <div class="expanded-menu expanded-menu-effect">
                    <label for="view" class="close" title="Close">&times;</label>
                    <nav class="menu-side-over-left">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact</a> </li>
                            <li><a href="R&L.js">Login</a></li>
                            <li><a href="R&L.js">SignUp</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
           
        </div>
            </div>
        </header>
    </section>
    
    <script src="js/jquery-3.3.1.min.js"></script>
   
    <script src="js/bootstrap.min.js"></script>
    
    
    <section class="w3l-hero-headers-9">
      <div class="slide header11" data-selector="header11">
        <div class="container">
            <div class="banner-text ">
              <span class="fa fa-map-signs" aria-hidden="true"></span>
            
              <ul class="banner-para"><li><span class="fa fa-share-square-o"></span> <h4>Total Customers</h4></li><li><span class="fa fa-home"></span> <h4>Total Services</h4></li></ul>
              <a href="contact.html" class="btn logo-button top-margin">You Need to Work Here</a>
            </div>
          </div>
          
    </div>
      </section>
     
    <section class="w3l-teams-15">
    
      <div class="team-single-main ">
        <div class="container">
          <div class=" grid grid-column-2 row">
            <div class="column1 image-back col-lg-6 header11" data-selector="header11">
              <img src="assets/images/4.jpg" alt="" class="img-responsive"/>
            </div>
            <div class="column2 image-text col-lg-6">
              <h3 class="team-head ">Search Property From Any where</h3>
              <p class="para  text ">
                Mollitia placeat modi explicabo voluptatum corporis unde Dicta, provident!
                Rem adipisci Mollitia placeat modi explicabo voluptatum corporis unde? Dicta, provident!
                Rem adipisci consectetur adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
                mollitia, maiores fugiat tempor Vero est.</p>
                <a href="about.html" class="action-button btn mt-4">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w3l-call-to-action_9">
        <div class="call-w3 ">
            <div class="container-fluid">
                <div class="grids">
                        <div class="grids-content row text-center">
                            <div class="column col-lg-3 col-md-6 col-sm-6 back-image  p-0">
                    
                            </div>
                            <div class="column col-lg-3 col-md-6 col-sm-6 back-gap  ">
                                <div class=" back-center">
                                <span class="fa fa-home"></span>
                                <h4><a href="about.html"  class=" ">General <br />Contracting</a></h4>
                            </div>
                            </div>
                            <div class="column col-lg-3 col-md-6 col-sm-6 back-image2 ">
           
                              </div>
                            <div class="column col-lg-3 col-md-6 col-sm-6 color-2 ">
                                
                                <span class="fa fa-users"></span>
                                <h4><a href="about.html" class=" ">Best Team</a></h4>
                                <p class="para ">Assumenda temporibus quidem ipsam. Voluptate fuga corporis iusto similique voluptates sint quibusdam.</p>
                            </div>
    
                                <div class="column display-column col-lg-6 col-md-6 col-sm-6">
                                    <div class="column-five ">
                                    <h3><a href="about.html" class=" ">Full project
                                        management</a></h3>
                                    <p class="para ">Assu menda tempo ribus quidem ipsam. Voluptate fuga corporis iusto simi lique volup tates sint quib usdam assu menda temp oribus quidem ipsam. Voluptate fuga corporis iusto similique.</p>
                                    <a href="about.html" class="action-button btn mt-4">Read more</a>
                                </div>
    
                                </div>
                                <div class="column col-lg-6 col-md-6 col-sm-6 back-three  p-0">
    
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    <section class="w3l-specification-6">
        <div class="specification-layout ">
            <div class="container-fluid">
                <div class=" row">
                    <div class="col-lg-6 back-image">
                    
                    </div>
                    <div class="col-lg-6 specification-color  ">
                        <div class="row">
                            <div class="grids-effect-2 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="back-color ">
                                    <h4><a href="about.html" class="title-head  ">Efficient
                                            Building</a></h4>
                                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempo recons
                                        ectetur elit.optio illum officiis itaque
                                        soluta impedit</p>
                                </div>
                            </div>
                            <div class="grids-effect-2 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="back-color ">
                                    <h4><a href="about.html" class="title-head ">Financial Results</a></h4>
                                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempor econs
                                        ectetur elit.optio illum officiis itaque
                                        soluta impedit </p>
                                </div>
                            </div>
                            <div class=" grids-effect-2 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="back-color ">
                                    <h4><a href="about.html" class="title-head ">General Contracting</a></h4>
                                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempo recons
                                        ectetur elit.optio illum officiis itaque
                                        soluta impedit </p>
                                </div>
                            </div>
                            <div class="grids-effect-2 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="back-color ">
                                    <h4><a href="about.html" class="title-head">Interior Design</a></h4>
                                    <p class="para">Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur
                                        elit.optio illum officiis itaque
                                        soluta impedit </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="w3l-covers-18">
            <div class="covers-main ">
                <div class="container">
                    <div class="main-titles-head text-center">
                        <h3 class="header-name ">
                            Most Popular Places
                        </h3>
                        <p class="tiltle-para  ">Properties In Most Popular Places</p>
                    </div>
                    <div class="row">
        
                        <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/6.jpg" alt="" class="img-responsive"/>
                           <div class="box">
                             <div class="box-content">
                               <div class="box-text">
                                 <h2> Australia</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
    
                               </div>
                             </div>
                           
                           </div>
                         </div>
                       </div>
                      
                        <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/7.jpg" alt="" class="img-responsive"/>
                             <div class="box-content">
                               <div class="box-text">
                                 <h2>Haiti</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
                               </div>
                             </div>
                          
                           </div>
                         </div>
                       </div>
                     
                        <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/8.jpg" alt="" class="img-responsive"/> 
                           <div class="box">
                             <div class="box-content">
                               <div class="box-text">
                                 <h2> Guinea</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
                               </div>
                             </div>
                           
                           </div>
                         </div>
                       </div>
                    
                           <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/9.jpg" alt="" class="img-responsive"/> 
                           <div class="box">
                             <div class="box-content">
                               <div class="box-text">
                                 <h2>Qatar</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
                               </div>
                             </div>
                           
                           </div>
                         </div>
                       </div>
                     
                        <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/10.jpg" alt="" class="img-responsive"/>  
                           <div class="box">
                             <div class="box-content">
                               <div class="box-text">
                                 <h2>Romania</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
                               </div>
                             </div>
                           
                           </div>
                         </div>
                       </div>
                     
                        <div class="col-md-4 col-sm-6">
                         <div class="single-project">
                            <img src="assets/images/11.jpg" alt="" class="img-responsive"/>
                         
                           <div class="box">
                             <div class="box-content">
                               <div class="box-text">
                                 <h2>Jamaica</h2>
                                 <p>Duis aute irure dolor in repreh enderit in voluptate</p>
                               </div>
                             </div>
                           
                           </div>
                         </div>
                       </div>
                    
                     </div>
                  
                   </div>            
      </section>
      <section class="w3l-clients" id="clients">
        <div class="main-w3 ">
            <div class="container">
               
                <div class="row">
                     <div class="col-lg-4 col-md-6  col-sm-6 hh14-text  margin-bottom">
                        <div class="client-color  ">
                            <p class="para ">Consectetur adipis icing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt adipis icing Lorem ipsum.</p>
                        </div>
                        <div class="client-name hh14-info">
                            <img src="assets/images/c1.jpg" alt="product" class="img-responsive "/>
                            <div>
                                <h4 class=" ">Jack Willson</h4>
                                <h6>Rented Apartment</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 hh14-text  margin-bottom">
                        <div class=" client-color ">
                            <p class="para  ">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt adipi sicing Lorem ipsum.</p>
                        </div>
                        <div class="client-name hh14-info">
                            <img src="assets/images/c2.jpg" alt="product" class="img-responsive "/>
                            <div>
                                <h4 class="">Lily maxson</h4>
                                <h6> Bought House</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 hh14-text ">
                        <div class="client-color ">
                            <p class="para ">Consectetur adipisicing Lorem ipsum dolor sit amet,elit, sed do
                                eiusmod tempor incididunt adipis icing Lorem ipsum.</p>
                        </div>
                        <div class="client-name hh14-info">
                            <img src="assets/images/c3.jpg" alt="product" class="img-responsive "/>
                            <div>
                                <h4 class=" ">Nike samson</h4>
                                <h6> Sold Apartment</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="w3l-footers-20">
      <div class="footers20 ">
        <div class="container">
              <div class="sub-columns row">
                <div class="sub-one-left sub-two-right col-lg-5 col-md-5">
                  <h2 ><a href="index.html" class="">Dweller</a></h2>
                  
                  <p>Adipisicing elit. Lauda ntium, archi tecto iure Lorem incidunt iosam qui quo moll itia veniam recus andae archi tecto earum suscipit exce pturi dicta nemo quam.</p>
    
                </div>
                <div class="sub-two-right col-lg-3 col-md-3 col-sm-6">
                  <h6 class="">Helpful links</h6>
                  <div class="footer-footer-ul">
                  <ul>
                      <li class=""><a href="index.html" class=""><span class="fa fa-angle-right" aria-hidden="true"></span>Home</a></li>
                      <li class=""><a href="about.html" class=""><span class="fa fa-angle-right" aria-hidden="true"></span>About</a></li>
                      <li class=""><a href="contact.html" class=""><span class="fa fa-angle-right" aria-hidden="true"></span> Contact</a></li>
                  </ul>
                   </div>
                </div>
                <div class="sub-two-right col-lg-4 col-md-4 col-sm-6">
                  <h6 class="">Contact Us</h6>
                  <div class="column2">
                    <div class="href1"><span>E-mail:</span><a href="mailto:mail@company.com">mail@company.com</a>
                    </div>
                    <div class="href2"><span>Phone:</span><a href="tel:+(12)-00 222 00008">+(12)-00 222 00008</a>
                    </div>
                    <div>
                      <p class="contact-para">California, 75 West Rock,
                        Maple Building.</p>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div class="below-section">
        <div class="container">
          <div class="columns copy-right text-center ">
            <p>© 2020 Dweller All rights reserved | Design by
                <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
          </div>
        </div>
      </div>
      </div>
    
    </section>
    
    
    <button onclick="topFunction()" id="movetop" title="Go to top">
      <span class="fa fa-long-arrow-up"></span>
    </button>
    
    </div>
  );
}

export default App;
