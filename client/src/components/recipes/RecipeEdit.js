import React from 'react';
import {connect} from 'react-redux';
import RecipeForm from './RecipeForm';
import {editRecipe} from '../../actions';
import _ from 'lodash';

class StreamEdit extends React.Component {

    onSubmit=(formValues)=>{
        this.props.editRecipe(this.props.match.params.id,formValues)
    }
    
    
    render(){
        console.log(this.props.recipe)
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3 style={{display:'inline'}}>EDIT RECIPE</h3>
                </div>
                <RecipeForm initialValues={_.pick(this.props.recipe,'title','ingredients','directions')} onSubmit={this.onSubmit}/>
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
    editRecipe
})(StreamEdit);