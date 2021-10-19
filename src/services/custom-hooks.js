import { useEffect, useState } from 'react'

// A HOOK TO CHECK IF AN ENTITY EXIST IN ARRAY OF OBJECTS
// GET THE ITEM AND THE ARRAY, RETURNS A BOOLEAN ANSWER
export const useCheckInArr = (entity, arr) => {

    const [isInArr, setIsFav] = useState(false)

    const checkArr = (id) => {
        setIsFav(arr.some(entity => entity._id === id))
    }
// CHECK EVREY TIME THE ARRAY OR ENTITY CHANGE
    useEffect(() => {
        checkArr(entity._id)
    }, [entity, arr])

    return isInArr
}