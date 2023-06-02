import React from 'react';
import axios from 'axios';

const URL = "http://localhost:8888/wp-json/wp/v2/posts"
const Home = () => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get((URL)).then((res) => setData(res.data))
    }, [])
    return (<>
    <h1> Peykhang</h1>
    {data.map((item: any) => <p key={item.id}> {item.title.rendered}</p>)}
    </>)
}

export default Home;