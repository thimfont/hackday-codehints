import { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            result: ''
        }
        this.searchResult = this.searchResult.bind(this);
    }

    searchResult(text) {
        const data = text.target.value;
        const result = this.props.codeCollection.filter(code => {
            return code.name.indexOf(data) >= 0;
        })


        const codes = [];
        result.forEach(code => {
            codes.push(`${code.name}, `)
        })
        this.setState({ result: codes })
    }

    render() {

        return (
            <>
                <h2>Search</h2>
                <TextField
                    label="Search code"
                    variant="outlined"
                    margin="normal"
                    size="medium"
                    fullWidth
                    onChange={this.searchResult} />

                <h2>Result</h2>
                {this.state.result}
            </>
        )
    }
}

export default SearchBar