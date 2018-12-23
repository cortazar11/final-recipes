import React from 'react';
import {connect} from 'react-redux';
import {createRecipe} from '../../actions';
import Form from './RecipeForm';

class RecipeCreate extends React.Component {
    
    onSubmit=(formValues)=>{
        this.props.createRecipe(formValues);
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3 style={{display:'inline'}}>ADD A RECIPE</h3>
                </div>
                <Form onSubmit={this.onSubmit}/>
            </div>
        )
            
    }
    
}





export default connect(null,{
    createRecipe
})(RecipeCreate);