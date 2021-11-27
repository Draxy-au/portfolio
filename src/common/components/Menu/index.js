import Link from "next/link";

const Menu = ({setToggleMenu}) => (
  <>
    <p><Link href='#projects'><a onClick={()=>setToggleMenu(false)}>Project</a></Link></p>
    <p><Link href='#contact'><a onClick={()=>setToggleMenu(false)}>Contact</a></Link></p>
  </>
)

export default Menu;