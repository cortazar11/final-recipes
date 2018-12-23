import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


class Form extends React.Component {
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div>{error}</div>
                </div>
            )
        }
    }

    

    renderInput=({input,label,meta})=>{
       
        return (
            <div style={{marginTop:'25px'}}>
                <label style={{fontSize:'20px'}}>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
            
        )
    }

    renderTextarea=({input,label,meta})=>{
        
        return (
            <div style={{marginTop:'25px'}}>
                <label style={{fontSize:'20px'}}>{label}</label>
                <textarea {...input} />
                {this.renderError(meta)}
            </div>
            
        )
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }

    render(){
        
        return (
            <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" className="field" component={this.renderInput} label="Title"/>
                <Field name="ingredients" className="field" component={this.renderTextarea} label="Ingredients"/>
                <Field name="directions" className="field" component={this.renderTextarea} label="Directions" />
                
                <button className="ui primary button">ADD</button>
                <Link to="/"><button className="ui button">CANCEL</button></Link>
            </form>
        )
    }
    
}

const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title="You must enter title"
    }
    if(!formValues.ingredients){
        errors.ingredients="You must enter ingredients"
    }
    if(!formValues.directions){
        errors.directions="You must enter directions"
    }

    return errors;
}

export default reduxForm({
    form: 'FormCreate',
    validate
})(Form); 

