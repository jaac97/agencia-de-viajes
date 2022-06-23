import {useState, useEffect} from 'react';

export function UseYear () {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/year')
        .then((res) => res.json())
        .then((data) => setData(data.year))
    }, []);
    return data;
}



