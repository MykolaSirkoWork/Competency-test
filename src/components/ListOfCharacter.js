import {useEffect, useState} from "react";
import $ from "jquery";
import './index.scss'


export const ListOfCharacter = (props) =>  {
    const [characters, setCharacters] = useState()
    const [filterParam, setFilterParam] = useState("All")
    const [searchParam] = useState([ "name"]);

    const responsive = {
        mobileVersion: props.windowWidth < 800
    }
    const blockSize = {
        maxWidth:   responsive.mobileVersion ? '100%': ' 24%'
    }


    useEffect(() => {
        $.get('https://rickandmortyapi.com/api/character', (data, status) => {

            setCharacters(data)
        })
    }, [])

    const search = (items) => {
        return items.filter((item) => {
            console.log(item.name, filterParam, 'filterParam')
            if (item.name === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                    );
                })
            } else if (filterParam === "All") {
                return  items
            }
        })
    }


    return(
        <>
            <select
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Region">
                <option value="All">Filter By Name</option>
                {characters && characters.results.map(({name}) =>
                    <option value={name}>{name}</option>
                )}
            </select>
        <div className='list-container'>
                {characters && search(characters.results).map((item)  =>
                    <div key={item.id} className='character-block' style={blockSize}>
                        <img className='character-avatar' src={item.image} alt={item.name}/>
                        <div> gender:  {item.gender}</div>
                        {item.name} </div>
                    )}
        </div>
        </>
    )
}