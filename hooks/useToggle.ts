import { useState } from "react";



export default function useToggle() {
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
    }

    return { isActive, toggleActive }
}