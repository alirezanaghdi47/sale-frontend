// libraries
import {useState} from "react";

export const useActive = (initialState) => {

    const [active, setActive] = useState(initialState);

    const _handleSetActive = (data) => setActive(data);

    const _handleUnSetActive = () => setActive("");

    return {active, _handleSetActive, _handleUnSetActive};

}

