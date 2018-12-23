import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import recipesReducer from './recipesReducer';


export default combineReducers({
    form: formReducer,
    recipes: recipesReducer
});

