import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchRecipe,deleteRecipe} from '../../actions';
import _ from 'lodash';

class StreamShow extends React.Component {
   
    componentDidmount(){
       
        this.props.fetchRecipe(this.props.match.params.id)
        
    }


    render(){
        
        const id=this.props.match.params.id;
        if(!this.props.recipe){
            return <div>Loading...</div>
        }
        return (
            <div style={{marginLeft:'20px',fontSize: '20px'}}>
                <div>
                    <h2 style={{display:'inline-block',marginRight:10}}>{this.props.recipe.title}</h2>
                    <Link to={`/recipes/edit/${this.props.match.params.id}`}><button className="ui button">EDIT</button></Link>
                    <button onClick={()=>{
                        this.props.deleteRecipe(id)
                    }} className="ui red button">DELETE</button>
                </div>
                <h3>Ingredients:</h3>
                <div className="ui bulleted list">
                    {this.props.recipe.ingredients.map((ingredient,i)=>{
                            return <div key={i} className="item">{ingredient}</div>
                    })}
                </div>
                <h3>Directions:</h3>
                <div className="ui ordered list">
                    {this.props.recipe.directions.map((direction,i)=>{
                            return <div key={i} className="item">{direction}</div>
                    })}
                </div>
               
                
                
            </div>
        )
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    return {
        recipe: state.recipes[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    fetchRecipe,
    deleteRecipe
}) (StreamShow);