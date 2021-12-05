import { useEffect, useState } from "react"
import { PageHeader } from "../../PageHeader/PageHeader"
import { useStagesList } from "../../StagesList/StagesList"
import { UsersList } from "../../UsersList/UsersList"
import { ProgramCard } from "../ProgramCard/ProgramCard"
import { CardBox, ProgramGrid, StagesBox, StatsBox, UsersBox } from "./Program.styled"
import DashBoard from '../../../components/PackComponents/src/views/RTL/RTLPage'
import { UsersTable } from "../../UsersList/UsersTable/UsersTable"

export const Program : React.FC = () => {

    const [programData, setProgramData] = useState<any>(            {
        "id": 1,
        "name": "Убираем Камчатку!",
        "description": "ВолонтерскийВолонтерскийВолонтерскийВолонтерскийВолонтерский трип, задуманный помочь избавиться Камчатке от мусора.",
        "date_start": "2022-01-13",
        "date_end": "2022-01-18",
        "image": "http://188.93.211.127:8000/media/8efa6ba692e5c6dd4ce070ae7f8ea1b9.jpeg",
        "team": []
    })

    useEffect(() => {
        setProgramData(
            {
                "id": 1,
                "name": "Убираем Камчатку!",
                "description": "ВолонтерскийВолонтерскийВолонтерскийВолонтерскийВолонтерский трип, задуманный помочь избавиться Камчатке от мусора.",
                "date_start": "2022-01-13",
                "date_end": "2022-01-18",
                "image": "http://188.93.211.127:8000/media/8efa6ba692e5c6dd4ce070ae7f8ea1b9.jpeg",
                "team": []
            }
        )
    }, [])

    return (
        <>
            <PageHeader>Программа</PageHeader>
            <br></br>
            <ProgramGrid>
                <CardBox>
                    <ProgramCard card={programData}></ProgramCard>
                </CardBox>
                <StatsBox>
                <StatsBox>
                    <PageHeader>Программа</PageHeader>
                </StatsBox>
                </StatsBox>
                <UsersBox>
                    <UsersTable/>
                </UsersBox>
                <StagesBox>
                    {useStagesList(false)[1]}
                </StagesBox>
            </ProgramGrid>
        </>
    )

}