import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
           <Link to='/'><h3>Sauces</h3></Link>
           {props.sauces.map((sauce) => {
               return <Link key={sauce.id} to={`/sauces/${sauce.id}`}>{sauce.name}</Link>
           })}
        </div>
    );
}

export default Header;