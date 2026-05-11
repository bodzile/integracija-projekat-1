

export function validateProduct({title, category, description, price, rating}){

    if(title === "" || category === "" || description === "")
        return {isError: true, message: "Please enter all fields"};

    if(price <=0)
        return {isError: true, message: "Price must be greater than zero"};

    if(rating < 1 || rating > 5)
        return {isError: true, message: "Rating must be 1 to 5"};

    return {isError: false, message: "Successfully validated"};
}