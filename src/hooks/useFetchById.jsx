import React, { useEffect, useState } from 'react'


function useFetchById(url, id) {

    const [entity, setEntity] = useState(null);

    useEffect(() => {
        const fetchEntity = async () => {
            let data = [];
            try {
                const res = await fetch(url + id);
                data = await res.json();
            } catch (error) {
                console.error(error);
            };
            setEntity(data.results[0]);
        }
        fetchEntity();
    }, [id])

  return {
    entity
  }
}

export default useFetchById