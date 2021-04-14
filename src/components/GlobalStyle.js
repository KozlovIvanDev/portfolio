import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // cursor: none;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
.button{
    font-weight: bold;
    font-size: 1.1.rem;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    border-radius: 3px;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 2.5rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    .last_par{
        margin-bottom: 2.5rem;
      }
      .cursor {
        position: fixed;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border: 2px solid #fefefe;
        border-radius: 100%;
        background-color: transparent;
        mix-blend-mode: difference;
        z-index: 999;
        pointer-events: none;
      }
      .clicked{
        transform: translate(-50%, -50%) scale(0.9);
        background-color: #fefefe;
      }
      .cursor--hidden {
        opacity: 0;
    }
    
    .cursor--link-hovered {
        transform: translate(-50%, -50%) scale(1.25);
        background-color: #fefefe;
    }
    
    .cursor--clicked {
        transform: translate(-50%, -50%) scale(0.9);
        background-color: #fefefe;
    }
    .question {
        margin-bottom: 1.5rem;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
    }
    .scrolled{
        transition: all .3s ease-in-out;
        background: #000000;
      }
`;

export default GlobalStyle;
