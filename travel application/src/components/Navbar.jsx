import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from "../assets/avatar.png"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "../firebase.config"
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(Avatar);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);

    console.log(response.user.photoURL)
    setAvatar(response.user.photoURL || Avatar);
    setUsername(response.user.displayName || '');

  };
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    setAvatar(Avatar);
    setUsername("");
  };
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">

            <img src={logo} alt="" />
            TravelPal
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>

        </ul>
        <div className="relative">
          <div className="avatar-container">
            <Dropdown show={showMenu} onToggle={handleMenuToggle}>
              <Dropdown.Toggle variant="transparent" id="dropdown-button">
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={avatar}
                  style={{
                    width: "40px", height: "40px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  alt="user"
                  crossOrigin="anonymous"
                  onClick={login}
                /></Dropdown.Toggle> <Dropdown.Menu className="dropdown-menu-end">{username && (
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>

          </li>
          <li>

          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;


// import React, { useState } from "react";
// import styled from "styled-components";
// import logo from "../assets/logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
// export default function Navbar() {
//   const [navbarState, setNavbarState] = useState(false);
//   return (
//     <>
//       <Nav>
//         <div className="brand">
//           <div className="container">
//             <img src={logo} alt="" />
//             Travelo
//           </div>
//           <div className="toggle">
//             {navbarState ? (
//               <VscChromeClose onClick={() => setNavbarState(false)} />
//             ) : (
//               <GiHamburgerMenu onClick={() => setNavbarState(true)} />
//             )}
//           </div>
//         </div>

//         <ul>
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#services">About</a>
//           </li>
//           <li>
//             <a href="#recommend">Places</a>
//           </li>
//           <li>
//             <a href="#testimonials">Testimonials</a>
//           </li>
//         </ul>
//         <button>Connect</button>
//       </Nav>
//       <ResponsiveNav state={navbarState}>
//         <ul>
//           <li>
//             <a href="#home" onClick={() => setNavbarState(false)}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#services" onClick={() => setNavbarState(false)}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#recommend" onClick={() => setNavbarState(false)}>
//               Places
//             </a>
//           </li>
//           <li>
//             <a href="#testimonials" onClick={() => setNavbarState(false)}>
//               Testimonials
//             </a>
//           </li>
//         </ul>
//       </ResponsiveNav>
//     </>
//   );
// }

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .brand {
//     .container {
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 0.4rem;
//       font-size: 1.2rem;
//       font-weight: 900;
//       text-transform: uppercase;
//     }
//     .toggle {
//       display: none;
//     }
//   }
//   ul {
//     display: flex;
//     gap: 1rem;
//     list-style-type: none;
//     li {
//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//         a {
//           color: #023e8a;
//           font-weight: 900;
//         }
//       }
//     }
//   }
//   button {
//     padding: 0.5rem 1rem;
//     cursor: pointer;
//     border-radius: 1rem;
//     border: none;
//     color: white;
//     background-color: #48cae4;
//     font-size: 1.1rem;
//     letter-spacing: 0.1rem;
//     text-transform: uppercase;
//     transition: 0.3s ease-in-out;
//     &:hover {
//       background-color: #023e8a;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     .brand {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: 100%;
//       .toggle {
//         display: block;
//       }
//     }
//     ul {
//       display: none;
//     }
//     button {
//       display: none;
//     }
//   }
// `;

// const ResponsiveNav = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 1;
//   top: ${({ state }) => (state ? "50px" : "-400px")};
//   background-color: white;
//   height: 30vh;
//   width: 100%;
//   align-items: center;
//   transition: 0.3s ease-in-out;
//   ul {
//     list-style-type: none;
//     width: 100%;
//     li {
//       width: 100%;
//       margin: 1rem 0;
//       margin-left: 2rem;

//       a {
//         text-decoration: none;
//         color: #0077b6;
//         font-size: 1.2rem;
//         transition: 0.1s ease-in-out;
//         &:hover {
//           color: #023e8a;
//         }
//       }
//       &:first-of-type {
//         a {
//           color: #023e8a;
//           font-weight: 900;
//         }
//       }
//     }
//   }
// `;
