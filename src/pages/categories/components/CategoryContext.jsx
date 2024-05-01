import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext)

function CategoryProvider({ children }) {
    const [active, setActive] = useState(false)

    function addActive() {
        setActive(true)
    }

    function removeActive() {
        setActive(false)
    }

    return (
        <CategoryContext.Provider value={{ active, addActive, removeActive }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider