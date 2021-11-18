import { useEffect, useState } from "react";
import { getData } from "./services/service";
import Betslip from "./components/Betslip/Betslip";
import EventList from "./components/EventList/EventList";
import "./global.scss";

const App = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [eventData, setEventData] = useState<object>({});
  const [betSlipList, setBetSlipList] = useState<any>([]);

  let newBet: any;

  const handleBetSlips = (selectionId: string, market: any) => {
    if (betSlipList.some((bet: any) => bet.id === selectionId)) {
      deleteBetSlipsById(selectionId);
    } else {
      newBet = market.selections.find((item: any) => item.id === selectionId);
      newBet.title = market.name;
      newBet.marketId = market.id;
      setBetSlipList([...betSlipList, newBet]);
    }
  };

  const deleteBetSlipsById = (selectionId: string, marketId?: string) => {
    setBetSlipList(
      betSlipList.filter((betItem: any) => betItem.id !== selectionId)
    );
  };

  useEffect(() => {
    getData().then(
      (response) => {
        setEventData(response.data);
        setisLoaded(true);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <div className="App">
      {isLoaded && (
        <>
          <Betslip betSlipList={betSlipList} onDeleteBetSlips={deleteBetSlipsById} />
          <EventList eventList={eventData} onHandleBetSlips={handleBetSlips} />
        </>
      )}
    </div>
  );
};

export default App;
