import { useEffect, useState } from "react";

export default function Clock(){
    const [time, setTime] = useState<string>()
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    })

    return <p>{time}</p>
}