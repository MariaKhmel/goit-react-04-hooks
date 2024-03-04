import { useState } from "react"

export function LoadMorePage (){

const [page, setPage] = useState(1);
const [query, setQuery] = useState('');
const [items, setItems] = useState([])

const handleSubmit = (e)=>{
e.preventDefault();
setPage(1);
setQuery(e.target.query.value)
setItems([]);
e.target.reset();
}

const loadMore = () =>{
    setPage(prevState => prevState + 1);
}
return(
<div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="query"/>
        <button type="submit">Submit</button>
    </form>

    <button type="submit" onClick={loadMore}> Load More</button>
</div>
)

}