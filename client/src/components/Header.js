import React from 'react';
import {Link} from 'react-router-dom';


const Header=()=>{
    return(
        <div style={{justifyContent:'center',background:'#503BB0'}} className="ui secondary pointing menu">
                <Link to="/"><h1 style={{marginTop: '30px',marginBottom:'30px',color:'#B6E1E7'}}>RECIPE BOX</h1></Link>
        </div>
    );
};

export default Header;