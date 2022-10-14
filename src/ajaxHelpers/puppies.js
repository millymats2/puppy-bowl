export const fetchPuppies = async () => {
    const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players`
    );
    const result = await response.json();
    return result;
};

export const fetchPuppyById = async (id) => {
    const response = await feth (
        `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}`
    );
    const result = await response.json();
    return result;
};

//export const createPuppy = async ()

export const deletePuppyById = async (id) => {
    const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}`
        {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        const result = await response.json();
        return result;
    };
}