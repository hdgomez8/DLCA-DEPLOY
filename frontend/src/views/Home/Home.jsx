import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { getDbProducts } from "../../../redux/actions/index";
// import ScrollToTop from "react-scroll-to-top";



function Home(props) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  const { Products } = useSelector((state) => state);

  // useEffect(() => {
  // dispatch(getDbProducts());
  // }, [dispatch]); 

  // if(!Products.length){
  //   return (
  //     <div className={styles.contenedorLoading}>
  //       <div className={styles.loading}>
  //         <img className={styles.imgload} alt="loading" src='https://i.ibb.co/ngZVjf8/loading.gif' />
  //       </div>
  //     </div>
  //   )
  // }
  // else{
  return (
    <div className={styles.homeContainer}>
    
      <div className={styles.cardsContainer}>
        {" "}
        <Cards
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // filter={{}}
        />{" "}
      </div>
      {/* <ScrollToTop
        smooth={true}
        color="white"
        className={styles.scrolltotop1}
        style={{
          backgroundColor: "#91C612",
          marginBottom: "30px",
        }}
      /> */}
    </div>
  )};
// }

export default Home;
