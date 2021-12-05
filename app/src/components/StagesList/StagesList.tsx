import { Stage } from "./Stage/Stage";
import { StagesCard, StagesCardHeader } from "./StagesList.styled";
import not from "../../assets/img/not.png";
import { useEffect, useState } from "react";

type StagesProps = {
  collapsable?: boolean;
};

export const useStagesList: any = (collapsable: any) => {
  const [opened, setOpened] = useState(0);

  const onItemClick = (num: any) => {
    if (collapsable) {
      setOpened(num);
    }
  };

  useEffect(() => {
    if (!collapsable) {
      setOpened(-1);
    }
  }, [collapsable]);

  return [
    opened,
    <>
      <StagesCard>
        <StagesCardHeader>Этапы</StagesCardHeader>
        <div onClick={() => onItemClick(0)}>
          <Stage
            opened={opened == 0}
            icon={not.src}
            text={"Прием заявок"}
            date={"22 DEC 7:20 PM"}
          />
        </div>
        <div onClick={() => onItemClick(1)}>
          <Stage
            opened={opened == 1}
            icon={not.src}
            text={"Прием заявок"}
            date={"22 DEC 7:20 PM"}
          />
        </div>
      </StagesCard>
    </>,
  ];
};
