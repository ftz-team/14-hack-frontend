import { Card, CardDescriptions, CardHeader } from "./ProgramCard.styled"

export const ProgramCard : React.FC<any> = ({card}) => {
    console.log(card);
    
    return (
        <>
            <Card background={card.image}>
                <CardHeader>
                    {card.name}
                </CardHeader>
                <CardDescriptions>
                    {card.description}
                </CardDescriptions>
            </Card>
        </>
    )

}