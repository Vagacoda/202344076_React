import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {Spinner, Table} from "react-bootstrap";
import SearchForm from "../common/SearchForm";

const PlacePage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [search] = useSearchParams();

    const size = 12;
    const query = search.get('query') || '인하공전'
    const page = parseInt(search.get('page')) || 1;

    const callAPI = async () => {
        setLoading(true);

        const url = 'https://dapi.kakao.com/v2/local/search/keyword.json';

        const config = {
            headers: {
                'Authorization': `KakaoAK ${process.env.REACT_APP_KAKAOAK}`
            },
            params: {size, query, page}
        }

        const res = await axios(url, config);
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
    }

    useEffect(() => {
        callAPI();
    }, [page, query])

    if (!response) return (
        <div className="text-center my-5">
            <Spinner
                variant="success"
                animation="border"
                role="status">
                <span className="visually-hidden">로딩중...</span>
            </Spinner>
        </div>
    );

    const {documents} = response;

    return (
        <div>
            <h1 className='text-center my-5'>장소검색</h1>

            <SearchForm query={query} />

            <Table hover striped bordered>
                <tbody>
                {documents.map(place =>
                    <tr key={place.id}>
                        <td>{place.id}</td>
                        <td>{place.place_name}</td>
                        <td>{place.address_name}</td>
                        <td>{place.phone}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default PlacePage