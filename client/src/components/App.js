import React from 'react';
import {Router, Route} from 'react-router-dom';
import StreamCreate from './recipes/RecipeCreate';
import StreamEdit from './recipes/RecipeEdit';
import StreamList from './recipes/RecipesList';
import StreamShow from './recipes/RecipeShow';
import Header from './Header';
import history from '../history';

// Client ID:
// 332861763601-nelas2se83a3bfjnul5dhg2i04ovuu5b.apps.googleusercontent.com

const App=()=>{
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/recipes/new" component={StreamCreate} />
                    <Route path="/recipes/edit/:id" component={StreamEdit} />
                    <Route path="/recipes/show/:id" component={StreamShow} />
                </div>
            </Router>
        </div>
    
    )
}

export default App;