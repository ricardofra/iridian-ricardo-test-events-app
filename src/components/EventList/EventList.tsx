import './EventList.scss';

const EventList = (props: any) => {

  const handleActiveItem = (event: any, selectionId: object, market: string) => {
    if (event.target.classList.contains('active')) {
      event.target.classList.toggle('active');
    } else {  
      event.target.classList.toggle('active');
    }
    props.onHandleBetSlips(selectionId, market);
  }

  return (
    <div className='event-list'>
      {props.eventList.map((eventItem: any) =>
        <div key={eventItem.id} className='event-list__item'>
          {eventItem.markets.length > 0 &&
            <>
              <div className="event-list__item__title">
                <p>{eventItem.name}</p>
              </div>
              {eventItem.markets.map((market: any) =>
                <div key={market.id} className='event-list__market'>
                  <p>{market.name}</p>
                  <div className="event-list__market__buttons">
                    {market.selections.map((selection: any) =>
                      <button key={selection.id}  onClick={(e) => handleActiveItem(e, selection.id, market)}>
                        {selection.name}
                        <br />
                        {selection.price}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          }
        </div>
      )}
    </div>
  )
}

export default EventList
