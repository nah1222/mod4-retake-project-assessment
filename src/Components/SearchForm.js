import React from 'react';

class SearchForm extends React.Component{
    render(){
        // console.log(this.props.searchValue)
        return(
            <form>
                <input type="text" value={this.props.searchValue} onChange={this.props.changeHandler} />
            </form>
        )
    }
}
export default SearchForm;