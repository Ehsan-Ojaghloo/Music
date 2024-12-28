import React, { useState } from 'react'
import "./CatagorySwitcher.scss"

export default function CategorySwitcher({ filteredCategory }) {

    const [activeCategory, setActiveCategory] = useState("Trending")

    const catagories = ["Trending", "Rock", "Hip Hop", "Electro"]

    const onCategory = (category) => {
        setActiveCategory(category)
        filteredCategory(category)
    }

    return (
        <ul>
            {catagories.map((category) => (
                <li
                    key={category}
                    className={`poppins-regular ${activeCategory === category ? "active" : ""
                        }`}
                    onClick={() => onCategory(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    )
}

