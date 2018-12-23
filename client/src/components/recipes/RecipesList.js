import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchRecipes} from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchRecipes();
    }

    
    render(){
        
        return (
            <div className="ui list">
                {this.props.recipes.map((recipe)=>{
                    return (
                        <div className="item" key={recipe.id} style={{height:'40px',marginLeft:'20px'}}>
                            <Link to={`/recipes/show/${recipe.id}`} style={{color:'black',fontSize:'18px'}}>{recipe.title}</Link>       
                            
                        </div>
                        
                )

                })}

                <div style={{background:'olive',marginTop:'50px'}}>
                    <Link to="/recipes/new"><button className="ui brown button">ADD RECIPE</button></Link>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps=(state)=>{
        return {
            recipes: Object.values(state.recipes)
        }
}

export default connect(mapStateToProps,{
    fetchRecipes
})(StreamList);