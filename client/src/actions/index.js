import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './type';
import streams from '../apis/recipes';
import history from '../history';



export const fetchRecipes=()=> async dispatch =>{
    const response=await streams.get('/recipes')
    dispatch(
        {
            type: FETCH_STREAMS,
            payload: response.data
        }
    )
}

export const fetchRecipe=(id)=>async dispatch =>{
    const response= await streams.get(`/recipes/${id}`)
    dispatch(
        {
            type: FETCH_STREAM,
            payload: response.data
        }
    ) 
}

export const editRecipe=(id,formValues)=>async dispatch =>{
    
    const response= await streams.patch(`/recipes/${id}`,formValues)
    
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })

    history.push('/')
}

export const deleteRecipe=(id)=>async dispatch =>{
    await streams.delete(`/recipes/${id}`)

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })

    history.push('/')
   
}

export const createRecipe=(formValues)=>{
    const newValues={
        title: formValues.title,
        ingredients: formValues.ingredients.split('\n'),
        directions: formValues.directions.split('\n')
    }
    return async (dispatch)=>{
        const response= await streams.post('/recipes',newValues);
        
        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })

        history.push('/')
    }
}

/*
export const editRecipe=(id,formValues)=>async dispatch =>{
    const response= await streams.patch(`/recipes/${id}`,formValues)
    
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
}

export const createRecipe=(formValues)=>{
    console.log('form values: '+formValues.ingredients.split('\n'))
    return async (dispatch)=>{
        const response= await streams.post('/recipes',formValues);
        
        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })

        history.push('/')
    }
}

*/