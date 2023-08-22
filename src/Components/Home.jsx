import { useState } from "react";
import style from "../home.module.css";

function Header() {

  const [status,setStatus] = useState(false);  // 1st param: function to run, 2nd param: array of dependencies
  

  return (
    <>
      {/* <header>
        <div className={style.Header1}>
          <h3>Welcome to the reservation</h3>
        </div>
      </header> */}
     
     <br></br>
     <div className={style.sub}>
      <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quidem quas ea, vitae eveniet temporibus praesentium reiciendis maiores corporis odio consequuntur explicabo eius enim quisquam similique sit ipsam labore amet.</marquee>
     </div>
     <br></br>
     <span className={style["first"]}>
      <img src="https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="random" />
      <span className={style["second"]}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque voluptatibus accusamus cupiditate. Numquam quam quia ipsum alias in repellat debitis dignissimos, voluptatibus placeat maxime iste ex et velit similique!</p>
      
        <button onClick={() => setStatus(!status)}>Click me</button>
      </span>
      </span>
      <br></br>
      <br></br>
      <span className={style["third"]}>
        <img src="https://c8.alamy.com/zoomsfr/9/c9fbeb9278e5408e9600ef230baf2eca/pnftm0.jpg" alt="kk"/>
        <span className={style["fourth"]}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iusto eligendi deserunt repudiandae magnam reiciendis vero velit alias perspiciatis consectetur odio minus perferendis magni autem nam, recusandae, inventore cumque iste.</p>
          <button onClick={() => setStatus(!status)}>Click me</button>

        </span>
      </span>      
    </>
  )
}
export default Header;
