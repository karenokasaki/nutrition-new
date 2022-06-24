import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={search} type="text" onChange={handleChange} />
        </>
    );
}

export default Search;