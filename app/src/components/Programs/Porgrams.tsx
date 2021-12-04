import { useEffect, useState } from "react"
import { PageHeader } from "../PageHeader/PageHeader"
import DashBoard from '../../components/PackComponents/src/views/RTL/RTLPage'
import { CardsContainer } from "./Porgrams.styled"
import { ProgramCard } from "./ProgramCard/ProgramCard"

export const Programs : React.FC = () => {

    const [programs, setPrograms] = useState<any[]>([])

    useEffect(() => {
        // TODO: feth api
        setPrograms([
            {
                "id": 1,
                "name": "Убираем Камчатку!",
                "description": "ВолонтерскийВолонтерскийВолонтерскийВолонтерскийВолонтерский трип, задуманный помочь избавиться Камчатке от мусора.",
                "date_start": "2022-01-13",
                "date_end": "2022-01-18",
                "image": "http://188.93.211.127:8000/media/8efa6ba692e5c6dd4ce070ae7f8ea1b9.jpeg",
                "team": []
            },
            {
                "id": 1,
                "name": "Убираем Камчатку!",
                "description": "ВолонтерскийВолонтерскийВолонтерскийВолонтерскийВолонтерский трип, задуманный помочь избавиться Камчатке от мусора.",
                "date_start": "2022-01-13",
                "date_end": "2022-01-18",
                "image": "http://188.93.211.127:8000/media/8efa6ba692e5c6dd4ce070ae7f8ea1b9.jpeg",
                "team": []
            },
                        {
                "id": 1,
                "name": "Убираем Камчатку!",
                "description": "Волонтерский трип, задуманный ВолонтерскийВолонтерскийВолонтерскийпомочь избавиться Камчатке от мусора.",
                "date_start": "2022-01-13",
                "date_end": "2022-01-18",
                "image": "http://188.93.211.127:8000/media/8efa6ba692e5c6dd4ce070ae7f8ea1b9.jpeg",
                "team": []
            },
        ])
    }, [])
    
    return (
        <>  
            <PageHeader>Программы</PageHeader>
            <DashBoard></DashBoard>
            <br/>
            <CardsContainer>
                {programs.map((program) => <ProgramCard card={program}/>)}
            </CardsContainer>
        </>
    )

}